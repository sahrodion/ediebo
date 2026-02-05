"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { MobileMenu } from "@/components/MobileMenu";

const links = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur">
        <Container className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/ediebomini3.png"
              alt="EDIEBO LTD"
              width={220}
              height={80}
              className="h-10 w-auto object-contain drop-shadow-sm"
              sizes="160px"
              priority
            />
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-textSecondary md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-textPrimary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button href="/contact">Book a call</Button>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-lg text-textSecondary shadow-soft md:hidden"
            aria-label="Open menu"
          >
            ☰
          </button>
        </Container>
      </div>
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
