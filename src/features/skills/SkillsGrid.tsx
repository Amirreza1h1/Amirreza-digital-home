'use client';

import { motion } from 'framer-motion';
import { ContentPlaceholder } from '@/components/shared/ContentPlaceholder';
import { SkillItem } from './SkillItem';
import type { SkillGroup } from '@/types/skill';

interface SkillsGridProps {
  groups: SkillGroup[];
}

export function SkillsGrid({ groups }: SkillsGridProps) {
  if (groups.length === 0) {
    return <ContentPlaceholder description='Skills and proficiency details have not been provided yet.' />;
  }

  return (
    <div className='flex flex-col gap-10 md:gap-14'>
      {groups.map((group, groupIndex) => (
        <motion.section
          key={group.category}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, delay: groupIndex * 0.07, ease: 'easeOut' }}
        >
          <div className='mb-5 flex items-center gap-3'>
            <div className='bg-border hidden h-px flex-1 sm:block' />
            <h3 className='text-primary font-mono text-[10px] font-semibold tracking-[0.12em] uppercase sm:tracking-[0.18em]'>
              {group.category}
            </h3>
            <div className='bg-border h-px flex-1' />
          </div>

          <div className='grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
            {group.skills.map((skill, skillIndex) => (
              <SkillItem key={skill.name} skill={skill} index={skillIndex} />
            ))}
          </div>
        </motion.section>
      ))}
    </div>
  );
}
