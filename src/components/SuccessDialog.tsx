import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

const SuccessDialog = ({ open, onClose, title = "Thank You!", message = "Your entry has been saved successfully. You can revisit your responses anytime in the History section." }: Props) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />
          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-sm rounded-2xl bg-card border border-border p-6 coaching-card-shadow text-center"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 className="h-9 w-9 text-primary" strokeWidth={1.8} />
            </div>
            <h2 className="text-lg font-bold text-foreground mb-2">{title}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{message}</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={onClose}
              className="w-full rounded-xl bg-primary py-3 text-sm font-bold text-primary-foreground transition-all hover:opacity-90 coaching-card-shadow"
            >
              Got it
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessDialog;
