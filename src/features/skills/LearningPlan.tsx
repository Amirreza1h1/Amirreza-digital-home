import { learningPlan } from '@/data/roadmap';

export function LearningPlan() {
  return (
    <section className='mt-14' aria-labelledby='learning-plan-title'>
      <h2 id='learning-plan-title' className='text-2xl font-semibold'>
        Applied AI learning plan
      </h2>
      <p className='text-muted-foreground mt-3'>
        Planned learning goals. These are not claims of completed training or practical proficiency.
      </p>
      <div className='mt-6 grid gap-4 md:grid-cols-3'>
        {learningPlan.map(item => (
          <article key={item.title} className='border-border bg-card rounded-xl border p-5'>
            <h3 className='font-semibold'>{item.title}</h3>
            <p className='text-muted-foreground mt-3 text-sm'>{item.topics}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
