import type { Coursework } from '@/types/education';

interface CourseworkTableProps {
  coursework: Coursework[];
}

export function CourseworkTable({ coursework }: CourseworkTableProps) {
  return (
    <div className='border-border overflow-hidden rounded-xl border'>
      <div className='overflow-x-auto'>
        <table className='w-full text-sm'>
          <thead>
            <tr className='border-border bg-surface border-b'>
              <th className='text-muted-foreground px-4 py-3 text-left font-medium'>Course</th>
              <th className='text-muted-foreground px-4 py-3 text-right font-medium'>Grade</th>
            </tr>
          </thead>
          <tbody>
            {coursework.map((c, i) => (
              <tr key={c.title} className={i % 2 === 0 ? 'bg-background' : 'bg-surface/50'}>
                <td className='text-foreground px-4 py-3'>{c.title}</td>
                <td className='text-primary px-4 py-3 text-right font-mono text-sm font-semibold'>
                  {c.grade}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
