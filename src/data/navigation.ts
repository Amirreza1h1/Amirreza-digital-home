export interface NavItem {
  label: string;
  href: string;
}

/** A labelled group of links, rendered as a dropdown in the header. */
export interface NavGroup {
  label: string;
  items: NavItem[];
}

export type NavEntry = NavItem | NavGroup;

export function isNavGroup(entry: NavEntry): entry is NavGroup {
  return 'items' in entry;
}

/** Header/primary navigation. Academic pages are grouped to keep the bar focused. */
export const navItems: NavEntry[] = [
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/skills' },
  {
    label: 'Academic',
    items: [
      { label: 'Research', href: '/research' },
      { label: 'Publications', href: '/publications' },
      { label: 'Education', href: '/education' },
      { label: 'Certificates', href: '/education#certificates' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

/** Flattened, exhaustive list of every navigable page — used by the footer. */
export const flatNavItems: NavItem[] = navItems.flatMap(entry => (isNavGroup(entry) ? entry.items : [entry]));
