import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';

export function SimulationDownload() {
  const project = projects.find(item => item.slug === 'cowards-game-simulation');
  if (!project?.links.download) return null;

  return (
    <Button asChild variant='outline' size='sm' className='h-auto max-w-full py-2 whitespace-normal'>
      <a href={project.links.download} download='software.exe'>
        <Download className='h-3.5 w-3.5 shrink-0' aria-hidden='true' />
        Download Simulation (.exe)
      </a>
    </Button>
  );
}
