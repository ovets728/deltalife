"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "District Offices", path: "/district-offices" },
  { label: "Careers", path: "/careers" },
  { label: "FAQ's", path: "/faqs" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/assets/delta_logo.png"
              alt="Delta Life Insurance Company Logo"
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-primary hidden sm:inline">
              Delta Life Insurance
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-secondary ${
                  isActive(item.path)
                    ? "text-secondary"
                    : "text-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="gold" size="sm">
              <a
                href="https://delta-life.qladmin.com/en/accounts/login/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agent Login
              </a>
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="lg:hidden py-4 space-y-3 border-t border-border">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block text-sm font-medium transition-colors hover:text-secondary ${
                  isActive(item.path)
                    ? "text-secondary"
                    : "text-foreground/80"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="gold" size="sm" className="w-full">
              <a
                href="https://delta-life.qladmin.com/en/accounts/login/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agent Login
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
