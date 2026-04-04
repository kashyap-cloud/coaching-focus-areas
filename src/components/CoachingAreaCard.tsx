import { motion } from "framer-motion";
import type { CoachingArea } from "@/data/coachingAreas";

interface Props {
  area: CoachingArea;
  index: number;
  onClick: (area: CoachingArea) => void;
}

const CoachingAreaCard = ({ area, index, onClick }: Props) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.35, ease: "easeOut" }}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => onClick(area)}
      className={`group flex flex-col items-center gap-3 rounded-2xl p-5 coaching-card-shadow transition-all duration-300 hover:coaching-card-shadow-hover ${area.bgColor}`}
    >
      <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl">
        <img
          src={area.image}
          alt={area.name}
          width={80}
          height={80}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <span className="text-sm font-semibold text-foreground">{area.name}</span>
    </motion.button>
  );
};

export default CoachingAreaCard;
