import { companionPlan } from '@/data/roadmap';

export function PlannedCompanion() {
  return (
    <article className='border-primary/40 bg-surface flex h-full flex-col rounded-2xl border border-dashed p-6 md:p-8'>
      <p className='field-label'>Flagship project plan · {companionPlan.status}</p>
      <h2 className='editorial-title mt-5 text-4xl'>{companionPlan.title}</h2>
      <p className='text-muted-foreground mt-4'>{companionPlan.overview}</p>
      <p className='text-muted-foreground mt-3 text-sm'>{companionPlan.architecture}</p>
      <h3 className='mt-5 font-semibold'>Planned first version</h3>
      <ul className='text-muted-foreground mt-2 list-disc space-y-2 pl-5 text-sm'>
        {companionPlan.goals.map(goal => (
          <li key={goal}>{goal}</li>
        ))}
      </ul>
      <p className='text-muted-foreground mt-5 text-sm'>
        Implementation, demos, and measured results will be added as milestones are completed.
      </p>
    </article>
  );
}
