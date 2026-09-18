/** Restore each section when its content is ready for public review. */
export const hiddenRoutes: readonly string[] = ['/experience', '/research', '/publications'];

export function isRouteVisible(path: string): boolean {
  return !hiddenRoutes.includes(path);
}
