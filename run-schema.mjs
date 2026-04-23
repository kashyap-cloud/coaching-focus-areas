import { Pool, neonConfig } from "@neondatabase/serverless";
import ws from "ws";

neonConfig.webSocketConstructor = ws;

const CONNECTION = process.env.VITE_DATABASE_URL;
if (!CONNECTION) {
  console.error("❌ DATABASE_URL environment variable is not set");
  process.exit(1);
}

const pool = new Pool({ connectionString: CONNECTION });
const client = await pool.connect();

const stmts = [
  // 0. MIGRATION: Convert UUIDs to TEXT for Handshake compatibility
  `ALTER TABLE exercise_responses DROP CONSTRAINT IF EXISTS exercise_responses_session_id_fkey`,
  `ALTER TABLE special_exercise_responses DROP CONSTRAINT IF EXISTS special_exercise_responses_session_id_fkey`,
  `ALTER TABLE exercise_sessions DROP CONSTRAINT IF EXISTS exercise_sessions_user_id_fkey`,
  `ALTER TABLE users ALTER COLUMN id TYPE TEXT`,
  `ALTER TABLE users DROP COLUMN IF EXISTS device_id`,
  `ALTER TABLE exercise_sessions ALTER COLUMN user_id TYPE TEXT`,
  `ALTER TABLE exercise_sessions ADD CONSTRAINT exercise_sessions_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE`,

  `CREATE TABLE IF NOT EXISTS users (
    id           TEXT PRIMARY KEY,
    display_name TEXT,
    created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at   TIMESTAMPTZ NOT NULL DEFAULT now()
  )`,

  `CREATE TABLE IF NOT EXISTS coaching_areas (
    id          TEXT PRIMARY KEY,
    name        TEXT NOT NULL,
    lucide_icon TEXT NOT NULL,
    bg_color    TEXT NOT NULL,
    icon_color  TEXT NOT NULL
  )`,

  `CREATE TABLE IF NOT EXISTS exercises (
    id            TEXT PRIMARY KEY,
    title         TEXT NOT NULL,
    description   TEXT,
    exercise_type TEXT NOT NULL DEFAULT 'template',
    special_type  TEXT
  )`,

  `CREATE TABLE IF NOT EXISTS coaching_area_exercises (
    coaching_area_id TEXT NOT NULL REFERENCES coaching_areas(id) ON DELETE CASCADE,
    exercise_id      TEXT NOT NULL REFERENCES exercises(id) ON DELETE CASCADE,
    display_order    INT  NOT NULL DEFAULT 0,
    PRIMARY KEY (coaching_area_id, exercise_id)
  )`,

  `CREATE TABLE IF NOT EXISTS exercise_sessions (
    id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id          TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    coaching_area_id TEXT NOT NULL REFERENCES coaching_areas(id),
    exercise_id      TEXT NOT NULL REFERENCES exercises(id),
    status           TEXT NOT NULL DEFAULT 'in_progress',
    started_at       TIMESTAMPTZ NOT NULL DEFAULT now(),
    completed_at     TIMESTAMPTZ,
    created_at       TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at       TIMESTAMPTZ NOT NULL DEFAULT now()
  )`,

  `CREATE INDEX IF NOT EXISTS idx_sessions_user     ON exercise_sessions(user_id)`,
  `CREATE INDEX IF NOT EXISTS idx_sessions_area     ON exercise_sessions(coaching_area_id)`,
  `CREATE INDEX IF NOT EXISTS idx_sessions_exercise ON exercise_sessions(exercise_id)`,

  `CREATE TABLE IF NOT EXISTS exercise_responses (
    id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id    UUID NOT NULL REFERENCES exercise_sessions(id) ON DELETE CASCADE,
    field_id      TEXT NOT NULL,
    field_label   TEXT,
    field_type    TEXT,
    response_text TEXT,
    response_json JSONB,
    created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE (session_id, field_id)
  )`,

  `CREATE INDEX IF NOT EXISTS idx_responses_session ON exercise_responses(session_id)`,

  `CREATE TABLE IF NOT EXISTS special_exercise_responses (
    id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id    UUID NOT NULL REFERENCES exercise_sessions(id) ON DELETE CASCADE,
    special_type  TEXT NOT NULL,
    response_data JSONB NOT NULL DEFAULT '{}',
    score         INT,
    created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE (session_id)
  )`,

  `INSERT INTO coaching_areas (id, name, lucide_icon, bg_color, icon_color) VALUES
    ('career',       'Career',       'Briefcase',     'bg-coaching-career',       'text-blue-600'),
    ('executive',    'Executive',    'UserCog',       'bg-coaching-executive',    'text-slate-700'),
    ('wellness',     'Wellness',     'HeartPulse',    'bg-coaching-wellness',     'text-pink-500'),
    ('leadership',   'Leadership',   'Users',         'bg-coaching-leadership',   'text-teal-600'),
    ('finance',      'Finance',      'DollarSign',    'bg-coaching-finance',      'text-emerald-600'),
    ('performance',  'Performance',  'TrendingUp',    'bg-coaching-performance',  'text-orange-600'),
    ('mindset',      'Mindset',      'Brain',         'bg-coaching-mindset',      'text-indigo-600'),
    ('spiritual',    'Spiritual',    'Sun',           'bg-coaching-spiritual',    'text-amber-500'),
    ('mental-health','Mental Health','Activity',      'bg-coaching-mental',       'text-rose-500'),
    ('transform',    'Transform',    'RefreshCw',     'bg-coaching-transform',    'text-purple-600'),
    ('communicate',  'Communicate',  'MessageSquare', 'bg-coaching-communicate',  'text-sky-500'),
    ('organization', 'Organization', 'Building',      'bg-coaching-organization', 'text-violet-600'),
    ('creativity',   'Creativity',   'Palette',       'bg-coaching-creativity',   'text-blue-500'),
    ('employee',     'Employee',     'User',          'bg-coaching-employee',     'text-neutral-600'),
    ('corporate',    'Corporate',    'Building2',     'bg-coaching-corporate',    'text-slate-800'),
    ('confidence',   'Confidence',   'Shield',        'bg-coaching-confidence',   'text-amber-700')
  ON CONFLICT (id) DO NOTHING`,

  `INSERT INTO exercises (id, title, exercise_type) VALUES
    ('improvement-canvas',     'Improvement Canvas',                    'template'),
    ('swot-analysis',          'Personal SWOT Analysis',                'template'),
    ('not-to-do-list',         'Not-to-do List',                        'template'),
    ('grow',                   'GROW',                                  'template'),
    ('make-heart-sing',        'What Makes My Heart Sing?',             'template'),
    ('detox-relationship',     'Detox Your Relationship',               'template'),
    ('energy-zappers',         'Identify Your Energy Zappers',          'template'),
    ('putting-up-with',        'What Are You Putting Up With?',         'template'),
    ('urgent-vs-important',    'Urgent vs. Important',                  'template'),
    ('plan-do-review',         'Plan, Do and Review',                   'template'),
    ('my-money-priorities',    'My Money Priorities',                   'template'),
    ('financial-goals-chart',  'Financial Goals Chart',                 'template'),
    ('unstick-yourself',       'Unstick Yourself Now!',                 'template'),
    ('love-your-weaknesses',   'Love Your Weaknesses',                  'template'),
    ('build-a-bridge',         'Build a Bridge',                        'template'),
    ('mentor-magic',           'Mentor Magic!',                         'template'),
    ('let-go',                 'What Do You Need to Let Go of?',        'template'),
    ('too-comfortable',        'Are you sitting (too) comfortably?',    'template'),
    ('daily-success-habits',   'Daily Success Habits',                  'template'),
    ('positive-visualisation', 'Positive Visualisation',                'template'),
    ('get-perspective',        'Get Perspective',                       'template'),
    ('talk-to-yourself',       'Talk to Yourself!',                     'template'),
    ('three-month-vision',     '3 Month Vision Worksheet',              'template'),
    ('powerful-questions',     'Powerful Pondering Questions',          'template'),
    ('goals-motivator',        'Goals Motivator',                       'template'),
    ('35-questions-to-ponder', '35 Questions to Ponder',                'template'),
    ('softened-start-up',      'The Softened Start-Up',                 'template'),
    ('career-discovery',       'Career Discovery',                      'template'),
    ('priority-matrix',        'Action/Priority Matrix',                'template'),
    ('dictionary-story',       'Dictionary Story',                      'template'),
    ('alternate-uses',         'Alternate Uses',                        'template'),
    ('my-day',                 'My Day',                                'template'),
    ('compound-collaborative', 'Compound Collaborative',                'template'),
    ('reminder-list',          'Reminder List',                         'template'),
    ('intake-questions',       'Intake Questions',                      'template'),
    ('take-stock-take-action', 'Take Stock and Take Action',            'template'),
    ('reclaim-your-power',     'Reclaim Your Power at Work',            'template'),
    ('spheres-of-influence',   'My Spheres of Influence',               'template'),
    ('expand-your-mind',       'Expand Your Mind',                      'template')
  ON CONFLICT (id) DO NOTHING`,

  `INSERT INTO exercises (id, title, exercise_type, special_type) VALUES
    ('self-care-quiz',       'Self-Care Quiz',       'special', 'quiz'),
    ('self-care-checkin',    'Self-care List',        'special', 'checkin'),
    ('success-planner',      'Success Planner',       'special', 'planner'),
    ('stop-procrastinating', 'Eliminate Delaying',    'special', 'procrastinating'),
    ('get-motivated',        'Get Motivated!',        'special', 'get-motivated'),
    ('intuition',            'Intuition Exercise',    'special', 'intuition'),
    ('love-loathe',          'Love And Loathe List',  'special', 'love-loathe'),
    ('discover-yourself',    'Discover Yourself',     'special', 'discover-yourself'),
    ('gratitude-diary',      'Gratitude Diary',       'special', 'gratitude-diary'),
    ('wacky-wild-goal',      'Wacky Wild Goal',       'special', 'wacky-wild-goal'),
    ('big-rocks',            'Big & Little Rocks',    'special', 'big-rocks'),
    ('rocking-chair',        'Rocking Chair',         'special', 'rocking-chair'),
    ('smart-goals',          'SMART! Goals',          'special', 'smart-goals')
  ON CONFLICT (id) DO NOTHING`,

  `INSERT INTO coaching_area_exercises (coaching_area_id, exercise_id, display_order) VALUES
    ('career','improvement-canvas',0),('career','swot-analysis',1),('career','not-to-do-list',2),('career','grow',3),
    ('executive','grow',0),('executive','improvement-canvas',1),('executive','swot-analysis',2),('executive','not-to-do-list',3),
    ('wellness','self-care-quiz',0),('wellness','self-care-checkin',1),('wellness','make-heart-sing',2),('wellness','too-comfortable',3),
    ('leadership','detox-relationship',0),('leadership','make-heart-sing',1),('leadership','energy-zappers',2),('leadership','putting-up-with',3),
    ('finance','urgent-vs-important',0),('finance','plan-do-review',1),('finance','my-money-priorities',2),('finance','financial-goals-chart',3),
    ('performance','success-planner',0),('performance','stop-procrastinating',1),('performance','unstick-yourself',2),('performance','love-your-weaknesses',3),
    ('mindset','three-month-vision',0),('mindset','get-motivated',1),('mindset','build-a-bridge',2),('mindset','smart-goals',3),
    ('spiritual','mentor-magic',0),('spiritual','intuition',1),('spiritual','love-loathe',2),('spiritual','powerful-questions',3),
    ('mental-health','let-go',0),('mental-health','too-comfortable',1),('mental-health','discover-yourself',2),('mental-health','gratitude-diary',3),
    ('transform','wacky-wild-goal',0),('transform','big-rocks',1),('transform','rocking-chair',2),('transform','goals-motivator',3),
    ('communicate','talk-to-yourself',0),('communicate','35-questions-to-ponder',1),('communicate','positive-visualisation',2),('communicate','softened-start-up',3),
    ('organization','get-perspective',0),('organization','career-discovery',1),('organization','expand-your-mind',2),('organization','priority-matrix',3),
    ('creativity','dictionary-story',0),('creativity','alternate-uses',1),('creativity','my-day',2),('creativity','compound-collaborative',3),
    ('employee','daily-success-habits',0),('employee','reminder-list',1),('employee','intake-questions',2),('employee','take-stock-take-action',3),
    ('corporate','reclaim-your-power',0),('corporate','spheres-of-influence',1),('corporate','build-a-bridge',2),('corporate','three-month-vision',3),
    ('confidence','daily-success-habits',0),('confidence','priority-matrix',1),('confidence','positive-visualisation',2),('confidence','career-discovery',3)
  ON CONFLICT DO NOTHING`,
];

try {
  let ok = 0, fail = 0;
  console.log(`Running ${stmts.length} statements...\n`);
  for (let i = 0; i < stmts.length; i++) {
    try {
      await client.query(stmts[i]);
      console.log(`  ✓ [${i+1}/${stmts.length}] ${stmts[i].trim().slice(0,60).replace(/\n/g," ")}...`);
      ok++;
    } catch(e) {
      console.error(`  ✗ [${i+1}/${stmts.length}] ${e.message.split("\n")[0]}`);
      fail++;
    }
  }
  console.log(`\n✅  ${ok} OK  |  ${fail} failed`);
} finally {
  client.release();
  await pool.end();
}
