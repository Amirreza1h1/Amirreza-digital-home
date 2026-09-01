import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { profile } from '@/data/profile';
import type { Collaborator } from '@/types/project';

interface ProjectCollaboratorsProps {
  /** The owner's role on this project, used for their auto-generated entry. */
  role: string | null;
  collaborators: Collaborator[];
}

function linkedinUrl(value: string) {
  return value.startsWith('http') ? value : `https://linkedin.com/in/${value}`;
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0])
    .join('')
    .toUpperCase();
}

function Avatar({ person }: { person: Collaborator }) {
  if (person.photo) {
    return (
      <div className='border-border relative h-14 w-14 shrink-0 overflow-hidden rounded-full border'>
        <Image src={person.photo} alt={person.name} fill className='object-cover' sizes='56px' />
      </div>
    );
  }
  return (
    <div className='border-border bg-surface text-muted-foreground flex h-14 w-14 shrink-0 items-center justify-center rounded-full border font-mono text-sm font-medium'>
      {initials(person.name)}
    </div>
  );
}

function CollaboratorCard({ person, isOwner }: { person: Collaborator; isOwner: boolean }) {
  return (
    <div className='border-border bg-card flex min-w-0 items-start gap-4 rounded-xl border p-4'>
      <Avatar person={person} />
      <div className='flex min-w-0 flex-1 flex-col gap-0.5'>
        <div className='flex flex-wrap items-center gap-x-2 gap-y-1'>
          <h3 className='text-foreground font-medium wrap-break-word'>{person.name}</h3>
          {isOwner && (
            <span className='border-primary/20 bg-primary/5 text-primary rounded-full border px-2 py-0.5 text-[10px] font-medium tracking-wide uppercase'>
              You
            </span>
          )}
        </div>
        <p className='text-primary text-sm font-medium wrap-break-word'>{person.role}</p>
        <p className='text-muted-foreground text-xs wrap-break-word'>{person.specialty}</p>
      </div>
      {person.linkedin && (
        <a
          href={linkedinUrl(person.linkedin)}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={`${person.name} on LinkedIn`}
          className='text-muted-foreground hover:text-foreground mt-0.5 shrink-0 transition-colors'
        >
          <Linkedin className='h-4 w-4' />
        </a>
      )}
    </div>
  );
}

export function ProjectCollaborators({ role, collaborators }: ProjectCollaboratorsProps) {
  const owner: Collaborator = {
    name: profile.name,
    specialty: profile.tagline,
    role: role ?? 'Contributor',
    linkedin: profile.linkedin,
    photo: profile.photo || undefined,
  };
  const people = [owner, ...collaborators];

  return (
    <div className='grid gap-4 sm:grid-cols-2'>
      {people.map((person, i) => (
        <CollaboratorCard key={`${person.name}-${i}`} person={person} isOwner={i === 0} />
      ))}
    </div>
  );
}
