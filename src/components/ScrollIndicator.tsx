"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: [0, 10, 0] }}
      transition={{
        opacity: { delay: 2, duration: 1 },
        y: {
          delay: 2,
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2"
    >
      <ChevronDown
        size={24}
        className="text-white/80"
        strokeWidth={1.5}
      />
    </motion.div>
  );
}