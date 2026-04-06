import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, History, Clock, ChevronDown, ChevronUp, Send, Plus, X } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import type { ExerciseTemplate } from "@/data/exerciseTemplates";
import { toast } from "@/hooks/use-toast";
import SuccessDialog from "@/components/SuccessDialog";

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
  const [listValues, setListValues] = useState<Record<string, string[]>>({});
  const [tableValues, setTableValues] = useState<Record<string, string[][]>>({});
  const [ratedValues, setRatedValues] = useState<Record<string, Record<string, string>>>({});
  const [showHistory, setShowHistory] = useState(false);
  const [expandedEntry, setExpandedEntry] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

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

  // List helpers
  const getListItems = (fieldId: string): string[] => listValues[fieldId] || [""];

  const handleListItemChange = (fieldId: string, index: number, value: string) => {
    setListValues((prev) => {
      const items = [...(prev[fieldId] || [""])];
      items[index] = value;
      return { ...prev, [fieldId]: items };
    });
  };

  const addListItem = (fieldId: string) => {
    setListValues((prev) => ({
      ...prev,
      [fieldId]: [...(prev[fieldId] || [""]), ""],
    }));
  };

  const removeListItem = (fieldId: string, index: number) => {
    setListValues((prev) => {
      const items = [...(prev[fieldId] || [""])];
      if (items.length <= 1) return prev;
      items.splice(index, 1);
      return { ...prev, [fieldId]: items };
    });
  };

  // Table helpers
  const getTableRows = (fieldId: string, colCount: number): string[][] =>
    tableValues[fieldId] || [Array(colCount).fill("")];

  const handleTableCellChange = (fieldId: string, rowIdx: number, colIdx: number, value: string, colCount: number) => {
    setTableValues((prev) => {
      const rows = [...(prev[fieldId] || [Array(colCount).fill("")])].map((r) => [...r]);
      if (!rows[rowIdx]) rows[rowIdx] = Array(colCount).fill("");
      rows[rowIdx][colIdx] = value;
      return { ...prev, [fieldId]: rows };
    });
  };

  const addTableRow = (fieldId: string, colCount: number) => {
    setTableValues((prev) => ({
      ...prev,
      [fieldId]: [...(prev[fieldId] || [Array(colCount).fill("")]), Array(colCount).fill("")],
    }));
  };

  const removeTableRow = (fieldId: string, rowIdx: number) => {
    setTableValues((prev) => {
      const rows = [...(prev[fieldId] || [])];
      if (rows.length <= 1) return prev;
      rows.splice(rowIdx, 1);
      return { ...prev, [fieldId]: rows };
    });
  };

  // Rated-list helpers
  const handleRatedChange = (fieldId: string, item: string, value: string) => {
    setRatedValues((prev) => ({
      ...prev,
      [fieldId]: { ...(prev[fieldId] || {}), [item]: value },
    }));
  };

  const handleSubmit = () => {
    const merged: Record<string, string> = { ...values };
    template.fields.forEach((field) => {
      if (field.type === "list") {
        const items = (listValues[field.id] || []).filter((v) => v.trim());
        if (items.length > 0) merged[field.id] = JSON.stringify(items);
      } else if (field.type === "table") {
        const rows = (tableValues[field.id] || []).filter((r) => r.some((c) => c.trim()));
        if (rows.length > 0) merged[field.id] = JSON.stringify({ columns: field.columns, rows });
      } else if (field.type === "rated-list") {
        const ratings = ratedValues[field.id];
        if (ratings && Object.values(ratings).some((v) => v.trim())) {
          merged[field.id] = JSON.stringify(ratings);
        }
      }
    });

    const hasContent = Object.values(merged).some((v) => v.trim());
    if (!hasContent) {
      toast({ title: "Please fill in at least one field", variant: "destructive" });
      return;
    }
    const entry: HistoryEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleString(),
      fields: merged,
    };
    const prev = getHistory();
    localStorage.setItem(storageKey, JSON.stringify([entry, ...prev].slice(0, 50)));
    setValues({});
    setListValues({});
    setTableValues({});
    setRatedValues({});
    setShowSuccess(true);
  };

  const renderHistoryValue = (raw: string | undefined) => {
    if (!raw) return "—";
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        return (
          <ul className="ml-4 list-disc flex flex-col gap-0.5">
            {parsed.map((item: string, idx: number) => (
              <li key={idx} className="text-sm text-foreground">{item}</li>
            ))}
          </ul>
        );
      }
      if (parsed && typeof parsed === "object") {
        // Table data
        if (parsed.columns && parsed.rows) {
          return (
            <div className="overflow-x-auto mt-1">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    {parsed.columns.map((col: string, i: number) => (
                      <th key={i} className="text-left text-xs font-semibold text-muted-foreground pb-1 pr-3">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {parsed.rows.map((row: string[], ri: number) => (
                    <tr key={ri}>
                      {row.map((cell: string, ci: number) => (
                        <td key={ci} className="text-foreground pr-3 py-0.5">{cell || "—"}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        // Rated-list data
        return (
          <div className="flex flex-col gap-0.5 mt-1">
            {Object.entries(parsed).map(([key, val]) => (
              <div key={key} className="flex justify-between text-sm">
                <span className="text-foreground">{key}</span>
                <span className="font-semibold text-primary">{val as string}</span>
              </div>
            ))}
          </div>
        );
      }
    } catch {
      /* plain text */
    }
    return <span className="text-sm text-foreground whitespace-pre-wrap">{raw}</span>;
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
        </button>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">{template.description}</p>

      {template.importantNote && (
        <div className="rounded-xl border border-border bg-muted/50 p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-1">Important Note:</p>
          <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{template.importantNote}</p>
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
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3 flex flex-col gap-2">
                      {template.fields.map((field) => (
                        <div key={field.id}>
                          <p className="text-xs font-semibold" style={{ color: field.color }}>{field.label}</p>
                          {renderHistoryValue(entry.fields[field.id])}
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
        {template.fields.map((field, i) => {
          // Detect section headers for grouped templates (e.g., Financial Goals Chart)
          const sectionHeaders: Record<string, string> = {
            "budgeting-status": "Budgeting",
            "banking-status": "Banking",
            "credit-status": "Credit History",
            "debt-status": "Debt Reduction",
            "saving-status": "Saving",
            "tax-status": "Tax Filing",
          };
          const sectionTitle = sectionHeaders[field.id];

          return (
            <motion.div
              key={field.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.02 }}
            >
              {sectionTitle && (
                <div className="mb-3 mt-2">
                  {i > 0 && <div className="border-t border-border mb-4" />}
                  <h2 className="text-lg font-bold" style={{ color: field.color }}>
                    {sectionTitle}
                  </h2>
                </div>
              )}
              <h3 className="text-sm font-bold mb-1 text-foreground">
                {field.label}
              </h3>
              {field.subtitle && (
                <p className="text-sm font-medium text-foreground mb-2 whitespace-pre-line">{field.subtitle}</p>
              )}
              {field.prompts && (
                <ul className="mb-3 ml-5 flex flex-col gap-1 list-disc">
                  {field.prompts.map((p, j) => (
                    <li key={j} className="text-sm text-muted-foreground">{p}</li>
                  ))}
                </ul>
              )}

              {field.type === "list" ? (
                <ListField
                  fieldId={field.id}
                  color={field.color}
                  items={getListItems(field.id)}
                  onChange={handleListItemChange}
                  onAdd={() => addListItem(field.id)}
                  onRemove={(idx) => removeListItem(field.id, idx)}
                />
              ) : field.type === "table" && field.columns ? (
                <TableField
                  fieldId={field.id}
                  color={field.color}
                  columns={field.columns}
                  rows={getTableRows(field.id, field.columns.length)}
                  onChange={(rowIdx, colIdx, val) => handleTableCellChange(field.id, rowIdx, colIdx, val, field.columns!.length)}
                  onAdd={() => addTableRow(field.id, field.columns!.length)}
                  onRemove={(rowIdx) => removeTableRow(field.id, rowIdx)}
                />
              ) : field.type === "rated-list" && field.items ? (
                <RatedListField
                  fieldId={field.id}
                  items={field.items}
                  ratings={ratedValues[field.id] || {}}
                  onChange={(item, val) => handleRatedChange(field.id, item, val)}
                />
              ) : (
                <Textarea
                  value={values[field.id] || ""}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                  placeholder="Enter your response..."
                  className="min-h-[100px] rounded-xl border-border bg-background resize-y text-sm transition-all focus:ring-2 focus:ring-primary/30"
                />
              )}
            </motion.div>
          );
        })}
      </div>

      {template.footerNote && (
        <p className="text-xs text-muted-foreground italic leading-relaxed whitespace-pre-line">{template.footerNote}</p>
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
      <SuccessDialog open={showSuccess} onClose={() => setShowSuccess(false)} />
    </motion.div>
  );
};

/* ── Sub-components ── */

function ListField({
  fieldId,
  color,
  items,
  onChange,
  onAdd,
  onRemove,
}: {
  fieldId: string;
  color: string;
  items: string[];
  onChange: (fieldId: string, idx: number, val: string) => void;
  onAdd: () => void;
  onRemove: (idx: number) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      {items.map((item, idx) => (
        <motion.div key={idx} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2">
          <span
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
            style={{ backgroundColor: color }}
          >
            {idx + 1}
          </span>
          <Input
            value={item}
            onChange={(e) => onChange(fieldId, idx, e.target.value)}
            placeholder={`Item ${idx + 1}...`}
            className="flex-1 rounded-xl border-border bg-background text-sm transition-all focus:ring-2 focus:ring-primary/30"
          />
          {items.length > 1 && (
            <button
              onClick={() => onRemove(idx)}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </motion.div>
      ))}
      <button
        onClick={onAdd}
        className="mt-1 flex items-center gap-2 self-start rounded-xl px-3 py-2 text-sm font-semibold transition-colors hover:bg-muted"
        style={{ color }}
      >
        <Plus className="h-4 w-4" />
        Add item
      </button>
    </div>
  );
}

function TableField({
  fieldId,
  color,
  columns,
  rows,
  onChange,
  onAdd,
  onRemove,
}: {
  fieldId: string;
  color: string;
  columns: string[];
  rows: string[][];
  onChange: (rowIdx: number, colIdx: number, val: string) => void;
  onAdd: () => void;
  onRemove: (rowIdx: number) => void;
}) {
  return (
    <div className="flex flex-col gap-3">
      {/* Column headers */}
      <div className="flex items-center gap-2">
        <div className="w-7 shrink-0" />
        {columns.map((col, ci) => (
          <p key={ci} className="flex-1 text-xs font-semibold text-muted-foreground">{col}</p>
        ))}
        <div className="w-8 shrink-0" />
      </div>
      {rows.map((row, ri) => (
        <motion.div key={ri} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2">
          <span
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
            style={{ backgroundColor: color }}
          >
            {ri + 1}
          </span>
          {columns.map((_, ci) => (
            <Input
              key={ci}
              value={row[ci] || ""}
              onChange={(e) => onChange(ri, ci, e.target.value)}
              placeholder={columns[ci]}
              className="flex-1 rounded-xl border-border bg-background text-sm transition-all focus:ring-2 focus:ring-primary/30"
            />
          ))}
          {rows.length > 1 && (
            <button
              onClick={() => onRemove(ri)}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          {rows.length <= 1 && <div className="w-8 shrink-0" />}
        </motion.div>
      ))}
      <button
        onClick={onAdd}
        className="mt-1 flex items-center gap-2 self-start rounded-xl px-3 py-2 text-sm font-semibold transition-colors hover:bg-muted"
        style={{ color }}
      >
        <Plus className="h-4 w-4" />
        Add row
      </button>
    </div>
  );
}

function RatedListField({
  fieldId,
  items,
  ratings,
  onChange,
}: {
  fieldId: string;
  items: string[];
  ratings: Record<string, string>;
  onChange: (item: string, val: string) => void;
}) {
  return (
    <div className="flex flex-col gap-0">
      <div className="flex items-center justify-between border-b border-border pb-2 mb-2">
        <p className="text-xs font-semibold text-muted-foreground">Item</p>
        <p className="text-xs font-semibold text-muted-foreground w-20 text-center">Rating</p>
      </div>
      {items.map((item) => (
        <div key={item} className="flex items-center justify-between py-2 border-b border-border/50">
          <p className="text-sm font-medium text-foreground">{item}</p>
          <Input
            value={ratings[item] || ""}
            onChange={(e) => onChange(item, e.target.value)}
            placeholder="—"
            className="w-20 rounded-lg border-border bg-background text-center text-sm"
          />
        </div>
      ))}
    </div>
  );
}

export default ExerciseDetail;
