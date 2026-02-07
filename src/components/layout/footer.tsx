import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { portfolio } from '@/data/portfolio';

export function Footer() {
  const getSocialIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case 'linkedin':
        return <Linkedin className="h-4 w-4" aria-hidden="true" />;
      case 'github':
        return <Github className="h-4 w-4" aria-hidden="true" />;
      case 'twitter':
        return <Twitter className="h-4 w-4" aria-hidden="true" />;
      default:
        return null;
    }
  };

  return (
    <footer className="border-t border-border/60 bg-muted/40">
      <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold">Vishal Singh</p>
          <p className="text-sm text-muted-foreground">
            Full Stack developer growing into AI engineering.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          {portfolio.contact.socials.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex items-center justify-center rounded-full bg-background px-3 py-1 transition hover:text-foreground"
              aria-label={item.label}
            >
              {getSocialIcon(item.label) ?? (
                <span className="text-sm font-medium">{item.label}</span>
              )}
              <span className="sr-only">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
