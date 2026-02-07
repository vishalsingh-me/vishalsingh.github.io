import type { TechName } from '@/components/tech-icons';

export type TechStackItem = {
  name: TechName;
  label: string;
  href?: string;
  category: 'Full Stack';
};

export const techStack: TechStackItem[] = [
  { name: 'PyTorch', label: 'PyTorch', href: 'https://pytorch.org', category: 'Full Stack' },
  { name: 'PostgreSQL', label: 'PostgreSQL', href: 'https://www.postgresql.org', category: 'Full Stack' },
  { name: 'Figma', label: 'Figma', href: 'https://www.figma.com', category: 'Full Stack' },
  { name: 'FastAPI', label: 'FastAPI', href: 'https://fastapi.tiangolo.com', category: 'Full Stack' },
  { name: 'React', label: 'React', href: 'https://react.dev', category: 'Full Stack' },
  { name: 'Next.js', label: 'Next.js', href: 'https://nextjs.org', category: 'Full Stack' },
  { name: 'TypeScript', label: 'TypeScript', href: 'https://www.typescriptlang.org', category: 'Full Stack' },
  { name: 'JavaScript', label: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', category: 'Full Stack' },
  { name: 'Tailwind CSS', label: 'Tailwind CSS', href: 'https://tailwindcss.com', category: 'Full Stack' },
  { name: 'shadcn/ui', label: 'shadcn/ui', href: 'https://ui.shadcn.com', category: 'Full Stack' },
  { name: 'Framer Motion', label: 'Framer Motion', href: 'https://www.framer.com/motion', category: 'Full Stack' },
  { name: 'Zod', label: 'Zod', href: 'https://zod.dev', category: 'Full Stack' },
  { name: 'JSON', label: 'JSON', href: 'https://www.json.org', category: 'Full Stack' },
];
