// Copy the prepared 19 November 2026 news image to make.fun's output directory.
import { mkdir, copyFile, stat } from 'node:fs/promises';
import { join } from 'node:path';

const imagePath = new URL('./entry.png', import.meta.url);
const outputDir = process.env.MAKEFUN_OUTPUT_DIR;

if (!outputDir) {
  throw new Error('MAKEFUN_OUTPUT_DIR must name the output directory');
}

await mkdir(outputDir, { recursive: true });
const outputPath = join(outputDir, 'entry.png');
await copyFile(imagePath, outputPath);
const { size } = await stat(outputPath);
console.log(`Wrote entry (${size} bytes) to ${outputPath}`);
