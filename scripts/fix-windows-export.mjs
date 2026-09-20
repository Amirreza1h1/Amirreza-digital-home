import { copyFile, readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

// Next 16.3.3 converts only forward slashes in static segment payload names.
// Windows exports nested __next.* directories instead of the flat names requested
// by the router. Keep the original files and add the expected static filenames.
// GitHub Actions builds on Linux, where no correction is needed.
if (process.platform === 'win32') {
  const root = path.resolve('out');
  const files = await readdir(root, { recursive: true });
  let copied = 0;
  for (const relative of files) {
    const parts = relative.split(path.sep);
    const start = parts.findIndex(part => part.startsWith('__next.'));
    if (start < 0 || start === parts.length - 1 || !relative.endsWith('.txt')) continue;
    const source = path.join(root, relative);
    const target = path.join(root, ...parts.slice(0, start), parts.slice(start).join('.'));
    try {
      const existing = await readFile(target);
      if (!existing.equals(await readFile(source))) {
        throw new Error(`Conflicting static payload: ${target}`);
      }
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
      await copyFile(source, target);
      copied++;
    }
  }
  console.log(`Static export: normalized ${copied} Windows navigation payloads.`);
}
