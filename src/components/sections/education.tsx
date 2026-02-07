import Image from 'next/image';
import { portfolio } from '@/data/portfolio';
import { SectionHeading } from './section-heading';
import { Card } from '@/components/ui/card';

export function Education() {
  return (
    <section id="education" className="space-y-6">
      <SectionHeading label="Education" title="Learning journey" />
      <div className="grid gap-4 md:grid-cols-2">
        {portfolio.education.map((item) => (
          <Card key={item.school} className="p-6 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 overflow-hidden rounded-xl border border-border/60 bg-card">
                  <Image
                    src={item.logo ?? '/images/education-placeholder.svg'}
                    alt={item.school}
                    width={56}
                    height={56}
                    className={`h-full w-full ${
                      item.school.toLowerCase().includes('iilm') ? 'object-cover' : 'object-contain p-2'
                    }`}
                    sizes="56px"
                  />
                </div>
                <div>
                  <p className="text-lg font-semibold">{item.school}</p>
                  <p className="text-sm text-muted-foreground">{item.program}</p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">{item.period}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <p className="text-sm text-muted-foreground">{item.details}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
