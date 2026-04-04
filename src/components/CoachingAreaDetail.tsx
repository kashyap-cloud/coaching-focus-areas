import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight, Lightbulb, Quote, BookOpen } from "lucide-react";
import { icons } from "lucide-react";
import type { CoachingArea } from "@/data/coachingAreas";
import { exerciseColorMap } from "@/data/coachingAreas";
import { learnImages } from "@/data/learnImages";

interface Props {
  area: CoachingArea;
  onBack: () => void;
}

const resourceIcons = {
  tips: Lightbulb,
  quotes: Quote,
  ebooks: BookOpen,
};

const resourceBg = {
  tips: "bg-coaching-mindset",
  quotes: "bg-coaching-wellness",
  ebooks: "bg-coaching-performance",
};

const resourceIconBg = {
  tips: "bg-[hsl(210,75%,50%)]",
  quotes: "bg-[hsl(280,55%,50%)]",
  ebooks: "bg-[hsl(330,65%,55%)]",
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
        <div className="grid grid-cols-4 gap-3">
          {area.exercises.map((ex, i) => {
            const IconComponent = icons[ex.lucideIcon as keyof typeof icons];
            const colorClass = exerciseColorMap[ex.color];
            return (
              <motion.button
                key={ex.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex flex-col items-center gap-2"
              >
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-2xl ${colorClass} coaching-card-shadow transition-all hover:coaching-card-shadow-hover`}
                >
                  {IconComponent ? (
                    <IconComponent className="h-9 w-9 text-white" strokeWidth={1.8} />
                  ) : (
                    <span className="text-2xl text-white">⚡</span>
                  )}
                </div>
                <span className="text-xs font-semibold text-foreground text-center leading-tight max-w-[90px]">
                  {ex.title}
                </span>
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* Learn */}
      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Learn
        </h2>
        <div className="grid grid-cols-4 gap-3">
          {area.learn.map((item, i) => (
            <motion.button
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.06 }}
              whileHover={{ y: -3 }}
              className="group flex flex-col items-center gap-2"
            >
              <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl bg-muted coaching-card-shadow transition-all hover:coaching-card-shadow-hover">
                <img
                  src={learnImages[area.id]?.[i] || ""}
                  alt={item.title}
                  loading="lazy"
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-xs font-semibold text-foreground text-center leading-tight max-w-[90px]">
                {item.title}
              </span>
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
                className={`flex items-center gap-4 rounded-2xl p-4 coaching-card-shadow transition-all hover:coaching-card-shadow-hover ${resourceBg[res.type]}`}
              >
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${resourceIconBg[res.type]}`}
                >
                  <Icon className="h-7 w-7 text-white" strokeWidth={1.8} />
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
