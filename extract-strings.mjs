import { coachingAreas } from './src/data/coachingAreas';
import { exerciseTemplates } from './src/data/exerciseTemplates';
import { learnContent } from './src/data/learnContent';
import { resourcesContent } from './src/data/resourcesContent';
import fs from 'fs';

const source = {
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
    current: "Current State",
    target: "Target State",
    nextSteps: "Next Steps"
  },
  coaching: {},
  exercises: {},
  learn: {},
  resources: {}
};

// Extract Coaching Areas
coachingAreas.forEach(area => {
  source.coaching[area.id] = {
    name: area.name,
    resources: area.resources.map(r => ({ title: r.title, subtitle: r.subtitle }))
  };
});

// Extract Exercise Templates
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

// Extract Learn Content
Object.entries(learnContent).forEach(([areaId, items]) => {
  source.learn[areaId] = items.map(item => ({
    title: item.title,
    content: item.content
  }));
});

// Extract Resources Content
Object.entries(resourcesContent).forEach(([areaId, res]) => {
  source.resources[areaId] = {
    tips: res.tips,
    quotes: res.quotes,
    ebooks: res.ebooks
  };
});

fs.writeFileSync('./src/i18n/source_en.json', JSON.stringify(source, null, 2));
console.log("English source strings extracted to ./src/i18n/source_en.json");
