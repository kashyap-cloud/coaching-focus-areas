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

try {
  await client.query(`
    INSERT INTO coaching_area_exercises (coaching_area_id, exercise_id, display_order) VALUES
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
      ('organization','get-perspective',0),('organization','career-discovery',1),('organization','career-discovery',2),('organization','priority-matrix',3),
      ('creativity','dictionary-story',0),('creativity','alternate-uses',1),('creativity','my-day',2),('creativity','compound-collaborative',3),
      ('employee','daily-success-habits',0),('employee','reminder-list',1),('employee','intake-questions',2),('employee','take-stock-take-action',3),
      ('corporate','reclaim-your-power',0),('corporate','spheres-of-influence',1),('corporate','build-a-bridge',2),('corporate','three-month-vision',3),
      ('confidence','daily-success-habits',0),('confidence','priority-matrix',1),('confidence','positive-visualisation',2),('confidence','career-discovery',3)
    ON CONFLICT DO NOTHING
  `);
  console.log("✅ coaching_area_exercises seeded successfully!");
} catch(e) {
  console.error("✗", e.message);
} finally {
  client.release();
  await pool.end();
}
