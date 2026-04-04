import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight, Lightbulb, Quote, BookOpen } from "lucide-react";
import type { CoachingArea } from "@/data/coachingAreas";

interface Props {
  area: CoachingArea;
  onBack: () => void;
}

const exerciseColors = [
  "bg-destructive/10 text-destructive",
  "bg-accent/20 text-accent-foreground",
  "bg-primary/10 text-primary",
  "bg-coaching-finance text-foreground",
];

const resourceIcons = {
  tips: Lightbulb,
  quotes: Quote,
  ebooks: BookOpen,
};

const resourceColors = {
  tips: "bg-primary/10",
  quotes: "bg-coaching-wellness",
  ebooks: "bg-coaching-performance",
};

const CoachingAreaDetail = ({ area, onBack }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-6"
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-card coaching-card-shadow transition-all hover:coaching-card-shadow-hover"
        >
          <ArrowLeft className="h-5 w-5 text-foreground" />
        </button>
        <h1 className="text-2xl font-bold text-foreground">{area.name}</h1>
      </div>

      {/* Exercises */}
      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Exercises
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {area.exercises.map((ex, i) => (
            <motion.button
              key={ex.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`flex flex-col items-center gap-2 rounded-2xl p-4 coaching-card-shadow transition-all hover:coaching-card-shadow-hover ${exerciseColors[i % 4]}`}
            >
              <span className="text-3xl">{ex.icon}</span>
              <span className="text-xs font-semibold text-center">{ex.title}</span>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Learn */}
      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Learn
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {area.learn.map((item, i) => (
            <motion.button
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.06 }}
              whileHover={{ y: -3 }}
              className="group overflow-hidden rounded-2xl coaching-card-shadow transition-all hover:coaching-card-shadow-hover"
            >
              <div className="flex h-24 items-center justify-center bg-muted">
                <span className="text-3xl opacity-40">📖</span>
              </div>
              <div className="p-3">
                <span className="text-xs font-semibold text-foreground">{item.title}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Resources
        </h2>
        <div className="flex flex-col gap-3">
          {area.resources.map((res, i) => {
            const Icon = resourceIcons[res.type];
            return (
              <motion.button
                key={res.type}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 + i * 0.08 }}
                whileHover={{ x: 4 }}
                className={`flex items-center gap-4 rounded-2xl p-4 coaching-card-shadow transition-all hover:coaching-card-shadow-hover ${resourceColors[res.type]}`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-card">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-sm font-bold text-foreground">{res.title}</p>
                  <p className="text-xs text-muted-foreground">{res.subtitle}</p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </motion.button>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
};

export default CoachingAreaDetail;
