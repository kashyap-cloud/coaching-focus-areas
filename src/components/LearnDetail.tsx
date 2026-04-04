import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import type { LearnArticle } from "@/data/learnContent";

interface Props {
  article: LearnArticle;
  onBack: () => void;
}

const LearnDetail = ({ article, onBack }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-5 pb-8"
    >
      {/* Header */}
      <div className="flex items-start gap-3">
        <button
          onClick={onBack}
          className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-card coaching-card-shadow transition-all hover:coaching-card-shadow-hover"
        >
          <ArrowLeft className="h-5 w-5 text-foreground" />
        </button>
        <h1 className="text-xl font-bold text-foreground leading-tight">
          {article.title}
        </h1>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4">
        {article.paragraphs.map((paragraph, i) => {
          // Check if it looks like a heading (short, no period at end)
          const isHeading = paragraph.length < 80 && !paragraph.endsWith(".") && !paragraph.includes("\n");

          if (isHeading) {
            return (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                className="text-base font-bold text-foreground italic"
              >
                {paragraph}
              </motion.p>
            );
          }

          // Check for numbered list
          if (paragraph.includes("\n")) {
            const lines = paragraph.split("\n");
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                className="flex flex-col gap-1"
              >
                {lines.map((line, j) => (
                  <p key={j} className="text-sm leading-relaxed text-muted-foreground">
                    {line}
                  </p>
                ))}
              </motion.div>
            );
          }

          // Check for bold label pattern like "Self-Awareness: ..."
          const boldMatch = paragraph.match(/^([A-Z][\w\s\-]+:)\s(.+)$/);
          if (boldMatch) {
            return (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                className="text-sm leading-relaxed text-muted-foreground"
              >
                <span className="font-bold text-foreground">{boldMatch[1]}</span>{" "}
                {boldMatch[2]}
              </motion.p>
            );
          }

          return (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              className="text-sm leading-relaxed text-muted-foreground"
            >
              {paragraph}
            </motion.p>
          );
        })}
      </div>
    </motion.div>
  );
};

export default LearnDetail;
