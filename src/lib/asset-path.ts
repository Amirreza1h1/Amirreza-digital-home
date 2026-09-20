/** Public files need the Pages prefix; Next Link and static imports already handle it. */
export function assetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  return `${basePath}${path}`;
}
