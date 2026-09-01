import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className='container mx-auto flex min-h-[60vh] flex-col items-center justify-center gap-6 py-24 text-center'>
      <span className='text-primary font-mono text-sm font-medium'>404</span>
      <h1 className='text-foreground text-3xl font-bold tracking-tight'>Page not found</h1>
      <p className='text-muted-foreground max-w-sm text-base'>
        The page you are looking for does not exist or has been moved.
      </p>
      <Button asChild>
        <Link href='/'>Go home</Link>
      </Button>
    </div>
  );
}
