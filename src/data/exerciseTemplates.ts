export interface ExerciseField {
  id: string;
  label: string;
  subtitle?: string;
  prompts?: string[];
  color: string;
  type?: "text" | "list" | "table" | "rated-list";
  /** Column headers for table type */
  columns?: string[];
  /** Fixed items for rated-list type */
  items?: string[];
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

  // ── Wellness / Leadership ──
  "make-heart-sing": {
    id: "make-heart-sing",
    title: "What Makes My Heart Sing?",
    description:
      "This exploration guides you toward discovering the essence of joy in your life. It invites you to briefly envision a state of pure, blissful happiness—a moment where worries fade away, leaving you free and light. A smile naturally finds its way to your face, bringing relaxation and a sense of inner peace that extends to the world around you. Perhaps you'll even sense an inner radiance and a sense of expansiveness within your heart.",
    importantNote:
      "INSTRUCTIONS:\n1. Take roughly 10 minutes in a peaceful space to jot down your response below.\n2. Focus on writing without analyzing too much. If your answers feel straightforward, that's perfectly alright—it might indicate something significant.\n3. Feel open to expanding this list with any additional ideas that arise in the days or weeks ahead.\n\nHELPFUL TIPS:\n• Recall moments from your childhood when you felt utmost happiness.\n• Engage each of your five senses—sight, hearing, touch/feel, smell, and taste—to identify a joyful memory associated with each.\n• For instance, watching a sunset, the playful sounds of children or dogs, the sensation of hiking up a mountain, the aroma of cooking, observing the world from a window, expressing love, the comfort of fresh bedsheets, or any other distinct experiences that resonate uniquely with you.",
    footerNote:
      "REFLECT: As you review your list, what patterns, strong messages, or unexpected discoveries emerge? Are there recurring themes among these experiences? How feasible do these activities seem? And why do you believe you don't engage in them more frequently?",
    fields: [
      {
        id: "joys",
        label: "Now answer the question:",
        subtitle: "What are My Top 10 Joys in Life? What Makes My Heart Sing?",
        color: "hsl(210,75%,50%)",
        type: "list",
      },
    ],
  },

  "detox-relationship": {
    id: "detox-relationship",
    title: "Detox Your Relationship",
    description:
      "Throughout our lives, the majority of our time is spent alongside a select group of five individuals. Specialists in success emphasize that the company we keep significantly shapes our happiness and our outcomes in life. It's evident that content, accomplished individuals tend to surround themselves with others who exude similar positivity and achievement.\n\nGiven this, why not pinpoint those who motivate and propel you toward greater heights while also recognizing those who may hinder your progress? Engaging in this practice naturally prompts a shift in how you choose your companions, enabling you to gravitate toward a more uplifting circle.",
    importantNote:
      'INSTRUCTIONS:\n1. Create a roster of the 20 individuals who constitute the bulk of your time. Alongside each name, designate a symbol:\n\n"+" signifies feeling uplifted and positive post-interaction. These are individuals whose company brings joy and contentment, fostering your happiness and success. They\'re the ones you eagerly anticipate spending time with.\n\n"-" indicates a sense of diminishment after spending time together. It might manifest as feeling smaller, less spirited, or unnecessarily burdened either before or after meeting them. You likely already have an inkling of who these individuals are.\n\n2. Following this, assign a (gut-feeling) score ranging from -5 to +5 to gauge their impact on you.\n\n3. Lastly, for those with the highest and lowest scores, allocate actions in the final column to navigate your relationships.',
    fields: [
      {
        id: "roster",
        label: "Your Relationship Roster",
        color: "hsl(210,75%,50%)",
        type: "table",
        columns: ["Name", "+/- Score", "Action"],
      },
    ],
  },

  "energy-zappers": {
    id: "energy-zappers",
    title: "Identify Your Energy Zappers",
    description:
      "Jot down the challenges you're facing both at home and in your primary work or daily occupation. This exercise will aid in identifying the factors that might currently restrict you. If your list extends beyond ten items, simply continue adding them below.\n\nExamples of energy zappers can encompass various aspects such as situations, personal or others' behaviors, unresolved issues, unfulfilled needs, clutter, breached boundaries, incomplete tasks, neglected plants, overdue library materials, an outdated wardrobe, guilt or lingering concerns, dietary habits, indecision, relationship dynamics, and sleep patterns.",
    fields: [
      {
        id: "zappers",
        label: "Energy Zappers",
        color: "hsl(30,90%,55%)",
        type: "list",
      },
      {
        id: "one-thing",
        label: "If there was ONE THING that TOTALLY ZAPPED your energy it would be:",
        color: "hsl(350,70%,55%)",
        type: "text",
      },
    ],
  },

  "putting-up-with": {
    id: "putting-up-with",
    title: "What Are You Putting Up With?",
    description:
      "Often, we find ourselves weighed down and inundated by matters we endure without addressing. These accumulate gradually, cluttering our minds.\n\nWhile you may not feel inclined to tackle them immediately, simply listing them here heightens your awareness. Naturally, this awareness can spur you to address, fix, and resolve these issues over time. Take a moment to catalog what you're tolerating below, uncovering what might be cluttering your mind, sapping your energy, and impeding your progress!\n\nExamples: Incomplete tasks, frustrations, poor processes/procedures, unresolved problems, other people's or your own behaviour, clutter, 'shoulds', unmet needs, crossed boundaries, poor morale, overdue bills or invoices, outdated design, guilt, exercise/eating/sleep habits, office cleanliness/tidiness, undone filing, indecision, procrastination etc.",
    footerNote:
      'Finally, pick ONE action to reduce your "Tolerations" (aim to take action now – or in the next day or so)',
    fields: [
      {
        id: "tolerations",
        label: "Now is the time to identify what you're tolerating!",
        subtitle: "Write as many items as you can now. Then over time, as you think of more things, add them to your list below.",
        color: "hsl(210,75%,50%)",
        type: "list",
      },
      {
        id: "one-action",
        label: "Pick ONE action to reduce your Tolerations:",
        color: "hsl(175,60%,40%)",
        type: "text",
      },
    ],
  },

  // ── Finance ──
  "urgent-vs-important": {
    id: "urgent-vs-important",
    title: "Urgent vs. Important",
    description:
      'Most of us have many needs, wants, and goals. It can be hard to focus on one at a time. This matrix can help you determine which types of spending are urgent or important, or both, or neither. Make sure your "basics" are covered first – things that are both urgent and important, and are necessary for living day-to-day. If you have items that are not urgent and not important, then reflect on whether you really need to spend money on them. These might be opportunities to "find money" to spend on other more necessary things.',
    fields: [
      {
        id: "spending-items",
        label: "Write down things you need or want to spend money on:",
        color: "hsl(210,75%,50%)",
        type: "list",
      },
      {
        id: "urgent-important",
        label: "Urgent + Important",
        subtitle: "Basic needs: Things you can't live without, such as Food, Rent or mortgage, Utility payments, Transit",
        color: "hsl(350,70%,55%)",
        type: "text",
      },
      {
        id: "not-urgent-important",
        label: "Not urgent + Important",
        subtitle: "Your personal goals: Longer-term planning, spending that will help you lead the life you want, such as Larger home purchases, Education, Travel",
        color: "hsl(210,75%,50%)",
        type: "text",
      },
      {
        id: "urgent-not-important",
        label: "Urgent + Not important",
        subtitle: "Short term needs: Things that are less important long term but help you get through your day-to-day, such as Daily coffee, McDonald's lunch once a week",
        color: "hsl(30,90%,55%)",
        type: "text",
      },
      {
        id: "not-urgent-not-important",
        label: "Not urgent + Not important",
        subtitle: "Wants, not needs: Spending that isn't meeting a need, and isn't urgent, such as Impulse buys at the checkout line, Emotional spending",
        color: "hsl(175,60%,40%)",
        type: "text",
      },
    ],
  },

  "plan-do-review": {
    id: "plan-do-review",
    title: "Plan, Do and Review Action Plan",
    description:
      'The "Plan, Do, Review" action plan is a structured tool for outlining goals, actions, and assessments. It helps plan objectives, execute tasks, and evaluate outcomes, fostering accountability and progress tracking. It encourages a cyclical approach, enabling reflection and refinement for continuous improvement.',
    fields: [
      {
        id: "plan-goal",
        label: "PLAN",
        subtitle: "Define clear financial goals and SMART objectives. Implement tactics such as acquiring new skills, expanding networks, and investing in education.",
        color: "hsl(350,70%,55%)",
        prompts: ["The financial goal I am working towards is:"],
        type: "text",
      },
      {
        id: "plan-start",
        label: "I will start by doing:",
        color: "hsl(350,70%,55%)",
        type: "text",
      },
      {
        id: "plan-future",
        label: "Future steps I will need to take:",
        color: "hsl(350,70%,55%)",
        type: "text",
      },
      {
        id: "do-complete",
        label: "DO",
        subtitle: "Follow through by enrolling in relevant courses, accumulating experience, and actively networking. Remain flexible and adaptable to evolving circumstances.",
        color: "hsl(210,75%,50%)",
        prompts: ["I will complete this by (date):"],
        type: "text",
      },
      {
        id: "do-resources",
        label: "Resources I can access to help me are:",
        color: "hsl(210,75%,50%)",
        type: "text",
      },
      {
        id: "review-support",
        label: "REVIEW",
        subtitle: "Consistently track financial progress, analyze both achievements and setbacks, and adjust strategies to consistently enhance prospects for financial growth.",
        color: "hsl(175,60%,40%)",
        prompts: ["I would like support from my coach/Caseworker/counsellor to:"],
        type: "text",
      },
    ],
  },

  "my-money-priorities": {
    id: "my-money-priorities",
    title: "My Money Priorities",
    description:
      'Go through the list and prioritize your spending by writing a "1" next to the most important spending item, a "2" to the second most important spending item, and so on until the whole list is numbered. There is no right or wrong way for the list to be arranged.',
    fields: [
      {
        id: "priorities",
        label: "Rate each item by priority",
        color: "hsl(210,75%,50%)",
        type: "rated-list",
        items: [
          "Automobile or other transportation",
          "Bills paid on time",
          "Groceries",
          "Housing",
          "Church/worship contributions",
          "Saving for emergencies",
          "Education for children",
          "Television/cable",
          "Clothes and shoes",
          "Family or religious celebrations",
          "Paying off debt",
          "Furniture and home repairs",
          "Going on vacation",
          "Medicine and medical care",
          "Eating out at restaurants",
          "Life insurance",
          "Books, newspapers, magazines",
          "Beer and other alcohol",
          "Sports",
          "Retirement",
        ],
      },
      {
        id: "other-priorities",
        label: "Other",
        color: "hsl(30,90%,55%)",
        type: "text",
      },
    ],
  },

  // ── Performance ──
  "unstick-yourself": {
    id: "unstick-yourself",
    title: "Unstick Yourself Now!",
    description:
      "This is a super simple exercise, anytime you're stuck, just ask these 5 easy questions below to brainstorm and come up with lots of new ideas – then choose 3 actions to move you forwards.",
    fields: [
      {
        id: "goal",
        label: "Firstly, what's your goal – how would you like things to be different?",
        color: "hsl(210,75%,50%)",
        type: "text",
      },
      {
        id: "stop",
        label: "What could you STOP doing?",
        subtitle: "Identify at least 3 answers for each question to move you closer to your goal above.\nDon't think too hard, just read the question, write whatever springs to your mind.",
        color: "hsl(350,70%,55%)",
        type: "list",
      },
      {
        id: "less",
        label: "What could you do LESS of?",
        color: "hsl(30,90%,55%)",
        type: "list",
      },
      {
        id: "more",
        label: "What could you do MORE of?",
        color: "hsl(175,60%,40%)",
        type: "list",
      },
      {
        id: "continue",
        label: "What could you CONTINUE doing?",
        color: "hsl(210,75%,50%)",
        type: "list",
      },
      {
        id: "start",
        label: "What could you START doing?",
        color: "hsl(265,55%,45%)",
        type: "list",
      },
      {
        id: "actions",
        label: "So, what actions will you take now to empower yourself, get unstuck and get moving?",
        subtitle: "Choose actions that are easily do-able and write them below.",
        color: "hsl(350,70%,55%)",
        type: "table",
        columns: ["Action", "by When"],
      },
    ],
  },

  "love-your-weaknesses": {
    id: "love-your-weaknesses",
    title: "Love Your Weaknesses",
    description:
      "We live in a world that likes to focus and 'work on' our 'weaknesses'. But these kinds of faults are usually subjective. Instead consider the idea that they're only true weaknesses when they get in the way of what we want to do – not just because someone says so... This exercise gives you a different perspective: to loosen the hold your so-called 'weaknesses' have on you by reframing how you see them.\n\nSimply list below your weakness and adjacent to each weakness mention how this weakness could be USEFUL or where it serves as a purpose. If you get struck, try thinking of weird, extreme, unusual or unlikely situations.",
    fields: [
      {
        id: "weaknesses",
        label: "Your Weaknesses & Their Purpose",
        color: "hsl(265,55%,45%)",
        type: "table",
        columns: ["Weakness", "Purpose"],
      },
    ],
  },

  // ── Mindset / Corporate ──
  "build-a-bridge": {
    id: "build-a-bridge",
    title: "Build a Bridge",
    description:
      "If you fell stuck or overwhelmed then this exercise is for you. Sometimes we get stuck when we focus on everything that could go wrong. And sometimes we get overwhelmed by worrying about everything to do on the road ahead. This is when we need to Build a Bridge! You don't need to see the other side – you just need to see your first 3 steps. Once you've taken those 3 steps you'll be able to see the next 3 steps. Then the next 3 and so on. Simple yet very effective!\n\nSimply answer the questions below, then complete the \"no fail\" action section to get you moving forwards. Use this exercise weekly to maintain momentum or simply to get moving whenever you feel overwhelmed or stuck. And don't think too hard just trust and write down whatever comes into your head.",
    fields: [
      {
        id: "goal-dream",
        label: "So, what is your goal or dream?",
        color: "hsl(210,75%,50%)",
        type: "text",
      },
      {
        id: "where-ultimately",
        label: "Where ultimately do you want to get to?",
        color: "hsl(175,60%,40%)",
        type: "text",
      },
      {
        id: "done-so-far",
        label: "What have you done so far towards your goal or dream?",
        color: "hsl(30,90%,55%)",
        type: "text",
      },
      {
        id: "big-thing",
        label: "If there was one big thing getting in the way of you moving forwards, what would it be?",
        color: "hsl(350,70%,55%)",
        type: "text",
      },
      {
        id: "no-fear",
        label: "If you could do anything with no fear or limits, what would it be?",
        color: "hsl(265,55%,45%)",
        type: "text",
      },
      {
        id: "bridge-actions",
        label: "Now, write down your very first 3 steps to Build a Bridge",
        subtitle: "What are the 3 Things You Could Do in the next week WITHOUT FAIL that would move you closer to your goals? These actions can be as small or as big as you like, but must be easily do-able within the next week.",
        color: "hsl(175,60%,40%)",
        type: "list",
      },
    ],
  },
};

// Map exercise titles to template IDs
export const exerciseTitleToTemplateId: Record<string, string> = {
  "Improvement Canvas": "improvement-canvas",
  "SWOT Analysis": "swot-analysis",
  "Not To-Do List": "not-to-do-list",
  "GROW": "grow",
  "Make Heart Sing": "make-heart-sing",
  "Detox Toxic Relationships": "detox-relationship",
  "Identify Your Zappers": "energy-zappers",
  "Putting Up With?": "putting-up-with",
  "Urgent vs. Important": "urgent-vs-important",
  "Plan, Do and Review": "plan-do-review",
  "My Money Priorities": "my-money-priorities",
  "Unstick Yourself!": "unstick-yourself",
  "Love Your Weaknesses": "love-your-weaknesses",
  "Build a Bridge": "build-a-bridge",
};
