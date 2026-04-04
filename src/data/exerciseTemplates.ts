export interface ExerciseField {
  id: string;
  label: string;
  subtitle?: string;
  prompts?: string[];
  color: string;
  type?: "text" | "list";
}

export interface ExerciseTemplate {
  id: string;
  title: string;
  description: string;
  importantNote?: string;
  footerNote?: string;
  fields: ExerciseField[];
}

export const exerciseTemplates: Record<string, ExerciseTemplate> = {
  "improvement-canvas": {
    id: "improvement-canvas",
    title: "Improvement Canvas",
    description:
      'The improvement canvas is based upon the "Toyota Kata" Approach. It\'s a visual way to explore your vision, where are you now, where you want to go next and the first steps you can take. This exercise can be used for any major change effort, may it be personal, team, or organisational change. It acts as a living reminder of why you are changing and the steps you are taking.',
    fields: [
      { id: "vision", label: "Vision – The Why?", subtitle: "Why are we embarking on this change?", color: "hsl(350,70%,55%)" },
      { id: "current", label: "Current State – The Where?", subtitle: "Where are we now?", color: "hsl(30,90%,55%)" },
      { id: "target", label: "Target State – The Want", subtitle: "Where we want to be next, e.g. 3 months from now?", color: "hsl(175,60%,40%)" },
      { id: "next-steps", label: "Next Steps – The First Step", subtitle: "What are the first steps you are going to take?", color: "hsl(210,75%,50%)" },
    ],
  },
  "swot-analysis": {
    id: "swot-analysis",
    title: "Personal SWOT Analysis",
    description:
      "A SWOT analysis is a frequently employed business technique aimed at pinpointing strengths, weaknesses, opportunities, and threats within an organization or team. However, it's worth noting that this analysis can also be applied personally. Conducting your own Personal SWOT analysis can be incredibly beneficial. It allows you to differentiate yourself at work or in life, acknowledge your distinct abilities, strengths, and talents, devise tactics to address weaknesses and threats, and capitalize on available opportunities!",
    importantNote:
      "This involves avoiding excessive modesty or self-criticism. Simply respond to the questions truthfully, considering your perspective as well as how those around you might perceive you.",
    footerNote:
      "Trends and Threats refers to changing technology, government, professional or organizational policy or environmental, market, social, economic, lifestyle, or demographic trends.",
    fields: [
      {
        id: "strengths",
        label: "STRENGTHS",
        color: "hsl(175,60%,40%)",
        type: "list",
        prompts: [
          "What do you do well? What do you do better than others?",
          "What unique skills and talents do you have?",
          "What do others see as your strengths?",
          "What are you proud of, like about yourself, enjoy doing?",
        ],
      },
      {
        id: "weaknesses",
        label: "WEAKNESSES",
        color: "hsl(350,70%,55%)",
        type: "list",
        prompts: [
          "What could you do better? What do you avoid?",
          "Where do you have less skill or talent than others?",
          "What are others likely to see as weaknesses?",
          "What do need to face up to?",
        ],
      },
      {
        id: "opportunities",
        label: "OPPORTUNITIES",
        color: "hsl(210,75%,50%)",
        type: "list",
        prompts: [
          "What opportunities are out there for you?",
          "What trends could you take advantage of?",
          "What strengths could you turn into opportunities?",
          "What is going on locally that you could capitalize on?",
        ],
      },
      {
        id: "threats",
        label: "THREATS",
        color: "hsl(30,90%,55%)",
        type: "list",
        prompts: [
          "What trends and threats could harm you?",
          "What is your competition doing?",
          "What threats do your weaknesses expose you to?",
          "What obstacles do you have coming up?",
        ],
      },
    ],
  },
  "not-to-do-list": {
    id: "not-to-do-list",
    title: "Not-to-do List",
    description:
      "The things on your not-to-do list are usually all the things that you know and feel deep down you shouldn't be spending time on, but somehow are unable to stop doing. A not-to-do list can help you systematically take care of those kinds of tasks once and for all.",
    fields: [
      { id: "list", label: "Your Not-to-do Items", subtitle: "List the things you need to stop doing", color: "hsl(265,55%,45%)", type: "list" },
    ],
  },
  grow: {
    id: "grow",
    title: "GROW",
    description:
      "Goal setting (define objectives), Reality check (assess current situation), Options exploration (consider strategies), and Way Forward (create actionable plan). It's a coaching tool that will help you in setting clear goals, understanding reality, brainstorming solutions, and devising a practical path toward achieving your aspirations.",
    fields: [
      { id: "goal", label: "GOAL", subtitle: "What do you want?", color: "hsl(350,70%,55%)" },
      { id: "reality", label: "REALITY", subtitle: "Where are you now?", color: "hsl(210,75%,50%)" },
      { id: "options", label: "OPTIONS", subtitle: "What could you do?", color: "hsl(30,90%,55%)" },
      { id: "will", label: "WILL", subtitle: "What will you do?", color: "hsl(175,60%,40%)" },
    ],
  },
};

// Map exercise titles to template IDs
export const exerciseTitleToTemplateId: Record<string, string> = {
  "Improvement Canvas": "improvement-canvas",
  "SWOT Analysis": "swot-analysis",
  "Not To-Do List": "not-to-do-list",
  "GROW": "grow",
};
