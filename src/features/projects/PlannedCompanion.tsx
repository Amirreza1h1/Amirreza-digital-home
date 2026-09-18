import { companionPlan } from '@/data/roadmap';

export function PlannedCompanion() {
  return (
    <article className='border-border bg-card rounded-2xl border p-6'>
      <p className='text-primary text-sm font-medium'>Flagship project plan · {companionPlan.status}</p>
      <h2 className='mt-2 text-2xl font-semibold'>{companionPlan.title}</h2>
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
