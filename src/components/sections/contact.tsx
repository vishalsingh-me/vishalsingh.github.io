import Link from 'next/link';
import { portfolio } from '@/data/portfolio';
import { SectionHeading } from './section-heading';
import { Card } from '@/components/ui/card';
import { ContactForm } from './contact-form';
import { Github, Linkedin, Twitter } from 'lucide-react';

const socialIcons: Record<string, JSX.Element> = {
  linkedin: <Linkedin className="h-4 w-4" aria-hidden="true" />,
  github: <Github className="h-4 w-4" aria-hidden="true" />,
  twitter: <Twitter className="h-4 w-4" aria-hidden="true" />,
};

const getSocialIcon = (label: string) => socialIcons[label.toLowerCase()];

export function Contact() {
  return (
    <section id="contact" className="space-y-6">
      <SectionHeading label="Contact" title="Let's build something useful" />
      <div className="grid gap-6 md:grid-cols-[1.2fr,0.8fr]">
        <Card className="p-6 md:p-8">
          <ContactForm />
        </Card>
        <div className="space-y-4">
          <Card className="p-6 space-y-3">
            <p className="text-lg font-semibold">Reach out</p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Email: <Link href={`mailto:${portfolio.contact.email}`} className="text-foreground hover:underline">{portfolio.contact.email}</Link></p>
              {portfolio.contact.phone ? <p>Phone: {portfolio.contact.phone}</p> : null}
              <p>I usually reply within 1-2 Hours.</p>
            </div>
          </Card>
          <Card className="p-6 space-y-3">
            <p className="text-lg font-semibold">Social</p>
            <div className="flex flex-wrap gap-2">
              {portfolio.contact.socials.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center gap-2 rounded-full bg-muted/60 px-3 py-1 text-sm font-medium text-foreground transition hover:bg-muted"
                >
                  {getSocialIcon(item.label)}
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Also open to pairing on AI experiments for road safety or health systems.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
