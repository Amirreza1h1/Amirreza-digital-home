import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { ContentPlaceholder } from '@/components/shared/ContentPlaceholder';
import type { TeachingRole } from '@/types/education';

interface TeachingRolesProps {
  roles: TeachingRole[];
}

export function TeachingRoles({ roles }: TeachingRolesProps) {
  if (roles.length === 0) {
    return <ContentPlaceholder description='Teaching experience has not been provided yet.' />;
  }

  return (
    <div className='flex flex-col gap-4'>
      {roles.map((role, index) => (
        <AnimatedSection key={`${role.course}-${role.semester}`} delay={index * 0.06}>
          <div className='border-border bg-card flex flex-col gap-1 rounded-xl border p-5'>
            <div className='flex flex-wrap items-start justify-between gap-2'>
              <h4 className='text-foreground font-medium'>{role.course}</h4>
              <span className='text-muted-foreground font-mono text-xs'>{role.semester}</span>
            </div>
            <p className='text-muted-foreground text-sm'>{role.institution}</p>
            <p className='text-muted-foreground text-xs'>Under {role.instructor}</p>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}
