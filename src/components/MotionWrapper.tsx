"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Variant } from "framer-motion";

type MotionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  variants?: {
    hidden: Variant;
    visible: Variant;
  };
  delay?: number;
};

export const MotionWrapper = ({
  children,
  className,
  variants,
  delay = 0,
}: MotionWrapperProps) => (
  <motion.div
    className={cn(className)}
    variants={variants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, ease: "easeOut", delay }}
  >
    {children}
  </motion.div>
);
