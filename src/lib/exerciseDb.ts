import { sql } from "./db";

// ─────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────
export interface ExerciseSession {
  id: string;
  user_id: string;
  coaching_area_id: string;
  exercise_id: string;
  status: "in_progress" | "completed";
  started_at: string;
  completed_at: string | null;
  created_at: string;
  // joined fields
  exercise_title?: string;
  coaching_area_name?: string;
}

export interface ExerciseResponse {
  id: string;
  session_id: string;
  field_id: string;
  field_label: string | null;
  field_type: string | null;
  response_text: string | null;
  response_json: unknown | null;
  created_at: string;
  updated_at: string;
}

export interface SpecialExerciseResponse {
  id: string;
  session_id: string;
  special_type: string;
  response_data: Record<string, unknown>;
  score: number | null;
}

// ─────────────────────────────────────────────────────────────────
// User management
// ─────────────────────────────────────────────────────────────────

/** Gets or creates an anonymous user by external Handshake user_id. */
export async function getOrCreateUser(userId: string): Promise<string> {
  // Upsert user to ensure they exist
  await sql`
    INSERT INTO users (id) VALUES (${userId})
    ON CONFLICT (id) DO NOTHING
  `;
  return userId;
}

// ─────────────────────────────────────────────────────────────────
// Session management
// ─────────────────────────────────────────────────────────────────

/** Creates a new exercise session and returns its UUID. */
export async function startSession(
  userId: string,
  coachingAreaId: string,
  exerciseId: string
): Promise<string> {
  const result = await sql`
    INSERT INTO exercise_sessions (user_id, coaching_area_id, exercise_id, status)
    VALUES (${userId}, ${coachingAreaId}, ${exerciseId}, 'in_progress')
    RETURNING id
  `;
  return result[0].id as string;
}

/** Marks a session as completed. */
export async function completeSession(sessionId: string): Promise<void> {
  await sql`
    UPDATE exercise_sessions
    SET status = 'completed', completed_at = now(), updated_at = now()
    WHERE id = ${sessionId}
  `;
}

// ─────────────────────────────────────────────────────────────────
// Template exercise responses
// ─────────────────────────────────────────────────────────────────

/** Upserts a single field response inside a session. */
export async function saveFieldResponse(
  sessionId: string,
  fieldId: string,
  fieldLabel: string,
  fieldType: string,
  responseText: string | null,
  responseJson: unknown | null
): Promise<void> {
  await sql`
    INSERT INTO exercise_responses
      (session_id, field_id, field_label, field_type, response_text, response_json)
    VALUES
      (${sessionId}, ${fieldId}, ${fieldLabel}, ${fieldType},
       ${responseText}, ${responseJson ? JSON.stringify(responseJson) : null})
    ON CONFLICT (session_id, field_id)
    DO UPDATE SET
      response_text = EXCLUDED.response_text,
      response_json = EXCLUDED.response_json,
      updated_at    = now()
  `;
}

/** Saves all field responses for a template exercise in one batch. */
export async function saveAllFieldResponses(
  sessionId: string,
  fields: {
    fieldId: string;
    fieldLabel: string;
    fieldType: string;
    responseText: string | null;
    responseJson: unknown | null;
  }[]
): Promise<void> {
  for (const f of fields) {
    await saveFieldResponse(
      sessionId,
      f.fieldId,
      f.fieldLabel,
      f.fieldType,
      f.responseText,
      f.responseJson
    );
  }
}

/** Fetches all field responses for a given session. */
export async function getFieldResponses(
  sessionId: string
): Promise<ExerciseResponse[]> {
  const rows = await sql`
    SELECT * FROM exercise_responses WHERE session_id = ${sessionId} ORDER BY created_at
  `;
  return rows as ExerciseResponse[];
}

// ─────────────────────────────────────────────────────────────────
// Special exercise responses
// ─────────────────────────────────────────────────────────────────

/** Saves (or replaces) the response blob for a special exercise. */
export async function saveSpecialResponse(
  sessionId: string,
  specialType: string,
  responseData: Record<string, unknown>,
  score?: number
): Promise<void> {
  await sql`
    INSERT INTO special_exercise_responses
      (session_id, special_type, response_data, score)
    VALUES
      (${sessionId}, ${specialType}, ${JSON.stringify(responseData)}, ${score ?? null})
    ON CONFLICT (session_id)
    DO UPDATE SET
      response_data = EXCLUDED.response_data,
      score         = EXCLUDED.score,
      updated_at    = now()
  `;
}

/** Fetches the stored blob for a special exercise session. */
export async function getSpecialResponse(
  sessionId: string
): Promise<SpecialExerciseResponse | null> {
  const rows = await sql`
    SELECT * FROM special_exercise_responses WHERE session_id = ${sessionId} LIMIT 1
  `;
  return rows.length > 0 ? (rows[0] as SpecialExerciseResponse) : null;
}

// ─────────────────────────────────────────────────────────────────
// History queries
// ─────────────────────────────────────────────────────────────────

/** Returns all completed sessions for a user, newest first. */
export async function getExerciseHistory(
  userId: string,
  coachingAreaId?: string
): Promise<ExerciseSession[]> {
  if (coachingAreaId) {
    const rows = await sql`
      SELECT
        es.*,
        e.title  AS exercise_title,
        ca.name  AS coaching_area_name
      FROM exercise_sessions es
      JOIN exercises       e  ON e.id  = es.exercise_id
      JOIN coaching_areas  ca ON ca.id = es.coaching_area_id
      WHERE es.user_id          = ${userId}
        AND es.coaching_area_id = ${coachingAreaId}
        AND es.status           = 'completed'
      ORDER BY es.completed_at DESC
    `;
    return rows as ExerciseSession[];
  }

  const rows = await sql`
    SELECT
      es.*,
      e.title  AS exercise_title,
      ca.name  AS coaching_area_name
    FROM exercise_sessions es
    JOIN exercises       e  ON e.id  = es.exercise_id
    JOIN coaching_areas  ca ON ca.id = es.coaching_area_id
    WHERE es.user_id = ${userId}
      AND es.status  = 'completed'
    ORDER BY es.completed_at DESC
  `;
  return rows as ExerciseSession[];
}

/** Returns all responses (fields) for a given session. */
export async function getSessionDetail(
  sessionId: string
): Promise<{ session: ExerciseSession | null; responses: ExerciseResponse[]; special: SpecialExerciseResponse | null }> {
  const sessionRows = await sql`
    SELECT es.*, e.title AS exercise_title, ca.name AS coaching_area_name
    FROM exercise_sessions es
    JOIN exercises       e  ON e.id  = es.exercise_id
    JOIN coaching_areas  ca ON ca.id = es.coaching_area_id
    WHERE es.id = ${sessionId}
    LIMIT 1
  `;
  const session = sessionRows.length > 0 ? (sessionRows[0] as ExerciseSession) : null;
  const responses = await getFieldResponses(sessionId);
  const special = await getSpecialResponse(sessionId);
  return { session, responses, special };
}
