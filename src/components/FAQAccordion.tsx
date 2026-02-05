"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Faq } from "@/content/faqs";

type FAQAccordionProps = {
  items: Faq[];
};

export const FAQAccordion = ({ items }: FAQAccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <button
            key={item.question}
            type="button"
            onClick={() => setActiveIndex(isOpen ? null : index)}
            className="w-full rounded-2xl bg-surface/90 px-6 py-5 text-left shadow-soft transition"
          >
            <div className="flex items-center justify-between gap-6">
              <span className="font-medium text-textPrimary">
                {item.question}
              </span>
              <span className="text-xl text-textSecondary">
                {isOpen ? "-" : "+"}
              </span>
            </div>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="mt-4 text-sm leading-relaxed text-textSecondary">
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </button>
        );
      })}
    </div>
  );
};
