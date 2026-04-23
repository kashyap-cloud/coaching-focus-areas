import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getOrCreateUser } from "@/lib/exerciseDb";

export const HandshakeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isReady, setIsReady] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const initialize = async () => {
      // 1. Check if we already have a valid session
      const existingUserId = sessionStorage.getItem("user_id");
      if (existingUserId) {
        setIsReady(true);
        return;
      }

      // 2. Extract token from URL
      const searchParams = new URLSearchParams(location.search);
      const token = searchParams.get("token");

      if (!token) {
        // In development, allow bypassing the token requirement
        if (import.meta.env.DEV) {
          console.warn("No token found, but in DEV mode. Bypassing handshake.");
          const devUserId = "dev_user_123";
          
          // Ensure the dev user exists in the DB
          try {
            await getOrCreateUser(devUserId);
          } catch (e) {
            console.error("DB User Creation failed in DEV:", e);
          }
          
          sessionStorage.setItem("user_id", devUserId);
          setIsReady(true);
          return;
        }
        window.location.href = "/token"; // Hard redirect
        return;
      }

      // 3. Validate Token
      try {
        const res = await fetch("https://api.mantracare.com/user/user-info", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });

        if (!res.ok) {
          throw new Error("Invalid token");
        }

        const data = await res.json();
        const userId = data.user_id;

        if (!userId) {
          throw new Error("Missing user_id from response");
        }

        // 4. Store user_id and clean URL
        sessionStorage.setItem("user_id", userId.toString());
        
        // Ensure user exists in our Neon DB users table (Profile Creation/Initialization)
        await getOrCreateUser(userId.toString());

        // Remove token from URL without reloading
        searchParams.delete("token");
        const newUrl = window.location.pathname + (searchParams.toString() ? "?" + searchParams.toString() : "") + window.location.hash;
        window.history.replaceState({}, document.title, newUrl);
        
        setIsReady(true);
      } catch (err) {
        console.error("Handshake failed:", err);
        // If database initialization failed but we have a user_id (e.g. from sessionStorage), still allow entry
        if (sessionStorage.getItem("user_id")) {
          setIsReady(true);
          return;
        }
        window.location.href = "/token";
      }
    };

    initialize();
  }, [location.search]);

  if (!isReady) {
    return (
      <div className="flex flex-col h-screen w-screen items-center justify-center bg-background gap-4">
        <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center animate-pulse">
            <div className="h-6 w-6 rounded-full bg-primary" />
        </div>
        <p className="text-sm font-bold text-foreground animate-pulse">Preparing your personal space...</p>
      </div>
    );
  }

  return <>{children}</>;
};
