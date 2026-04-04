import { motion } from "framer-motion";
import { ArrowLeft, BookOpenCheck, Download } from "lucide-react";
import { icons } from "lucide-react";
import type { AreaResources } from "@/data/resourcesContent";

interface Props {
  areaId: string;
  resourceType: "tips" | "quotes" | "ebooks";
  resources: AreaResources;
  onBack: () => void;
}

const titles = { tips: "Tips", quotes: "Quotes", ebooks: "Ebooks" };

const ResourceDetail = ({ resourceType, resources, onBack }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-5"
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-card coaching-card-shadow transition-all hover:coaching-card-shadow-hover"
        >
          <ArrowLeft className="h-5 w-5 text-foreground" />
        </button>
        <h1 className="text-2xl font-bold text-foreground">{titles[resourceType]}</h1>
      </div>

      {/* Tips */}
      {resourceType === "tips" && (
        <div className="flex flex-col gap-3">
          {resources.tips.map((tip, i) => {
            const IconComp = icons[tip.icon as keyof typeof icons];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="flex items-start gap-4 rounded-2xl bg-card p-4 coaching-card-shadow"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  {IconComp ? (
                    <IconComp className="h-7 w-7 text-primary" strokeWidth={1.8} />
                  ) : (
                    <span className="text-xl">💡</span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-foreground">{tip.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{tip.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Quotes */}
      {resourceType === "quotes" && (
        <div className="flex flex-col gap-3">
          {resources.quotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl bg-card p-5 coaching-card-shadow"
              style={{
                borderLeft: `4px solid ${q.borderColor}`,
                backgroundColor: q.bgColor,
              }}
            >
              <p className="text-sm italic leading-relaxed text-foreground">
                &ldquo;{q.text}&rdquo;
              </p>
              <p className="mt-3 text-right text-xs font-semibold" style={{ color: q.borderColor }}>
                – {q.author}
              </p>
            </motion.div>
          ))}
        </div>
      )}

      {/* Ebooks */}
      {resourceType === "ebooks" && (
        <div className="flex flex-col gap-3">
          {resources.ebooks.map((book, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="flex items-center gap-4 rounded-2xl bg-card p-4 coaching-card-shadow"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <BookOpenCheck className="h-7 w-7 text-primary" strokeWidth={1.8} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-foreground">{book.title}</p>
                <p className="mt-1 text-xs font-semibold text-primary">– by {book.author}</p>
              </div>
              <Download className="h-5 w-5 shrink-0 text-primary" />
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default ResourceDetail;
