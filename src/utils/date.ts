export function formatDate(dateStr: string): string {
  const parts = dateStr.split('-');
  const year = parseInt(parts[0] ?? '2020', 10);
  const month = parseInt(parts[1] ?? '1', 10) - 1;
  return new Date(year, month).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
}

export function formatDateRange(startDate: string, endDate: string | null): string {
  return `${formatDate(startDate)} — ${endDate ? formatDate(endDate) : 'Present'}`;
}

export function formatBlogDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}
