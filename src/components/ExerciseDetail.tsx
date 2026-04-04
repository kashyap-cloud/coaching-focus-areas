import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, History, Clock, ChevronDown, ChevronUp, Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import type { ExerciseTemplate } from "@/data/exerciseTemplates";
import { toast } from "@/hooks/use-toast";

interface HistoryEntry {
  id: string;
  date: string;
  fields: Record<string, string>;
}

interface Props {
  template: ExerciseTemplate;
  onBack: () => void;
}

const ExerciseDetail = ({ template, onBack }: Props) => {
  const storageKey = `exercise-history-${template.id}`;
  const [values, setValues] = useState<Record<string, string>>({});
  const [showHistory, setShowHistory] = useState(false);
  const [expandedEntry, setExpandedEntry] = useState<string | null>(null);

  const getHistory = (): HistoryEntry[] => {
    try {
      return JSON.parse(localStorage.getItem(storageKey) || "[]");
    } catch {
      return [];
    }
  };

  const history = getHistory();

  const handleChange = (fieldId: string, value: string) => {
    setValues((prev) => ({ ...prev, [fieldId]: value }));
  };

  const handleSubmit = () => {
    const hasContent = Object.values(values).some((v) => v.trim());
    if (!hasContent) {
      toast({ title: "Please fill in at least one field", variant: "destructive" });
      return;
    }
    const entry: HistoryEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleString(),
      fields: { ...values },
    };
    const prev = getHistory();
    localStorage.setItem(storageKey, JSON.stringify([entry, ...prev].slice(0, 50)));
    setValues({});
    toast({ title: "Saved successfully!" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-5 pb-8"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-card coaching-card-shadow transition-all hover:coaching-card-shadow-hover"
          >
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </button>
          <h1 className="text-xl font-bold text-foreground">{template.title}</h1>
        </div>
        <button
          onClick={() => setShowHistory(!showHistory)}
          className="flex items-center gap-2 rounded-xl bg-card px-4 py-2.5 text-sm font-semibold coaching-card-shadow transition-all hover:coaching-card-shadow-hover"
        >
          <History className="h-4 w-4 text-primary" />
          <span className="text-foreground">History</span>
          {history.length > 0 && (
            <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-primary px-1.5 text-[10px] font-bold text-primary-foreground">
              {history.length}
            </span>
          )}
        </button>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed text-muted-foreground">{template.description}</p>

      {template.importantNote && (
        <div className="rounded-xl border border-border bg-muted/50 p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-1">Important Note:</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{template.importantNote}</p>
        </div>
      )}

      {/* History Panel */}
      {showHistory && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="rounded-2xl border border-border bg-card p-4 coaching-card-shadow"
        >
          <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-foreground">
            <Clock className="h-4 w-4 text-primary" />
            Previous Entries
          </h3>
          {history.length === 0 ? (
            <p className="text-sm text-muted-foreground py-4 text-center">No history yet. Submit your first entry!</p>
          ) : (
            <div className="flex flex-col gap-2 max-h-80 overflow-y-auto">
              {history.map((entry) => (
                <button
                  key={entry.id}
                  onClick={() => setExpandedEntry(expandedEntry === entry.id ? null : entry.id)}
                  className="w-full rounded-xl border border-border bg-background p-3 text-left transition-all hover:bg-muted/50"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-muted-foreground">{entry.date}</span>
                    {expandedEntry === entry.id ? (
                      <ChevronUp className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                  {expandedEntry === entry.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-3 flex flex-col gap-2"
                    >
                      {template.fields.map((field) => (
                        <div key={field.id}>
                          <p className="text-xs font-semibold" style={{ color: field.color }}>{field.label}</p>
                          <p className="text-sm text-foreground whitespace-pre-wrap">{entry.fields[field.id] || "—"}</p>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          )}
        </motion.div>
      )}

      {/* Fields */}
      <div className="flex flex-col gap-6">
        {template.fields.map((field, i) => (
          <motion.div
            key={field.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <h3 className="text-base font-bold mb-1" style={{ color: field.color }}>
              {field.label}
            </h3>
            {field.subtitle && (
              <p className="text-sm font-medium text-foreground mb-2">{field.subtitle}</p>
            )}
            {field.prompts && (
              <ul className="mb-3 ml-5 flex flex-col gap-1 list-disc">
                {field.prompts.map((p, j) => (
                  <li key={j} className="text-sm text-muted-foreground">{p}</li>
                ))}
              </ul>
            )}
            <Textarea
              value={values[field.id] || ""}
              onChange={(e) => handleChange(field.id, e.target.value)}
              placeholder={`Enter your response...`}
              className="min-h-[120px] rounded-xl border-border bg-background resize-y text-sm transition-all focus:ring-2 focus:ring-primary/30"
            />
          </motion.div>
        ))}
      </div>

      {template.footerNote && (
        <p className="text-xs text-muted-foreground italic leading-relaxed">{template.footerNote}</p>
      )}

      {/* Submit */}
      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleSubmit}
        className="flex items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-bold text-primary-foreground transition-all hover:opacity-90 coaching-card-shadow"
      >
        <Send className="h-4 w-4" />
        Submit
      </motion.button>
    </motion.div>
  );
};

export default ExerciseDetail;
