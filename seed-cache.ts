import fs from 'fs';
import path from 'path';

const localesDir = './src/i18n/locales';
const enFile = path.join(localesDir, 'en.json');
const cacheFile = './translation-cache.json';

if (!fs.existsSync(enFile)) {
  console.error("en.json missing");
  process.exit(1);
}

const en = JSON.parse(fs.readFileSync(enFile, 'utf8'));
const cache: Record<string, Record<string, string>> = {};

function flatten(obj: any, prefix = ''): Record<string, string> {
  let res: Record<string, string> = {};
  for (const [key, value] of Object.entries(obj)) {
    const p = prefix ? (Array.isArray(obj) ? `${prefix}[${key}]` : `${prefix}.${key}`) : key;
    if (typeof value === 'string') {
      res[p] = value;
    } else if (typeof value === 'object' && value !== null) {
      Object.assign(res, flatten(value, p));
    }
  }
  return res;
}

const enFlat = flatten(en);

fs.readdirSync(localesDir).forEach(file => {
  if (file === 'en.json' || !file.endsWith('.json')) return;
  const lang = file.replace('.json', '');
  const data = JSON.parse(fs.readFileSync(path.join(localesDir, file), 'utf8'));
  const flat = flatten(data);
  
  cache[lang] = {};
  for (const [path, enValue] of Object.entries(enFlat)) {
    if (flat[path]) {
      cache[lang][enValue] = flat[path];
    }
  }
});

fs.writeFileSync(cacheFile, JSON.stringify(cache, null, 2));
console.log("Cache seeded successfully!");
