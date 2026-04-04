import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { coachingAreas, type CoachingArea } from "@/data/coachingAreas";
import CoachingAreaCard from "@/components/CoachingAreaCard";
import CoachingAreaDetail from "@/components/CoachingAreaDetail";

const Index = () => {
  const [selectedArea, setSelectedArea] = useState<CoachingArea | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-lg px-4 py-6 sm:max-w-2xl">
        <AnimatePresence mode="wait">
          {selectedArea ? (
            <CoachingAreaDetail
              key={selectedArea.id}
              area={selectedArea}
              onBack={() => setSelectedArea(null)}
            />
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.25 }}
            >
              {/* Header */}
              <div className="mb-2 flex items-center gap-3">
                <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-card coaching-card-shadow">
                  <ArrowLeft className="h-5 w-5 text-foreground" />
                </button>
                <h1 className="text-2xl font-bold text-foreground">Coaching Areas</h1>
              </div>
              <p className="mb-6 text-center text-sm text-muted-foreground">
                What coaching focus interests you?
              </p>

              {/* Grid */}
              <div className="grid grid-cols-3 gap-4">
                {coachingAreas.map((area, i) => (
                  <CoachingAreaCard
                    key={area.id}
                    area={area}
                    index={i}
                    onClick={setSelectedArea}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
