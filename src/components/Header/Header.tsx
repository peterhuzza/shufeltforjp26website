"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Button from "@/components/buttons/button";

interface HeaderProps {
  navLinks: Record<string, string>;
  candidateName: string;
  donationUrl: string;
}

export default function Header({ navLinks, candidateName, donationUrl }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const displayName = candidateName || "Name";
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="bg-brand-blue border-b-2 border-b-inferno sticky top-0 z-50 shadow-sm w-full h-14">
      <nav className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 h-full">

        <div className="flex justify-between items-center w-full h-full">

          {/* LEFT: Logo Area */}
          <div className="flex-shrink-0 flex items-center h-full">
            <Link href="/" className="text-2xl font-bold text-white hover:opacity-80 transition-opacity">
              {displayName}
            </Link>
          </div>

          {/* RIGHT: Navigation Group & Donate Button */}
          <div className="hidden md:flex items-center h-full">

            {/* Nav Links */}
            <div className="flex items-stretch h-full space-x-2">
              {Object.entries(navLinks).map(([name, href]) => (
                <Button
                  key={name}
                  href={href}
                  variant="header"
                  className="w-28 h-full flex items-center font-medium rounded-none text-sm text-bold"
                >
                  {name}
                </Button>
              ))}
            </div>

            {/* Centered Border/Divider */}
            <div className="h-8 w-[1px] bg-white/20 ml-8 mr-12"></div>

            {/* Donate Button */}
            <div className="flex items-center h-full">
              <Button
                href={donationUrl || "/"}
                variant="danger"
                className="w-28 py-3 flex items-center justify-center"
              >
                Donate
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center h-full z-50">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 text-white hover:bg-white/10 rounded transition-colors z-50"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div
            className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl"
            style={{ borderTop: '2px solid var(--color-inferno)', borderBottom: '2px solid var(--color-inferno)' }}
          >
            <div className="flex flex-col space-y-2 w-full px-6 py-8">
              {Object.entries(navLinks).map(([name, href]) => (
                <Button
                  key={name}
                  href={href}
                  variant="primary"
                  className="flex justify-center items-center py-3 block w-full text-center text-base font-medium text-brand-blue2 hover:opacity-80 transition-opacity"
                >
                  {name}
                </Button>
              ))}
              <div className="pt-4 border-t border-slate-100">
                <Button
                  href={donationUrl || "/"}
                  variant="danger"
                  className="flex justify-center items-center px-6 py-3 w-full"
                >
                  Donate
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
