import { portfolio } from '@/data/portfolio';
import { SectionHeading } from './section-heading';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { techStack } from '@/data/tech-stack';
import { TechIcon } from '@/components/tech-icons';

export function SkillsGrid() {
  return (
    <section id="skills" className="space-y-6">
      <SectionHeading label="Skills" title="What I work with" />
      <div className="grid gap-4 md:grid-cols-2">
        {portfolio.skills.map((group) => (
          <Card key={group.category} className="p-6">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-base font-semibold">{group.category}</p>
              <Badge variant="primary">{group.items.length} items</Badge>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.category === 'Full Stack'
                ? techStack.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group flex min-w-[120px] flex-col items-center gap-2 rounded-xl border border-border/60 bg-muted/60 px-4 py-3 text-xs font-semibold text-foreground transition duration-150 hover:border-border hover:brightness-105"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <TechIcon
                        name={item.name}
                        size={28}
                        variant="brand"
                        className="transition duration-150 group-hover:brightness-115"
                        title={item.label}
                      />
                      <span className="text-xs text-foreground">{item.label}</span>
                    </a>
                  ))
                : group.items.map((item) => (
                    <Badge
                      key={item}
                      variant="outline"
                      className="rounded-lg bg-muted/50 px-3 py-1 text-xs text-foreground"
                    >
                      {item}
                    </Badge>
                  ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
