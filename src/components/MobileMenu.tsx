"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/Button";

const links = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => (
  <AnimatePresence>
    {isOpen ? (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur"
        onClick={onClose}
      >
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="absolute right-0 top-6 h-[60vh] w-[70%] max-w-xs overflow-auto rounded-3xl bg-white p-8 shadow-soft"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-center justify-between">
            <Image
              src="/ediebomini4.png"
              alt="EDIEBO LTD"
              width={120}
              height={120}
              className="h-9 w-auto object-contain"
              sizes="120px"
            />
            <button
              type="button"
              onClick={onClose}
              className="text-black/60"
              aria-label="Close menu"
            >
              X
            </button>
          </div>
          <nav className="mt-8 flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="text-lg font-medium text-black"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-10">
            <Button href="/contact" className="w-full">
              Book a call
            </Button>
          </div>
        </motion.div>
      </motion.div>
    ) : null}
  </AnimatePresence>
);
