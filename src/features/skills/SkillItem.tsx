'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Gamepad2,
  PanelsTopLeft,
  GitBranch,
  Database,
  Coffee,
  Package,
  Network,
  Code,
  Palette,
} from 'lucide-react';
import { cn } from '@/utils/cn';
import { iconTone } from '@/theme/icons';
import type { Skill } from '@/types/skill';

interface SkillItemProps {
  skill: Skill;
  index: number;
}

export function SkillItem({ skill, index }: SkillItemProps) {
  const icons = { Gamepad2, PanelsTopLeft, GitBranch, Database, Coffee, Package, Network, Code, Palette };
  const Icon = skill.icon ? icons[skill.icon] : Code;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 12 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-16px' }}
      transition={{ duration: 0.35, delay: index * 0.045, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6, transition: { duration: 0.2, ease: 'easeOut' } }}
      className={cn(
        'group relative flex flex-col items-center justify-center gap-3',
        'border-border bg-surface/50 rounded-2xl border px-2 py-4 sm:px-3 sm:py-5',
        'cursor-default overflow-hidden',
        'transition-colors duration-300',
        'hover:border-primary/30 hover:bg-surface',
        'hover:shadow-primary/8 hover:shadow-lg',
      )}
    >
      {/* Top glow */}
      <div
        aria-hidden
        className='pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100'
        style={{ background: 'linear-gradient(90deg, transparent, var(--primary), transparent)' }}
      />

      {/* Icon */}
      <div
        className={cn(
          'relative flex h-18 w-18 items-center justify-center rounded-2xl shadow-sm ring-1',
          iconTone(skill.name),
        )}
      >
        {skill.iconSlug ? (
          <Image
            src={`/icons/skills/${skill.iconSlug}.png`}
            alt={skill.name}
            width={52}
            height={52}
            className='rounded-lg bg-white object-contain p-1 drop-shadow-sm transition-transform duration-300 group-hover:scale-110'
            unoptimized
          />
        ) : (
          <Icon
            className='h-10 w-10 transition-transform duration-300 group-hover:scale-110'
            aria-hidden='true'
          />
        )}
      </div>

      {/* Name */}
      <span className='text-muted-foreground group-hover:text-foreground text-center text-[11px] leading-tight font-semibold tracking-wide transition-colors duration-200'>
        {skill.name}
      </span>
      <p className='text-muted-foreground text-center text-xs leading-relaxed'>{skill.context}</p>
    </motion.div>
  );
}
