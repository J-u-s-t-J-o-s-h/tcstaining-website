/**
 * Converts PNG images in public/images/gallery to WebP for faster loading.
 * Run once: npm run convert-images
 * Requires: npm install --save-dev sharp
 */
import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const galleryDir = join(__dirname, '..', 'public', 'images', 'gallery');

async function convert() {
  const files = await readdir(galleryDir);
  const pngs = files.filter((f) => f.endsWith('.png'));
  if (pngs.length === 0) {
    console.log('No PNG files found in public/images/gallery');
    return;
  }
  for (const file of pngs) {
    const base = file.replace(/\.png$/i, '');
    const input = join(galleryDir, file);
    const output = join(galleryDir, `${base}.webp`);
    await sharp(input)
      .webp({ quality: 82, effort: 4 })
      .toFile(output);
    console.log(`  ${file} → ${base}.webp`);
  }
  console.log(`Done. Converted ${pngs.length} images to WebP.`);
}

convert().catch((err) => {
  console.error(err);
  process.exit(1);
});
