import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const icons = [
  'javascript',
  'typescript',
  'mysql',
  'vuedotjs',
  'nestjs',
  'nodedotjs',
  'laravel',
  'firebase',
  'prisma',
  'git',
  'github',
  'npm',
  'arduino',
  'canva',
  'figma',
  'microsoftoffice'
];

const sourceDir = path.resolve(__dirname, 'node_modules', 'simple-icons', 'icons');
const destDir = path.resolve(__dirname, 'src', 'assets', 'logos');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

icons.forEach(icon => {
  const sourceFile = path.join(sourceDir, `${icon}.svg`);
  const destFile = path.join(destDir, `${icon}.svg`);
  if (fs.existsSync(sourceFile)) {
    fs.copyFileSync(sourceFile, destFile);
    console.log(`Copied ${icon}.svg`);
  } else {
    console.log(`Icon not found: ${icon}.svg`);
  }
});
