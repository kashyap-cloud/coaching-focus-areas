import { coachingAreas } from './src/data/coachingAreas';
import { exerciseTemplates } from './src/data/exerciseTemplates';
import { learnContent } from './src/data/learnContent';
import { resourcesContent } from './src/data/resourcesContent';
import { selfCareQuiz, selfCareCheckin } from './src/data/wellnessExercises';
import fs from 'fs';

const API_KEY = process.env.TRANSLATE_API_KEY as string;
const TARGET_LANGS = [
  "es", "fr", "pt", "de", "ar", "hi", "bn", "zh-CN", "ja", 
  "id", "tr", "vi", "ko", "ru", "it", "pl", "th", "tl", "ur"
];

const source: any = {
  common: {
    history: "History",
    back: "Back",
    submit: "Submit",
    coachingAreas: "Coaching Areas",
    whatInterestsYou: "What coaching focus interests you?",
    saving: "Saving...",
    savedToCloud: "Response saved to cloud",
    noHistory: "No history yet. Submit your first entry!",
    previousEntries: "Previous Entries",
    loadingHistory: "Loading your history...",
    noCompletedExercises: "No completed exercises yet",
    submitFirstEntry: "Submit an exercise to see your history here.",
    yourResponsesSaved: "Your responses are saved securely to the cloud",
    retry: "Retry",
    couldNotLoadHistory: "Could not load history. Please check your connection.",
    done: "Done!",
    item: "Item",
    rating: "Rating",
    addItem: "Add item",
    addRow: "Add row",
    enterResponse: "Enter your response...",
    vision: "Vision",
    why: "Why?",
    currentState: "Current State",
    targetState: "Target State",
    nextSteps: "Next Steps",
    importantNote: "Important Note",
    footerNote: "Footer Note",
    selectLanguage: "Select Language",
    results: "Results",
    retakeQuiz: "Retake Quiz",
    next: "Next",
    previous: "Previous",
    history: "History",
    previousResults: "Previous Results",
    quizCompleted: "Quiz Completed!",
    quizSuccessMessage: "Great job! Your results have been saved. You can view your past quiz results anytime in the History section.",
    thankYou: "Thank You!",
    entrySavedMessage: "Your entry has been saved successfully. You can revisit your responses anytime in the History section.",
    gotIt: "Got it",
    budgeting: "Budgeting",
    banking: "Banking",
    creditHistory: "Credit History",
    debtReduction: "Debt Reduction",
    savingLabel: "Saving",
    taxFiling: "Tax Filing",
    minutes: "min",
    sessionsCount: "sessions",
    resources: "Resources",
    tips: {
      title: "Tips",
      subtitle: "Get control of your life"
    },
    quotes: {
      title: "Quotes",
      subtitle: "One day at a time"
    },
    ebooks: {
      title: "Ebooks",
      subtitle: "Books are a man's best friend"
    },
    exercises: "Exercises",
    learn: "Learn"
  },
  coaching: {},
  exercises: {},
  learn: {},
  resources: {}
};

// Add wellness exercises to source
source.exercises[selfCareQuiz.id] = {
  title: selfCareQuiz.title,
  description: selfCareQuiz.description,
  questions: selfCareQuiz.questions.map(q => ({
    text: q.text,
    options: q.options
  }))
};

source.exercises[selfCareCheckin.id] = {
  title: selfCareCheckin.title,
  description: selfCareCheckin.description,
  categories: selfCareCheckin.categories.map(c => ({
    label: c.label
  }))
};

// Extract data
coachingAreas.forEach(area => {
  source.coaching[area.id] = {
    name: area.name
  };
});

Object.entries(exerciseTemplates).forEach(([id, temp]) => {
  source.exercises[id] = {
    title: temp.title,
    description: temp.description,
    importantNote: temp.importantNote,
    footerNote: temp.footerNote,
    fields: temp.fields.map(f => ({
      label: f.label,
      subtitle: f.subtitle,
      prompts: f.prompts,
      columns: f.columns,
      items: f.items
    }))
  };
});

Object.entries(learnContent).forEach(([areaId, items]) => {
  source.learn[areaId] = Object.values(items).map(item => ({
    title: item.title,
    content: item.paragraphs // mapping paragraphs to content for i18n key consistency
  }));
});

Object.entries(resourcesContent).forEach(([areaId, res]) => {
  source.resources[areaId] = {
    tips: res.tips,
    quotes: res.quotes,
    ebooks: res.ebooks
  };
});

if (!fs.existsSync('./src/i18n/locales')) fs.mkdirSync('./src/i18n/locales', { recursive: true });
fs.writeFileSync('./src/i18n/locales/en.json', JSON.stringify(source, null, 2));

const sleep = (ms: number) => new Promise(res => setTimeout(res, ms));

async function batchTranslate(texts: string[], target: string): Promise<string[]> {
  if (texts.length === 0) return [];
  
  const BATCH_SIZE = 25; // Even smaller batch size for stability
  const results: string[] = [];
  
  for (let i = 0; i < texts.length; i += BATCH_SIZE) {
    const chunk = texts.slice(i, i + BATCH_SIZE);
    let retryCount = 0;
    let chunkSuccess = false;
    console.log(`  Translating chunk ${Math.floor(i/50) + 1} of ${Math.ceil(texts.length/50)} for ${target}...`);

    while (retryCount < 5 && !chunkSuccess) {
      try {
        const url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;
        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify({ q: chunk, target, format: "text" })
        });
        const data = (await response.json()) as any;
        
        if (data.error) {
          throw new Error(data.error.message);
        }
        
        results.push(...data.data.translations.map((t: any) => t.translatedText));
        chunkSuccess = true;
        await sleep(500); // larger gap between chunks
      } catch (err: any) {
        console.error(`Error in batch translation to ${target}: ${err.message}`);
        retryCount++;
        await sleep(2000);
      }
    }

    
    if (!chunkSuccess) {
      console.warn(`Failed to translate chunk after retries. Falling back to original text.`);
      results.push(...chunk);
    }
  }
  return results;
}

const CACHE_FILE = './translation-cache.json';
let translationCache: Record<string, Record<string, string>> = {};

if (fs.existsSync(CACHE_FILE)) {
  translationCache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
}

function saveCache() {
  fs.writeFileSync(CACHE_FILE, JSON.stringify(translationCache, null, 2));
}

async function translateWithCache(texts: string[], target: string): Promise<string[]> {
  if (!translationCache[target]) translationCache[target] = {};
  
  const results: string[] = new Array(texts.length);
  const toTranslate: { text: string; index: number }[] = [];
  
  texts.forEach((text, i) => {
    if (translationCache[target][text]) {
      results[i] = translationCache[target][text];
    } else {
      toTranslate.push({ text, index: i });
    }
  });
  
  if (toTranslate.length > 0) {
    console.log(`Actually translating ${toTranslate.length} new strings for ${target}...`);
    const translated = await batchTranslate(toTranslate.map(t => t.text), target);
    translated.forEach((trans, i) => {
      const original = toTranslate[i].text;
      translationCache[target][original] = trans;
      results[toTranslate[i].index] = trans;
    });
    saveCache();
  }
  
  return results;
}

function getChildStrings(obj: any, path: string, result: Map<string, string>) {
  if (typeof obj === 'string') {
    if (obj.trim()) result.set(path, obj);
  } else if (Array.isArray(obj)) {
    obj.forEach((item, i) => getChildStrings(item, `${path}[${i}]`, result));
  } else if (typeof obj === 'object' && obj !== null) {
    Object.entries(obj).forEach(([key, val]) => getChildStrings(val, `${path}.${key}`, result));
  }
}

function setPath(obj: any, path: string, value: string) {
  const parts = path.split(/\.|\[|\]/).filter(Boolean);
  let current = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i];
    const nextPart = parts[i+1];
    const isNextArray = !isNaN(Number(nextPart));
    
    if (current[part] === undefined) {
      current[part] = isNextArray ? [] : {};
    }
    current = current[part];
  }
  const lastPart = parts[parts.length - 1];
  current[lastPart] = value;
}

async function run() {
  // 1. Flatten source
  const stringMap = new Map<string, string>();
  getChildStrings(source, '', stringMap);
  
  const paths = Array.from(stringMap.keys());
  const enTexts = Array.from(stringMap.values());
  
  // Dedup unique strings to save quota
  const uniqueEn = Array.from(new Set(enTexts));
  console.log(`Unique strings to translate: ${uniqueEn.length} (out of ${enTexts.length} total)`);

  for (const lang of TARGET_LANGS) {
    // Always overwrite to ensure changes in source are reflected
    // if (fs.existsSync(`./src/i18n/locales/${lang}.json`)) continue;

    console.log(`Translating to ${lang}...`);
    const stringsToTranslate = uniqueEn.filter(text => !translationCache[lang]?.[text]);
    console.log(`Strings missing in cache for ${lang}:`, JSON.stringify(stringsToTranslate, null, 2));

    const uniqueTranslations = await translateWithCache(uniqueEn, lang);
    const translationMap = new Map(uniqueEn.map((text, i) => [text, uniqueTranslations[i]]));
    
    // Reconstruct object
    const translatedObj = {};
    paths.forEach(path => {
      const orig = stringMap.get(path)!;
      const trans = translationMap.get(orig) || orig;
      setPath(translatedObj, path.startsWith('.') ? path.slice(1) : path, trans);
    });
    
    fs.writeFileSync(`./src/i18n/locales/${lang}.json`, JSON.stringify(translatedObj, null, 2));
    console.log(`✅ Saved locales/${lang}.json`);
    
    // Save cache after each language
    fs.writeFileSync(CACHE_FILE, JSON.stringify(translationCache, null, 2));
    console.log(`💾 Cache saved`);

    await sleep(1000); // Wait 1s between languages
  }
  
  console.log("\nAll translations completed successfully!");
}

run();
