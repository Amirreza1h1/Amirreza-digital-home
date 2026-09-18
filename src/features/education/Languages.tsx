import { englishResult, frenchLearning } from '@/data/languages';
import { Badge } from '@/components/ui/badge';
import { SectionHeader } from '@/components/shared/SectionHeader';
import Image from 'next/image';
import ieltsImage from '../../../public/IELTS.jpg';
import ukFlag from '../../../public/united-kingdom.png';
import frenchFlag from '../../../public/france.png';

export function Languages() {
  return (
    <section id='languages' className='scroll-mt-24'>
      <SectionHeader title='Languages & Language Tests' />
      <div className='mt-6 grid gap-4 md:grid-cols-2'>
        <article className='border-border bg-card rounded-xl border p-5'>
          <div className='flex flex-wrap items-center justify-between gap-2'>
            <h3 className='flex items-center gap-2 font-semibold'>
              <Image src={ukFlag} alt='' className='h-5 w-8 shrink-0 object-contain' />
              {englishResult.title}
            </h3>
            <Badge variant='outline'>{englishResult.status}</Badge>
          </div>
          <p className='text-muted-foreground mt-3 text-sm'>Test taken: {englishResult.testDate}</p>
          <p className='text-muted-foreground mt-1 text-sm'>Expired: {englishResult.expiryDate}</p>
          <dl className='mt-4 space-y-2 text-sm'>
            {englishResult.scores.map(score => (
              <div key={score.label} className='flex justify-between gap-3'>
                <dt>{score.label}</dt>
                <dd className='font-mono font-semibold'>{score.value}</dd>
              </div>
            ))}
            <div className='flex justify-between gap-3'>
              <dt>CEFR level at test date</dt>
              <dd className='font-semibold'>{englishResult.cefr}</dd>
            </div>
          </dl>
          <p className='text-muted-foreground mt-4 text-sm'>
            Historical result, shown for background only. This is not a currently valid IELTS credential.
          </p>
          <figure className='mt-5'>
            <a
              href='/IELTS.jpg'
              target='_blank'
              rel='noopener noreferrer'
              className='block rounded-lg'
              aria-label='View full-size expired IELTS Academic result (opens in a new tab)'
            >
              <Image
                src={ieltsImage}
                alt='IELTS Academic result from 3 September 2022, overall band 6.5; expired'
                sizes='(min-width: 768px) 50vw, 100vw'
                className='border-border h-auto w-full rounded-lg border'
              />
              <span className='text-primary mt-2 inline-block text-sm underline'>View full-size result</span>
            </a>
            <figcaption className='text-muted-foreground mt-2 text-xs'>
              IELTS Academic · Expired {englishResult.expiryDate}
            </figcaption>
          </figure>
        </article>
        <article className='border-border bg-card rounded-xl border p-5'>
          <div className='flex flex-wrap items-center justify-between gap-2'>
            <h3 className='flex items-center gap-2 font-semibold'>
              <Image src={frenchFlag} alt='' className='h-5 w-8 shrink-0 object-contain' />
              {frenchLearning.title}
            </h3>
            <Badge variant='outline'>{frenchLearning.status}</Badge>
          </div>
          <p className='mt-4 font-semibold'>{frenchLearning.level}</p>
          <p className='text-muted-foreground mt-3 text-sm leading-relaxed'>{frenchLearning.description}</p>
          <div className='mt-4'>
            <Badge variant='outline'>Language test planned</Badge>
          </div>
        </article>
      </div>
    </section>
  );
}
