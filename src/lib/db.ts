import { neon } from "@neondatabase/serverless";

// neon() uses HTTP transport — works in any browser without WebSocket
const CONNECTION = import.meta.env.VITE_DATABASE_URL;

if (!CONNECTION) {
  console.warn("VITE_DATABASE_URL is not defined. Database features will be unavailable.");
}

export const sql = CONNECTION 
  ? neon(CONNECTION) 
  : ((...args: any[]) => {
      console.error("Database connection string missing. Please set VITE_DATABASE_URL.");
      return Promise.reject(new Error("Database connection string missing."));
    }) as any;
