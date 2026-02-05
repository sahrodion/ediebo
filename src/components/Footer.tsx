"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/Container";

const links = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Website Design & Build",
  "Small Business Websites",
  "E-commerce Builds",
  "Landing Pages",
  "SEO Foundations",
  "Maintenance & Hosting",
];

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Behance", href: "https://behance.net" },
];

export const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("hello@ediebo.co.uk");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <footer className="bg-background py-16">
      <Container className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <Image
            src="/ediebomini3.png"
            alt="EDIEBO LTD"
            width={240}
            height={90}
            className="h-10 w-auto object-contain drop-shadow-sm"
            sizes="180px"
          />
          <p className="text-sm text-textSecondary">
            Luxury websites engineered for trust and conversion.
          </p>
          <div className="text-sm text-textSecondary">
            Manchester, UK ·{" "}
            <button
              type="button"
              onClick={handleCopy}
              className="underline-offset-4 transition hover:text-textPrimary hover:underline"
            >
              hello@ediebo.co.uk
            </button>
            {copied ? (
              <span className="ml-2 text-xs text-accent">Copied</span>
            ) : null}
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2 text-sm text-textSecondary">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-textPrimary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">
            Services
          </p>
          <ul className="mt-4 space-y-2 text-sm text-textSecondary">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">
            Social
          </p>
          <ul className="mt-4 space-y-2 text-sm text-textSecondary">
            {socials.map((social) => (
              <li key={social.label}>
                <Link
                  href={social.href}
                  className="hover:text-textPrimary"
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Container className="mt-10 flex flex-col items-start justify-between gap-4 pt-6 text-xs text-textSecondary md:flex-row">
        <p>© {new Date().getFullYear()} EDIEBO LTD. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-textPrimary">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-textPrimary">
            Terms
          </Link>
        </div>
      </Container>
    </footer>
  );
};
