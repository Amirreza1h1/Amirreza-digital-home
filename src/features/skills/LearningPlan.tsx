import { learningPlan } from '@/data/roadmap';
import Link from 'next/link';

export function LearningPlan() {
  return (
    <section className='mt-14' aria-labelledby='learning-plan-title'>
      <h2 id='learning-plan-title' className='text-2xl font-semibold'>
        Learning &amp; Development
      </h2>
      <p className='text-muted-foreground mt-3'>
        Building on Python practice, university coursework, and project experience while working toward Applied AI.
      </p>
      <div className='mt-6 grid gap-4 md:grid-cols-2'>
        <article className='border-border bg-card rounded-xl border p-5'>
          <h3 className='font-semibold'>Completed foundations</h3>
          <p className='text-muted-foreground mt-3 text-sm'>
            Bachelor’s coursework includes algorithm design, discrete mathematics, and applied linear algebra.
            I also completed Python courses and built the core of my bachelor’s simulation independently.
          </p>
          <Link href='/education' className='text-primary mt-3 inline-block text-sm underline'>
            View education and certificates
          </Link>
        </article>
        <article className='border-border bg-card rounded-xl border p-5'>
          <h3 className='font-semibold'>Current project work</h3>
          <p className='text-muted-foreground mt-3 text-sm'>
            I am developing an English institute website with a collaborator and AI assistance. It has not yet
            been deployed.
          </p>
          <Link href='/projects' className='text-primary mt-3 inline-block text-sm underline'>
            Explore projects
          </Link>
        </article>
      </div>
      <h3 className='mt-8 text-lg font-semibold'>Planned learning</h3>
      <p className='text-muted-foreground mt-2 text-sm'>
        These roadmap topics are goals, not claims of completed training or proficiency.
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
