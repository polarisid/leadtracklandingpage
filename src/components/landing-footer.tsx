import Link from "next/link";
import { Linkedin, Instagram } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

const footerLinks = {
  Sobre: [
    { label: "Quem Somos", href: "#" },
    { label: "Contato", href: "https://wa.me/5598987132829" },
    { label: "Agendar Demo", href: "https://wa.me/5598987132829" },
  ],
  Produto: [
    { label: "Funcionalidades", href: "#features" },
  ],
  Suporte: [
    { label: "Fale Conosco", href: "https://wa.me/5598987132829" },
    { label: "Central de Ajuda", href: "#" },
  ],
  Legal: [
    { label: "Política de Privacidade", href: "#" },
    { label: "Termos de Serviço", href: "#" },
  ],
};

export function LandingFooter() {
  return (
    <footer className="bg-secondary/50 text-secondary-foreground py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" aria-label="LeadTrack Home">
              <Logo />
            </Link>
            <p className="mt-4 text-sm font-body text-muted-foreground">
              Sua Equipe de Vendas, Mais Produtiva do que Nunca!
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-headline font-semibold text-foreground">{title}</h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm font-body text-muted-foreground">
            © {new Date().getFullYear()} LeadTrack. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
