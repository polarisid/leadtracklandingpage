"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { label: "Funcionalidades", href: "#features" },
  { label: "Contato", href: "https://wa.me/5598987132829" },
];

export function LandingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="LeadTrack Home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-headline text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button asChild>
            <a href="https://wa.me/5598987132829" target="_blank" rel="noopener noreferrer">Agendar Demo</a>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw]">
              <div className="flex h-full flex-col justify-between p-6">
                <div className="flex flex-col gap-6">
                  <Link href="/" className="mb-4 flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                    <Logo />
                  </Link>
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="font-headline text-lg font-medium"
                      onClick={() => setIsMenuOpen(false)}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-4">
                  <Button asChild>
                    <a href="https://wa.me/5598987132829" target="_blank" rel="noopener noreferrer">Agendar Demo</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
