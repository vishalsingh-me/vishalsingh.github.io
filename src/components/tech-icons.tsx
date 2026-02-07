import type { CSSProperties } from 'react';

export type TechName =
  | 'PyTorch'
  | 'PostgreSQL'
  | 'Figma'
  | 'FastAPI'
  | 'React'
  | 'Next.js'
  | 'TypeScript'
  | 'JavaScript'
  | 'Tailwind CSS'
  | 'shadcn/ui'
  | 'Framer Motion'
  | 'Zod'
  | 'JSON';

type TechIconVariant = 'brand' | 'mono';

type IconDef =
  | {
      type: 'asset';
      src: string;
      color: string;
      isSvg?: boolean;
    }
  | {
      type: 'inline';
      color: string;
      render: (size: number, color: string) => JSX.Element;
    };

const icons: Record<TechName, IconDef> = {
  PyTorch: {
    type: 'inline',
    color: '#EE4C2C',
    render: (size, color) => (
      <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden="true" fill="none" stroke="none">
        <path
          d="M34 10v12.7l-4.5-4.5-3.8 3.8 9.1 9.1c3.6 3.6 3.6 9.5 0 13.1-3.6 3.6-9.5 3.6-13.1 0-3.6-3.6-3.6-9.5 0-13.1l3-3-3.8-3.8-3 3C12 33.6 12 44.3 18 50.3c6 6 16.7 6 22.7 0 6-6 6-16.7 0-22.7l-3.9-3.9V10z"
          fill={color}
        />
        <circle cx="45.5" cy="18.5" r="3.5" fill={color} />
      </svg>
    ),
  },
  PostgreSQL: { type: 'asset', src: '/icons/postgresql-svgrepo-com.svg', color: '#336791', isSvg: true },
  Figma: { type: 'asset', src: '/icons/figma-svgrepo-com.svg', color: '#F24E1E', isSvg: true },
  FastAPI: { type: 'asset', src: '/icons/FastAPI.png', color: '#05998B' },
  React: { type: 'asset', src: '/icons/react-svgrepo-com.svg', color: '#61DAFB', isSvg: true },
  'Next.js': {
    type: 'inline',
    color: '#0EA5E9',
    render: (size, color) => (
      <svg viewBox="0 0 80 80" width={size} height={size} aria-hidden="true" fill="none">
        <path d="M16 16h10l18 24 10 14V16h10v48H54L32 40 22 26v38H12z" fill={color} />
      </svg>
    ),
  },
  TypeScript: { type: 'asset', src: '/icons/typescript-icon-svgrepo-com.svg', color: '#3178C6', isSvg: true },
  JavaScript: { type: 'asset', src: '/icons/javascript-svgrepo-com.svg', color: '#F7DF1E', isSvg: true },
  'Tailwind CSS': {
    type: 'inline',
    color: '#38BDF8',
    render: (size, color) => (
      <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden="true" fill="none">
        <path
          d="M10 28c3.6-8.4 9.7-12.6 18.2-12.6 10.8 0 12.5 7.4 19.3 7.4 3.9 0 6.8-2.1 8.7-6.3-3.6 8.4-9.7 12.6-18.2 12.6-10.8 0-12.5-7.4-19.3-7.4-3.9 0-6.8 2.1-8.7 6.3Z"
          fill={color}
        />
        <path
          d="M10 40c3.6-8.4 9.7-12.6 18.2-12.6 10.8 0 12.5 7.4 19.3 7.4 3.9 0 6.8-2.1 8.7-6.3-3.6 8.4-9.7 12.6-18.2 12.6-10.8 0-12.5-7.4-19.3-7.4-3.9 0-6.8 2.1-8.7 6.3Z"
          fill={color}
        />
      </svg>
    ),
  },
  'shadcn/ui': {
    type: 'inline',
    color: '#0EA5E9',
    render: (size, color) => (
      <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden="true" fill="none" stroke={color} strokeWidth="4">
        <rect x="10" y="12" width="44" height="40" rx="10" />
        <circle cx="28" cy="32" r="6" fill={color} />
        <path d="M34 20h12v24H34" strokeLinecap="round" />
      </svg>
    ),
  },
  'Framer Motion': {
    type: 'inline',
    color: '#0055FF',
    render: (size, color) => (
      <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden="true" fill="none">
        <path d="M12 8h40v20H32L52 56H12V36h20z" fill={color} />
      </svg>
    ),
  },
  Zod: {
    type: 'inline',
    color: '#5CC8FF',
    render: (size, color) => (
      <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden="true" fill="none" stroke={color} strokeWidth="3">
        <rect x="9" y="9" width="46" height="46" rx="8" />
        <path d="M22 18h20l-14 20h14v8H22l14-20H22z" fill={color} stroke="none" />
      </svg>
    ),
  },
  JSON: {
    type: 'inline',
    color: '#D97706',
    render: (size, color) => (
      <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden="true" fill="none">
        <rect x="8" y="8" width="48" height="48" rx="8" stroke={color} strokeWidth="3" />
        <path
          d="M26 16c-4.5 0-6.5 2.7-6.5 6.5v6c0 2.1-1.1 3.3-3.3 3.3H13v4.4h3.2c2.3 0 3.3 1.2 3.3 3.3v4.1c0 4.1 2.1 6.9 6.5 6.9h2.5v-4.4h-1.2c-2.2 0-3.3-1.2-3.3-3.3v-3.1c0-2.3-.9-3.8-2.7-4.9 1.8-1.1 2.7-2.8 2.7-5.2v-3.3c0-2.1 1.1-3.3 3.3-3.3h1.2V16zm12 0h-2.5v4.4h1.2c2.2 0 3.3 1.2 3.3 3.3v3.3c0 2.4.9 4.1 2.7 5.2-1.8 1.1-2.7 2.6-2.7 4.9v3.1c0 2.1-1.1 3.3-3.3 3.3h-1.2v4.4h2.5c4.5 0 6.5-2.7 6.5-6.9v-4.1c0-2.1 1-3.3 3.3-3.3H51v-4.4h-3.2c-2.2 0-3.3-1.2-3.3-3.3v-6C44.5 18.7 42.5 16 38 16z"
          fill={color}
        />
      </svg>
    ),
  },
};

export type TechIconProps = {
  name: TechName;
  size?: number;
  variant?: TechIconVariant;
  className?: string;
  title?: string;
};

export function TechIcon({ name, size = 24, variant = 'brand', className, title }: TechIconProps) {
  const def = icons[name];
  if (!def) return null;

  const aria = title ?? name;
  const effectiveSize = name === 'FastAPI' ? Math.round(size * 2.2) : size;
  const color = variant === 'brand' ? def.color : 'currentColor';

  if (def.type === 'inline') {
    return (
      <span
        role="img"
        aria-label={aria}
        title={aria}
        className={className}
        style={{ color }}
      >
        {def.render(effectiveSize, color)}
      </span>
    );
  }

  if (variant === 'mono') {
    const style: CSSProperties = {
      display: 'inline-block',
      width: effectiveSize,
      height: effectiveSize,
      backgroundColor: 'currentColor',
      WebkitMaskImage: `url(${def.src})`,
      maskImage: `url(${def.src})`,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
    };
    return <span role="img" aria-label={aria} title={aria} className={className} style={style} />;
  }

  return (
    <img
      src={def.src}
      width={effectiveSize}
      height={effectiveSize}
      alt={aria}
      title={aria}
      className={className}
      style={{ color }}
      loading="lazy"
    />
  );
}
