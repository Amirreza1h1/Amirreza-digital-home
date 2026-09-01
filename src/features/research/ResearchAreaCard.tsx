import { Cpu, Network, Cloud, BrainCircuit } from 'lucide-react';
import type { ResearchArea } from '@/types/research';

interface ResearchAreaCardProps {
  area: ResearchArea;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu,
  Network,
  Cloud,
  BrainCircuit,
};

export function ResearchAreaCard({ area }: ResearchAreaCardProps) {
  const Icon = iconMap[area.icon] ?? Cpu;

  return (
    <div className='border-border bg-card hover:border-primary/30 flex h-full flex-col gap-4 rounded-xl border p-6 transition-all'>
      <div className='bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg'>
        <Icon className='text-primary h-5 w-5' />
      </div>
      <div className='flex flex-col gap-2'>
        <h3 className='text-foreground font-semibold'>{area.title}</h3>
        <p className='text-muted-foreground text-sm leading-relaxed'>{area.description}</p>
      </div>
      <div className='mt-auto flex flex-wrap gap-1.5'>
        {area.keywords.map(kw => (
          <span
            key={kw}
            className='border-border bg-surface text-muted-foreground rounded-md border px-2 py-0.5 font-mono text-xs'
          >
            {kw}
          </span>
        ))}
      </div>
    </div>
  );
}
