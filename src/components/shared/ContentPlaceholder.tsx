interface ContentPlaceholderProps {
  title?: string;
  description: string;
  className?: string;
}

export function ContentPlaceholder({
  title = 'Content pending',
  description,
  className = '',
}: ContentPlaceholderProps) {
  return (
    <div
      className={`border-border bg-surface/50 flex flex-col items-center gap-2 rounded-xl border px-5 py-10 text-center ${className}`}
    >
      <p className='text-foreground text-sm font-medium'>{title}</p>
      <p className='text-muted-foreground max-w-lg text-sm leading-relaxed'>{description}</p>
    </div>
  );
}
