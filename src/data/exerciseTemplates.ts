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

  // ── Spiritual ──
  "mentor-magic": {
    id: "mentor-magic",
    title: "Mentor Magic!",
    description:
      "Take a few quiet moments and think about who you consider to be wise, perhaps someone spiritual, but definitely someone who has life experience and wisdom to share. Now simply answer the questions below to get unstuck or get insights on a goal, problem or your career.",
    importantNote:
      "TIP: Use a short version of this technique at any time to quickly gain ideas and insights towards resolving any issue or achieving a goal. Simply imagine yourself in the shoes of someone wise, experienced and perhaps knowledgeable and see what advice they have for you.",
    fields: [
      {
        id: "who-pick",
        label: "If you could step into absolutely anyone's shoes for half an hour–who you could learn from and gain valuable insights – who would you pick?",
        subtitle: "(go as far back in history or into your imagination as you like).",
        color: "hsl(210,75%,50%)",
        type: "text",
      },
      {
        id: "advice",
        label: "Now take a few moments and imagine you are that person. Think about the advice they would give you and write it here",
        subtitle: "(this could be advice for a specific issue or career goal, or general career advice–you choose).",
        color: "hsl(175,60%,40%)",
        type: "text",
      },
      {
        id: "additional-mentors",
        label: "Who else can you think of that could give you valuable insights? Imagine being each mentor–and what they would do or say–if they were in your position.",
        color: "hsl(30,90%,55%)",
        type: "table",
        columns: ["Additional Mentors", "Advice"],
      },
      {
        id: "what-will-you-do",
        label: "What will you do with all these ideas, and advice?",
        subtitle: "Now, step back into YOU and review the advice your mentors have given you. Write down 3 specific ideas, actions to get unstuck, or specific situations where you might use these learnings:",
        color: "hsl(350,70%,55%)",
        type: "list",
      },
    ],
  },

  // ── Mental Health ──
  "let-go": {
    id: "let-go",
    title: "What Do You Need to Let Go of?",
    description:
      "Although you might not feel inclined to take immediate action, jotting down what you need to release can heighten your awareness and naturally ease your grip. Read the story and ideas below, then create a simple list. What are you clinging to? What saps your energy or hinders your progress? What triggers frustration? What obstructs you from reaching your fullest potential?\n\nTwo Buddhist monks return to their monastery after the rains. They reach a swollen river and in front of them is a woman in a delicate silk kimono, distressed because she is unable to cross the river by herself. The older monk scoops her up, carries her safely to the other side and the two monks continue on their way in silence. Later, as the monks reach their destination, the younger monk (who has fumed for the last 5 hours) finally bursts out, \"How could you? We're not allowed to touch a woman!\" The older monk, surprised, replies: \"I put her down 5 hours ago, but you are still carrying her with you.\"",
    importantNote:
      "• As with the younger monk in the story, the things we hold onto (eg. that we feel angry, guilty, hurt about etc.) cloud our mind and stop us from fully enjoying life. The irony is that whatever you're holding onto, it probably bothers you much more than it does anyone else.\n• Letting go usually involves some form of forgiveness or acceptance – whether it's of yourself, someone else, a situation or even an unknown third party.\n• Letting go doesn't mean we condone a situation or behaviour, it's about lightening our load. When we let go of whatever is bothering us we set ourselves free – and get to reclaim that energy for ourselves.\n• While you can't change the past, you can learn from it and change how you feel going forwards. And remember – whatever you find the hardest to let go of is probably what you need to let go of the most.\n• If you need to let go of something you did ask, \"What could I do that will allow me to let this go?\" You may need to make note of what you learned, make some kind of amends, apologise or find a meaningful way to make it up to yourself or someone else.\n• Final thought: You don't need to know how to let go, you just need to be willing.",
    fields: [
      {
        id: "let-go-table",
        label: "What do I need to let go of?",
        color: "hsl(210,75%,50%)",
        type: "table",
        columns: ["What do I need to let go of?", "How I can benefit by 'holding on'"],
      },
      {
        id: "imagine-letting-go",
        label: "Just for a second, imagine letting go of everything on this list. How does it feel?",
        color: "hsl(175,60%,40%)",
        type: "text",
      },
      {
        id: "learned",
        label: "What have you learned about yourself from doing this exercise?",
        color: "hsl(350,70%,55%)",
        type: "text",
      },
    ],
  },

  // ── Wellness / Mental Health ──
  "too-comfortable": {
    id: "too-comfortable",
    title: "Are you sitting (too) comfortably?",
    description:
      "While in our comfort zone, we cruise on autopilot, feeling confident, relaxed, and secure, almost snug—it's effortless. But, could it be time to move on? Have you overstayed your welcome in this cozy space?",
    fields: [
      {
        id: "tried-new",
        label: "When was the last time you tried something new?",
        color: "hsl(210,75%,50%)",
        type: "text",
      },
      {
        id: "learning-growing",
        label: "How much are you learning and growing right now?",
        color: "hsl(175,60%,40%)",
        type: "text",
      },
      {
        id: "too-much-not-enough",
        label: "Do you feel you're doing too much – or not enough?",
        color: "hsl(30,90%,55%)",
        type: "text",
      },
      {
        id: "last-risk",
        label: "When was the last time you took a risk?",
        color: "hsl(350,70%,55%)",
        type: "text",
      },
      {
        id: "shift-change",
        label: "Do you feel its time for a shift – or a change?",
        color: "hsl(265,55%,45%)",
        type: "text",
      },
      {
        id: "comfort-continuum",
        label: "So, where are you on the \"Comfort Continuum\"?",
        subtitle: "Use your gut feeling to represent how you feel in your life right now:",
        color: "hsl(210,75%,50%)",
        type: "text",
      },
      {
        id: "serve-goals",
        label: "Does where you are on the \"Comfort Continuum\" serve you and your goals?",
        color: "hsl(175,60%,40%)",
        type: "text",
      },
    ],
    footerNote: "Do you need time in your comfort zone to rest and recharge? Are you just right, or are you heading towards Snoozeville?",
  },

  // ── Employee / Confidence ──
  "daily-success-habits": {
    id: "daily-success-habits",
    title: "Daily Success Habits",
    description:
      "We tend to overlook the importance of simple daily habits in managing ourselves and our lives. But it's often the small changes we make to our daily routines that enable the big changes in our lives and careers.\n\nThis tool helps you build a simple personal framework around which the rest of the day's activities fall into place.\n\nUse this tool to create a daily infrastructure so that no matter what happens you feel calm and assured.",
    importantNote:
      "What supportive daily habits – SPECIFIC DAILY ACTIONS – could you introduce?\n\nWrite up to 5 actions that best support you. Include your home, personal, and work-life. These must be specific and measurable actions so you know exactly what to do, and can easily show you've completed it.\n\nYou know yourself best: Where do you sabotage yourself regularly? what ideas do you already have? What ideas have you had but are pretending not to know?\n\nEXAMPLES:\n• Have 15 minutes of silence or alone time each day\n• Drink 6 glasses of water a day\n• Be at my desk by 8:00am / leave by 6:00pm every day\n• Eat a healthy breakfast every morning\n• Be in bed by 10:30pm\n• Do at least 30 mins exercise/activity every day\n• Set a timer: spend 15 mins max on social media daily\n• Make all calls in the first hour of the day\n• Write my top 3 priorities for the day, every morning before starting work\n• Eat lunch away from my desk\n• Connect daily with partner/spouse (5 mins listening)\n• Write all appointments down – in one place\n• Meditate for 30 minutes each morning before breakfast",
    footerNote:
      "REMEMBER: It takes time and practice to implement new habits. They start as simple actions and gradually, as you do them regularly, become habits. It can take anything from 21-30 days to implement a new habit and a few months to cement a habit. So be kind to yourself on the days you don't remember – and just start again the next day!",
    fields: [
      {
        id: "priorities",
        label: "My Top 3 PRIORITIES in life right now are",
        color: "hsl(210,75%,50%)",
        type: "list",
      },
      {
        id: "stressors",
        label: "My Top 3 STRESSORS in life right now are",
        color: "hsl(350,70%,55%)",
        type: "list",
      },
      {
        id: "habits-table",
        label: "Daily Habits",
        color: "hsl(175,60%,40%)",
        type: "table",
        columns: ["Habit", "Benefit"],
      },
      {
        id: "commit-tomorrow",
        label: "I will start.... (tomorrow)",
        color: "hsl(30,90%,55%)",
        type: "text",
      },
      {
        id: "commit-next-week",
        label: "I will start.... (next week)",
        color: "hsl(30,90%,55%)",
        type: "text",
      },
      {
        id: "commit-next-month",
        label: "I will start.... (next month)",
        color: "hsl(30,90%,55%)",
        type: "text",
      },
      {
        id: "who-to-be",
        label: "Who do I need to BE to implement these habits? I will be someone who is ....",
        color: "hsl(265,55%,45%)",
        type: "list",
      },
    ],
  },

  // ── Communicate / Confidence ──
  "positive-visualisation": {
    id: "positive-visualisation",
    title: "Positive Visualisation",
    description:
      "1. Find a quiet place to sit down and relax\n2. Close your eyes\n3. Think back to an experience you have had that made you feel really good. It can be anything – a personal accomplishment, a youthful memory, a successful project at work\n4. Take yourself back there and replay the sequence of events\n5. Be as detailed as you can in reliving the moment for yourself\n6. Hear the sounds, see the sights and feel the emotions\n7. Replay this a few times until you are immersed in this event\n8. Now open your eyes",
    fields: [
      {
        id: "event",
        label: "Briefly explain your event",
        color: "hsl(210,75%,50%)",
        type: "text",
      },
    ],
  },

  // ── Organization ──
  "get-perspective": {
    id: "get-perspective",
    title: "Get Perspective",
    description:
      "Allow yourself 30mins of quiet time to consider these questions that help you create and shape a vision for your future.\n\nWork through the questions in the order below and write your answers in the PRESENT tense.",
    fields: [
      {
        id: "ultimate-goal",
        label: "Where do you ultimately want to get to in your life/career?",
        subtitle: "Consider areas like your home/family, work/career, health & well-being, finances, community/friendships, and personal growth/learning",
        color: "hsl(210,75%,50%)",
        type: "text",
      },
      {
        id: "how-feel",
        label: "Take a moment to imagine this. how would you feel?",
        color: "hsl(175,60%,40%)",
        type: "text",
      },
      {
        id: "10-years",
        label: "i) 10 years from now",
        subtitle: "What do you want to be doing (work and personal life):",
        color: "hsl(350,70%,55%)",
        type: "text",
      },
      {
        id: "5-years",
        label: "ii) 5 years from now",
        color: "hsl(30,90%,55%)",
        type: "text",
      },
      {
        id: "2-years",
        label: "iii) 2 years from now",
        color: "hsl(265,55%,45%)",
        type: "text",
      },
      {
        id: "1-year",
        label: "iv) 1 year from now",
        color: "hsl(210,75%,50%)",
        type: "text",
      },
      {
        id: "6-months",
        label: "v) 6 months from now",
        color: "hsl(175,60%,40%)",
        type: "text",
      },
      {
        id: "3-months",
        label: "vi) 3 months from now",
        color: "hsl(350,70%,55%)",
        type: "text",
      },
    ],
  },

  // ── Communicate ──
  "talk-to-yourself": {
    id: "talk-to-yourself",
    title: "Talk to Yourself!",
    description:
      "Do you ever find yourself talking to yourself? Well, here's a secret – it's actually a great way to improve your speaking skills alone and improve your English skills! Creating a monologue is a fun and engaging exercise that allows you to express yourself freely and practice speaking without any interruptions or distractions.\n\nTo create a monologue, simply choose a topic that interests you or something that you're passionate about. It could be anything from your favorite hobby, a recent trip you took, or even a movie you watched. Once you have your topic, start talking about it out loud as if you're having a conversation with someone. Pretend that you're explaining it to a friend or teaching someone about it.",
    fields: [
      {
        id: "topic",
        label: "Mention your topic here",
        color: "hsl(210,75%,50%)",
        type: "text",
      },
      {
        id: "writing",
        label: "Start Writing",
        color: "hsl(175,60%,40%)",
        type: "text",
      },
    ],
  },

  // ── Finance ──
  "financial-goals-chart": {
    id: "financial-goals-chart",
    title: "Financial Goals Chart",
    description:
      "This exercise helps to map out your monetary aspirations. It outlines short and long-term objectives, such as savings, investments, and debt management. This chart helps you track progress, set priorities, and stay focused on achieving financial milestones for greater stability and success.",
    fields: [
      { id: "budgeting-status", label: "Current status", subtitle: "", color: "hsl(0,80%,55%)" },
      { id: "budgeting-goal", label: "Goal", color: "hsl(0,80%,55%)" },
      { id: "budgeting-date", label: "Date to achieve goal", color: "hsl(0,80%,55%)" },
      { id: "budgeting-steps", label: "Steps needed to achieve goal", color: "hsl(0,80%,55%)" },
      { id: "budgeting-accountability", label: "Accountability: Who will help me reach the goal?", color: "hsl(0,80%,55%)" },

      { id: "banking-status", label: "Current status", color: "hsl(210,75%,50%)" },
      { id: "banking-goal", label: "Goal", color: "hsl(210,75%,50%)" },
      { id: "banking-date", label: "Date to achieve goal", color: "hsl(210,75%,50%)" },
      { id: "banking-steps", label: "Steps needed to achieve goal", color: "hsl(210,75%,50%)" },
      { id: "banking-accountability", label: "Accountability: Who will help me reach the goal?", color: "hsl(210,75%,50%)" },

      { id: "credit-status", label: "Current status", color: "hsl(175,60%,40%)" },
      { id: "credit-goal", label: "Goal", color: "hsl(175,60%,40%)" },
      { id: "credit-date", label: "Date to achieve goal", color: "hsl(175,60%,40%)" },
      { id: "credit-steps", label: "Steps needed to achieve goal", color: "hsl(175,60%,40%)" },
      { id: "credit-accountability", label: "Accountability: Who will help me reach the goal?", color: "hsl(175,60%,40%)" },

      { id: "debt-status", label: "Current status", color: "hsl(350,70%,55%)" },
      { id: "debt-goal", label: "Goal", color: "hsl(350,70%,55%)" },
      { id: "debt-date", label: "Date to achieve goal", color: "hsl(350,70%,55%)" },
      { id: "debt-steps", label: "Steps needed to achieve goal", color: "hsl(350,70%,55%)" },
      { id: "debt-accountability", label: "Accountability: Who will help me reach the goal?", color: "hsl(350,70%,55%)" },

      { id: "saving-status", label: "Current status", color: "hsl(30,90%,55%)" },
      { id: "saving-goal", label: "Goal", color: "hsl(30,90%,55%)" },
      { id: "saving-date", label: "Date to achieve goal", color: "hsl(30,90%,55%)" },
      { id: "saving-steps", label: "Steps needed to achieve goal", color: "hsl(30,90%,55%)" },
      { id: "saving-accountability", label: "Accountability: Who will help me reach the goal?", color: "hsl(30,90%,55%)" },

      { id: "tax-status", label: "Current status", color: "hsl(265,55%,45%)" },
      { id: "tax-goal", label: "Goal", color: "hsl(265,55%,45%)" },
      { id: "tax-date", label: "Date to achieve goal", color: "hsl(265,55%,45%)" },
      { id: "tax-steps", label: "Steps needed to achieve goal", color: "hsl(265,55%,45%)" },
      { id: "tax-accountability", label: "Accountability: Who will help me reach the goal?", color: "hsl(265,55%,45%)" },
    ],
  },

// ── Mindset ──
  "three-month-vision": {
    id: "three-month-vision",
    title: "3 Month Vision Worksheet",
    description: "Allow yourself 20 minutes of quiet time to consider these questions to create and shape your vision for the next 3 months. Write your answers in the PRESENT tense. And be as SPECIFIC as you can as this clarity makes your vision easier to achieve.",
    fields: [
      {
        id: "vision-intro",
        label: "How do I want my life to be?",
        subtitle: "Write below how you'd like each area to be in 3 months' time:",
        type: "text",
        color: "#dc2626",
      },
      {
        id: "personal-life",
        label: "Personal life, Home and Family",
        type: "text",
        color: "#1e3a5f",
      },
      {
        id: "career-work",
        label: "Career, Work and Business Life",
        type: "text",
        color: "#1e3a5f",
      },
      {
        id: "health-wellbeing",
        label: "Health and Well-being",
        type: "text",
        color: "#1e3a5f",
      },
      {
        id: "finances",
        label: "Finances",
        type: "text",
        color: "#1e3a5f",
      },
      {
        id: "community-friendships",
        label: "Community and Friendships",
        type: "text",
        color: "#1e3a5f",
      },
      {
        id: "spiritual-learning",
        label: "Spiritual and Learning",
        type: "text",
        color: "#1e3a5f",
      },
      {
        id: "anything-else",
        label: "Write anything else, that you perhaps haven't mentioned yet, here:",
        type: "text",
        color: "#dc2626",
      },
      {
        id: "how-would-it-feel",
        label: "Take a moment to review your vision above and imagine it. How would this feel?",
        type: "text",
        color: "#1e3a5f",
      },
      {
        id: "obstacles",
        label: "What obstacles do you anticipate? What do you need to BE to achieve this? I need to be someone who is:",
        type: "text",
        color: "#1e3a5f",
      },
      {
        id: "one-important-change",
        label: "If there was just ONE important CHANGE you could make over the next 3 months, what would it be?",
        type: "text",
        color: "#1e3a5f",
      },
      {
        id: "theme",
        label: "My THEME for the next 3 months is:",
        type: "text",
        color: "#dc2626",
      },
    ],
  },

// Special exercise IDs that use dedicated components
export const specialExercises: Record<string, "quiz" | "checkin" | "planner" | "procrastinating" | "get-motivated"> = {
  "Self-Care Quiz": "quiz",
  "Self-care List": "checkin",
  "Success Planner": "planner",
  "Eliminate Delaying": "procrastinating",
  "Get Motivated!": "get-motivated",
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
  "Financial Goals Chart": "financial-goals-chart",
  "Unstick Yourself!": "unstick-yourself",
  "Love Your Weaknesses": "love-your-weaknesses",
  "Build a Bridge": "build-a-bridge",
  "Mentor Magic!": "mentor-magic",
  "Let Go": "let-go",
  "Too Comfortable?": "too-comfortable",
  "Daily Success Habits": "daily-success-habits",
  "Positive Visualisation": "positive-visualisation",
  "Get Perspective": "get-perspective",
  "Talk to Yourself!": "talk-to-yourself",
  "3 Month Vision": "three-month-vision",
};
