export interface Tip {
  title: string;
  description: string;
  icon: string;
}

export interface QuoteItem {
  text: string;
  author: string;
  borderColor: string;
  bgColor: string;
}

export interface Ebook {
  title: string;
  author: string;
  url?: string;
}

export interface AreaResources {
  tips: Tip[];
  quotes: QuoteItem[];
  ebooks: Ebook[];
}

export const resourcesContent: Record<string, AreaResources> = {
  career: {
    tips: [
      { title: "Set goals regularly", description: "Consistently establish manageable, short-range objectives to stay focused.", icon: "Target" },
      { title: "Challenge yourself", description: "Push yourself by creating short-term goals, engaging in research, & acquiring new skills.", icon: "Flame" },
      { title: "Read often", description: "Enhance yourself by being updated about competitors, emerging products, services, & more.", icon: "BookOpen" },
      { title: "Attend training programs", description: "Participate in workshops, sessions, & events within your industry to learn, evolve, & connect with new resources.", icon: "GraduationCap" },
      { title: "Get organized", description: "Maintain a record of your goals & tasks by organizing your work and establishing a consistent schedule.", icon: "LayoutGrid" },
    ],
    quotes: [
      { text: "Opportunities don't happen, you create them.", author: "Chris Grosser", borderColor: "hsl(210,75%,50%)", bgColor: "hsl(210,75%,97%)" },
      { text: "Don't limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe you can achieve.", author: "Mary Kay Ash", borderColor: "hsl(330,65%,55%)", bgColor: "hsl(330,65%,97%)" },
      { text: "A man can succeed at almost anything for which he has unlimited enthusiasm.", author: "Charles Schwab", borderColor: "hsl(150,60%,40%)", bgColor: "hsl(150,60%,97%)" },
      { text: "No one can discover you until you do. Exploit your talents, skills and strengths and make the world sit up and take notice.", author: "Rob Liano", borderColor: "hsl(265,55%,50%)", bgColor: "hsl(265,55%,97%)" },
      { text: "Start by doing what is necessary, then what is possible, and suddenly you are doing the impossible.", author: "Francis of Assisi", borderColor: "hsl(185,60%,45%)", bgColor: "hsl(185,60%,97%)" },
    ],
    ebooks: [
      { title: "Career Coaching", author: "Jody Michael Associates" },
      { title: "80/20 Rule Personal Excellence", author: "Celestine Chua" },
      { title: "101 Ways To Be A Better Person", author: "Celestine Chua" },
      { title: "Worklife Reset", author: "Cindy Atlee & Dana Theus" },
      { title: "Personal Brand Coaching Insights", author: "Dana Theus" },
    ],
  },

  executive: {
    tips: [
      { title: "Set Clear Goals", description: "Define specific, measurable objectives. What skills or behaviors do you want to develop or improve?", icon: "Target" },
      { title: "Establish Trust", description: "Build a strong relationship with your coach. A safe and supportive environment is essential for growth.", icon: "Handshake" },
      { title: "Communication Skills", description: "Communication is vital for leadership, whether it's public speaking, active listening, or conveying ideas clearly.", icon: "MessageSquare" },
      { title: "Emotional Intelligence", description: "Develop emotional intelligence by understanding and managing emotions, both yours and those of others.", icon: "Heart" },
      { title: "Actionable Steps", description: "Break down larger goals into smaller, manageable tasks to make progress more tangible.", icon: "ListChecks" },
    ],
    quotes: [
      { text: "When you are in any contest, you should work as if there were – to the very last minute – a chance to lose it. This is battle, this is politics, this is anything.", author: "Dwight D. Eisenhower", borderColor: "hsl(210,75%,50%)", bgColor: "hsl(210,75%,97%)" },
      { text: "I absolutely believe that people, unless coached, never reach their maximum capabilities.", author: "Bob Nardelli", borderColor: "hsl(330,65%,55%)", bgColor: "hsl(330,65%,97%)" },
      { text: "An organization's ability to learn, and translate that learning into action rapidly, is the ultimate competitive advantage.", author: "Jack Welch", borderColor: "hsl(150,60%,40%)", bgColor: "hsl(150,60%,97%)" },
      { text: "Your mindset matters. It affects everything – from the business and investment decisions you make, to the way you raise your children, to your stress levels and overall well-being.", author: "Peter Diamandis", borderColor: "hsl(265,55%,50%)", bgColor: "hsl(265,55%,97%)" },
      { text: "A man who wants to lead the orchestra must turn his back on the crowd.", author: "Max Lucado", borderColor: "hsl(185,60%,45%)", bgColor: "hsl(185,60%,97%)" },
    ],
    ebooks: [
      { title: "The Effective Executive", author: "Peter E Drucker & Joseph A. Maciariello" },
      { title: "The Ideal Problem Solver", author: "John D. Bransford & Barry S. Stein" },
      { title: "The Only Leadership Book You'll Ever Need", author: "Peter Barron Stark & Jane Flaherty" },
      { title: "The Seven Habits of Highly Effective People", author: "Stephen R. Covey" },
      { title: "Time Management", author: "Brian Tracy" },
    ],
  },

  wellness: {
    tips: [
      { title: "Limit Screen Time", description: "Take breaks from screens to reduce eye strain & mental fatigue. Set boundaries for phone or computer usage.", icon: "MonitorOff" },
      { title: "Practice Gratitude", description: "Take a moment each day to reflect on things you're grateful for. It can shift your perspective & improve mood.", icon: "Sparkles" },
      { title: "Regular Exercise", description: "Find physical activities you enjoy and aim for at least 30 minutes most days. It could be walking, yoga, or dancing.", icon: "Dumbbell" },
      { title: "Social Connections", description: "Nurture relationships with friends & family. Spending time with loved ones can boost your mood and well-being.", icon: "Users" },
      { title: "Prioritize Sleep", description: "Aim for 7-9 hours of quality sleep each night. Establish a bedtime routine & create a sleep-conducive environment.", icon: "Moon" },
    ],
    quotes: [
      { text: "The body is like a piano, and happiness is like music. It is needful to have the instrument in good order.", author: "Henry Ward Beecher", borderColor: "hsl(150,60%,40%)", bgColor: "hsl(150,60%,97%)" },
      { text: "Sufficient sleep, exercise, healthy food, friendship, and peace of mind are necessities, not luxuries.", author: "Mark Halperin", borderColor: "hsl(210,75%,50%)", bgColor: "hsl(210,75%,97%)" },
      { text: "It's up to you today to start making healthy choices. Not choices that are just healthy for your body, but healthy for your mind.", author: "Steve Maraboli", borderColor: "hsl(330,65%,55%)", bgColor: "hsl(330,65%,97%)" },
      { text: "He who has health, has hope; and he who has hope, has everything.", author: "Arabian Proverb", borderColor: "hsl(265,55%,50%)", bgColor: "hsl(265,55%,97%)" },
      { text: "So many people spend their health gaining wealth, and then have to spend their wealth to regain their health.", author: "A.J. Reb Materi", borderColor: "hsl(185,60%,45%)", bgColor: "hsl(185,60%,97%)" },
    ],
    ebooks: [
      { title: "How to Sleep Like a Baby", author: "Ben Wiseman" },
      { title: "Seven Steps to a Healthy, Fit, Age Resistant Body", author: "Dr. James Meschino" },
      { title: "A New Therapy for Health and Energy", author: "Richard Clark" },
      { title: "Nudge", author: "Richard H Thaler & Cass R Sunstein" },
      { title: "The Foundation of Good Health", author: "Lois Francis" },
    ],
  },

  leadership: {
    tips: [
      { title: "Empower Your Team", description: "Encourage autonomy, delegate effectively, and empower your team members to make decisions and take ownership.", icon: "Users" },
      { title: "Build Trust", description: "Establish trust through honesty, reliability, and consistency. Trust is the foundation of strong leadership.", icon: "Shield" },
      { title: "Communication Skills", description: "Develop strong communication skills to convey ideas clearly, listen actively, and articulate a vision.", icon: "MessageSquare" },
      { title: "Lead by Example", description: "Demonstrate the behavior and work ethic you expect from others. Actions speak louder than words.", icon: "Star" },
      { title: "Decision Making", description: "Be decisive and confident in your decisions, but also be willing to course-correct when needed.", icon: "Scale" },
    ],
    quotes: [
      { text: "A leader is one who sees more than others see, who sees farther than others see and who sees before others see.", author: "Leroy Eimes", borderColor: "hsl(210,75%,50%)", bgColor: "hsl(210,75%,97%)" },
      { text: "Before you are a leader, success is all about growing yourself. When you become a leader, success is all about growing others.", author: "Jack Welch", borderColor: "hsl(330,65%,55%)", bgColor: "hsl(330,65%,97%)" },
      { text: "The task of leadership is not to put greatness into humanity, but to elicit it, for the greatness is already there.", author: "John Buchan", borderColor: "hsl(150,60%,40%)", bgColor: "hsl(150,60%,97%)" },
      { text: "The challenge of leadership is to be strong, but not rude; be kind, but not weak; be bold, but not bully; be thoughtful, but not lazy; be humble, but not timid; be proud, but not arrogant; have humor, but without folly.", author: "Jim Rohn", borderColor: "hsl(265,55%,50%)", bgColor: "hsl(265,55%,97%)" },
      { text: "Nearly all men can stand adversity, but if you want to test a man's character, give him power.", author: "Abraham Lincoln", borderColor: "hsl(185,60%,45%)", bgColor: "hsl(185,60%,97%)" },
    ],
    ebooks: [
      { title: "A Shift In Leadership", author: "John Eckhardt" },
      { title: "30 Secrets To The Top", author: "Paul Enenche" },
      { title: "Leadership Training Manual", author: "International Labour Office" },
      { title: "Leading From Within", author: "David R. Kolzow" },
      { title: "7 Crucial Skills of Leadership", author: "Dennis Haley" },
    ],
  },

  finance: {
    tips: [
      { title: "Track Your Spending", description: "Keep an eye on where your money goes to identify areas for savings.", icon: "Search" },
      { title: "Create a Budget", description: "Set limits for each category (e.g., groceries, entertainment) and stick to them.", icon: "Calculator" },
      { title: "Build an Emergency Fund", description: "Aim to save a small portion of your income each month for unexpected expenses.", icon: "PiggyBank" },
      { title: "Prioritize Debt Repayment", description: "Focus on paying off high-interest debts first to reduce financial pressure.", icon: "CreditCard" },
      { title: "Set Financial Goals", description: "Break down big financial goals (e.g., saving for a vacation or retirement) into achievable steps.", icon: "TrendingUp" },
    ],
    quotes: [
      { text: "Do not focus on money, instead focus on a problem that needs to be solved for the world. Money will follow you as a bi-product.", author: "Manoj Arora", borderColor: "hsl(150,60%,40%)", bgColor: "hsl(150,60%,97%)" },
      { text: "You must gain control over your money or the lack of it will forever control you.", author: "Dave Ramsey", borderColor: "hsl(210,75%,50%)", bgColor: "hsl(210,75%,97%)" },
      { text: "You can only become truly accomplished at something you love. Don't make money your goal. Instead, pursue the things you love doing, and then do them so well that people can't take their eyes off you.", author: "Maya Angelou", borderColor: "hsl(330,65%,55%)", bgColor: "hsl(330,65%,97%)" },
      { text: "When you understand that your self-worth is not determined by your net-worth, then you'll have financial freedom.", author: "Suze Orman", borderColor: "hsl(265,55%,50%)", bgColor: "hsl(265,55%,97%)" },
      { text: "Every time you borrow money, you're robbing your future self.", author: "Nathan W. Morris", borderColor: "hsl(185,60%,45%)", bgColor: "hsl(185,60%,97%)" },
    ],
    ebooks: [
      { title: "Building Wealth for Building The Kingdom", author: "Devin D. Thorpe" },
      { title: "925 Ideas to Help You Save Money", author: "Devin D. Thorpe" },
      { title: "Noble Use of Money", author: "Dada Bhagwan" },
      { title: "Essential Finance", author: "Nigel Gibson" },
      { title: "The Art of Money Getting", author: "P.T. Barnum" },
    ],
  },

  performance: {
    tips: [
      { title: "Set Clear Goals", description: "Define specific, measurable, achievable, relevant, & time-bound goals. These serve as a progress roadmap.", icon: "Target" },
      { title: "Self-Assessment", description: "Evaluate strengths, weaknesses, skills, & improvements. Reflect on what worked well & what needs refinement.", icon: "ClipboardCheck" },
      { title: "Seek Feedback", description: "Actively seek constructive feedback from peers, mentors, or coaches. Criticism helps in identifying blind spots.", icon: "MessageCircle" },
      { title: "Create Action Plans", description: "Break down larger goals into smaller, manageable tasks. Create step-by-step action plans to achieve these objectives.", icon: "ListChecks" },
      { title: "Time Management", description: "Prioritize tasks effectively, manage time efficiently, and avoid procrastination.", icon: "Clock" },
    ],
    quotes: [
      { text: "Learn from past experiences but accept them all as perfect while staying in the present. Let go of everything that doesn't serve you.", author: "Mike Basevic", borderColor: "hsl(210,75%,50%)", bgColor: "hsl(210,75%,97%)" },
      { text: "As with any new skill, attitude, style, or belief, adopting a coaching ethos requires commitment, practice, and some time before it flows naturally and its effectiveness is optimized.", author: "John Whitmore", borderColor: "hsl(330,65%,55%)", bgColor: "hsl(330,65%,97%)" },
      { text: "Failures are expected by losers, ignored by winners.", author: "Joe Gibbs", borderColor: "hsl(150,60%,40%)", bgColor: "hsl(150,60%,97%)" },
      { text: "To get the best out of people, we have to believe the best is in there – but how do we know it is, how much is there, and how do we get it out?", author: "John Whitmore", borderColor: "hsl(265,55%,50%)", bgColor: "hsl(265,55%,97%)" },
      { text: "The key is not the will to win. Everybody has that. It is the will to prepare to win that is important.", author: "Bobby Knight", borderColor: "hsl(185,60%,45%)", bgColor: "hsl(185,60%,97%)" },
    ],
    ebooks: [
      { title: "The Rules of Work", author: "Richard Templar" },
      { title: "How Successful People Think", author: "John C. Maxwell" },
      { title: "Getting Things Done", author: "David Allen" },
      { title: "Give and Take", author: "Adam Grant" },
      { title: "13 Things Mentally Strong People Don't Do", author: "Amy Morin" },
    ],
  },

  mindset: {
    tips: [
      { title: "Embrace Curiosity", description: "Ask questions, explore new ideas, & challenge your own beliefs. Curiosity keeps you engaged & open to new experiences.", icon: "Search" },
      { title: "Practice Mindfulness", description: "Cultivate present-moment awareness through practices like meditation or simply paying attention to your thoughts and feelings without judgment.", icon: "Brain" },
      { title: "Positive Self-Talk", description: "Replace self-limiting beliefs with empowering and positive affirmations. How you speak to yourself greatly impacts your mindset.", icon: "MessageSquare" },
      { title: "Cultivate Resilience", description: "Resilience helps you navigate through difficult times and setbacks with a positive mindset.", icon: "Shield" },
      { title: "Embrace Failure and Learning", description: "Understand that failures are stepping stones to success. Each setback teaches valuable lessons and brings you closer to your goals.", icon: "TrendingUp" },
    ],
    quotes: [
      { text: "The mind is just like a muscle – the more you exercise it, the stronger it gets and the more it can expand.", author: "Idowu Koyenikan", borderColor: "hsl(210,75%,50%)", bgColor: "hsl(210,75%,97%)" },
      { text: "It's a funny thing about life, once you begin to take note of the things you are grateful for, you begin to lose sight of the things that you lack.", author: "Germany Kent", borderColor: "hsl(330,65%,55%)", bgColor: "hsl(330,65%,97%)" },
      { text: "Once your mindset changes, everything on the outside will change along with it.", author: "Steve Maraboli", borderColor: "hsl(150,60%,40%)", bgColor: "hsl(150,60%,97%)" },
      { text: "There is nothing either 'good or bad' but 'thinking' makes it so. It is the perception that makes things what they are.", author: "Erik Pevernagie", borderColor: "hsl(265,55%,50%)", bgColor: "hsl(265,55%,97%)" },
      { text: "Open the window of your mind. Allow the fresh air, new lights and new truths to enter.", author: "Amit Ray", borderColor: "hsl(185,60%,45%)", bgColor: "hsl(185,60%,97%)" },
    ],
    ebooks: [
      { title: "Master Your Mind", author: "Anonymous" },
      { title: "How Successful People Think", author: "John C. Maxwell" },
      { title: "Mindset: The New Psychology of Success", author: "Carol S. Dweck" },
      { title: "The Millionaire Mindset", author: "Gerry Robert" },
      { title: "Think and Grow Rich", author: "Napoleon Hill" },
    ],
  },

  spiritual: {
    tips: [
      { title: "Define Your Intentions", description: "Whether it's finding inner peace, understanding your purpose, or seeking enlightenment, defining your intentions can guide your path.", icon: "Compass" },
      { title: "Regular Practice", description: "Consistency is key. Engage in regular spiritual practices, be it meditation, prayer, yoga, journaling, or any other method that speaks to you.", icon: "RefreshCw" },
      { title: "Stay Present", description: "Focus on the present moment. Mindfulness helps you stay grounded and connected to your spiritual self.", icon: "Eye" },
      { title: "Connect with Nature", description: "It can be a powerful way to connect with your inner self and the larger universe. Nature has a way of grounding and revitalizing our spirits.", icon: "TreePine" },
      { title: "Trust Your Intuition", description: "Listen to your inner voice. Trust your instincts and intuition as they often guide you toward your true path.", icon: "Sparkles" },
    ],
    quotes: [
      { text: "You can't have a physical transformation until you have a spiritual transformation.", author: "Cory Booker", borderColor: "hsl(265,55%,50%)", bgColor: "hsl(265,55%,97%)" },
      { text: "Nothing binds you except your thoughts; nothing limits you except your fear; and nothing controls you except your beliefs.", author: "Marianne Williamson", borderColor: "hsl(210,75%,50%)", bgColor: "hsl(210,75%,97%)" },
      { text: "When you connect to the silence within you, that is when you can make sense of the disturbance going on around you.", author: "Stephen Richards", borderColor: "hsl(330,65%,55%)", bgColor: "hsl(330,65%,97%)" },
      { text: "Be tolerant of those who are lost on their path. Ignorance, conceit, anger, jealousy, and greed stem from a lost soul. Pray that they will find guidance.", author: "Elder Wisdom", borderColor: "hsl(150,60%,40%)", bgColor: "hsl(150,60%,97%)" },
      { text: "If you lose money you lose much, if you lose friends you lose more, if you lose faith you lose all.", author: "Eleanor Roosevelt", borderColor: "hsl(185,60%,45%)", bgColor: "hsl(185,60%,97%)" },
    ],
    ebooks: [
      { title: "The Hidden Meaning of Truth and Untruth", author: "Dr. Niruben Amin" },
      { title: "Death: Before, During, and After…", author: "Dada Bhagwan" },
      { title: "Whatever Has Happened Is Justice", author: "Dr. Niruben Amin" },
      { title: "Self-Realization", author: "Pujyashree Deepakbhai Desai" },
      { title: "Who Am I?", author: "Dr. Niruben Amin" },
    ],
  },

  "mental-health": {
    tips: [
      { title: "Set Realistic Goals", description: "Help them set achievable and realistic short-term goals. Celebrate small victories to boost their confidence and motivation.", icon: "Target" },
      { title: "Normalize Seeking Help", description: "Encourage them to understand that seeking help for mental health is as important as seeking help for physical health issues.", icon: "HeartHandshake" },
      { title: "Challenge Negative Thoughts", description: "Teach them to identify and challenge negative thought patterns. Encourage them to replace negative self-talk with positive affirmations.", icon: "Brain" },
      { title: "Encourage Patience", description: "Remind them that progress takes time. Improvement might not happen overnight, but consistent effort and patience are key.", icon: "Clock" },
      { title: "Healthy Boundaries", description: "Teach them the importance of setting boundaries in relationships to protect their mental health and well-being.", icon: "Shield" },
    ],
    quotes: [
      { text: "The advice I'd give to somebody that's silently struggling is, you don't have to live that way. You don't have to struggle in silence. You can be un-silent.", author: "Demi Lovato", borderColor: "hsl(210,75%,50%)", bgColor: "hsl(210,75%,97%)" },
      { text: "You are not alone. You are seen. I am with you. You are not alone.", author: "Shonda Rhimes", borderColor: "hsl(330,65%,55%)", bgColor: "hsl(330,65%,97%)" },
      { text: "Sometimes the people around you won't understand your journey. They don't need to, it's not for them.", author: "Joubert Botha", borderColor: "hsl(150,60%,40%)", bgColor: "hsl(150,60%,97%)" },
      { text: "Crazy isn't being broken or swallowing a dark secret. It's you or me amplified.", author: "Susanna Kaysen", borderColor: "hsl(265,55%,50%)", bgColor: "hsl(265,55%,97%)" },
      { text: "Don't let your mind bully your body into believing it must carry the burden of its worries.", author: "Astrid Alauda", borderColor: "hsl(185,60%,45%)", bgColor: "hsl(185,60%,97%)" },
    ],
    ebooks: [
      { title: "The Seven Habits Of Highly Effective People", author: "Stephen R. Covey" },
      { title: "I Am Not Sick. I Don't Need Help!", author: "Xavier Amador" },
      { title: "I'm OK-You're OK", author: "Thomas A. Harris MD" },
      { title: "The Little Book of Mental Health", author: "Anonymous" },
      { title: "Master Your Mind", author: "Anonymous" },
    ],
  },

  transform: {
    tips: [
      { title: "Clarify Intentions and Goals", description: "Encourage seekers to reflect deeply on their desires, values, and aspirations.", icon: "Compass" },
      { title: "Challenge Limiting Beliefs", description: "Help seekers identify and challenge self-limiting beliefs that hinder growth.", icon: "ShieldOff" },
      { title: "Develop Action Plans", description: "Break down larger goals into smaller, manageable steps. Encourage seeking support from friends, family, or mentors for accountability.", icon: "ListChecks" },
      { title: "Reflect and Adjust", description: "Encourage periodic self-assessment to track progress and make necessary adjustments. Be open to modifying plans as needed.", icon: "RefreshCw" },
      { title: "Celebrate Progress", description: "Celebrate small wins along the way to maintain motivation. Encourage a gratitude journal to appreciate progress and accomplishments.", icon: "Trophy" },
    ],
    quotes: [
      { text: "You are only as strong as your readiness to surrender. In the end perhaps, being human is much more important than being fully in the know.", author: "Pico Iyer", borderColor: "hsl(210,75%,50%)", bgColor: "hsl(210,75%,97%)" },
      { text: "Is it not curious, then, that the most significant intellectual skill available (questioning and inquiry) to human beings is not taught in schools?", author: "Neil Postman", borderColor: "hsl(330,65%,55%)", bgColor: "hsl(330,65%,97%)" },
      { text: "Forming questions helps us to organise our thinking around what we don't know.", author: "Steve Quatrano", borderColor: "hsl(150,60%,40%)", bgColor: "hsl(150,60%,97%)" },
      { text: "Once you step across that self imposed or others imposed line that says 'you can't' – you start the journey towards finding you.", author: "Craig W. Hedge", borderColor: "hsl(265,55%,50%)", bgColor: "hsl(265,55%,97%)" },
      { text: "If your conscious mind puts a big question out there, chances are good that your unconscious mind will go to work on it.", author: "Chen-Bo Chong", borderColor: "hsl(185,60%,45%)", bgColor: "hsl(185,60%,97%)" },
    ],
    ebooks: [
      { title: "Great Habits to Transform Your Life", author: "Michael Chapman" },
      { title: "The Great Transformation", author: "Karl Polanyi" },
      { title: "The Five Major Pieces To The Life Puzzle", author: "E. James Rohn" },
      { title: "The 5 Second Rule", author: "Mel Robbins" },
      { title: "The Little Book of Conflict Transformation", author: "John Paul Lederach" },
    ],
  },

  communicate: {
    tips: [
      { title: "Active Listening", description: "Practice active listening by focusing on the speaker, maintaining eye contact, and using cues to show engagement.", icon: "Ear" },
      { title: "Body Language Awareness", description: "Mind your body language: Keep an open posture, use natural hand gestures, and be aware of facial expressions.", icon: "PersonStanding" },
      { title: "Practice Effective Feedback", description: "When giving feedback, be specific, constructive, and focused on behaviors rather than personal traits.", icon: "MessageCircle" },
      { title: "Celebrate Progress", description: "Celebrate small victories to stay motivated. Consider keeping a gratitude journal to acknowledge progress and achievements.", icon: "Trophy" },
      { title: "Reflect and Adjust", description: "Promote regular self-assessment to monitor progress and adjust plans as necessary. Stay open to modifications; adaptability fosters growth.", icon: "RefreshCw" },
    ],
    quotes: [
      { text: "Communication is a skill that you can learn. It's like riding a bicycle or typing. If you're willing to work at it, you can rapidly improve the quality of every part of your life.", author: "Brian Tracy", borderColor: "hsl(210,75%,50%)", bgColor: "hsl(210,75%,97%)" },
      { text: "The best speakers in the world are the best storytellers. They have a gift to not only tell a great story but also share a lot of the details that many others wouldn't.", author: "Larry Hagner", borderColor: "hsl(330,65%,55%)", bgColor: "hsl(330,65%,97%)" },
      { text: "No matter what job you have in life, your success will be determined 5% by your academic credentials, 15% by your professional experiences and 80% by your communication skills.", author: "Anonymous", borderColor: "hsl(150,60%,40%)", bgColor: "hsl(150,60%,97%)" },
      { text: "The single biggest problem in communication is the illusion that it has taken place.", author: "George Bernard Shaw", borderColor: "hsl(265,55%,50%)", bgColor: "hsl(265,55%,97%)" },
      { text: "Listen with curiosity. Speak with honesty. Act with integrity. The greatest problem with communication is we don't listen to understand. We listen to reply.", author: "Roy T. Bennett", borderColor: "hsl(185,60%,45%)", bgColor: "hsl(185,60%,97%)" },
    ],
    ebooks: [
      { title: "The Science of Effective Communication", author: "Ian Tuhovsky" },
      { title: "The Art of Communicating", author: "Thich Nhat Hanh" },
      { title: "21 Days of Effective Communication", author: "Ian Tuhovsky" },
      { title: "The Communication Book", author: "Mikael Krogerus & Roman Tschäppeler" },
      { title: "Improve your Communication Skills", author: "Alan Barker" },
    ],
  },

  organization: {
    tips: [
      { title: "Clarify Your Goals", description: "Define your goals, both short-term and long-term, and communicate them effectively to the coach.", icon: "Target" },
      { title: "Be Open and Honest", description: "Be transparent about your strengths, weaknesses, challenges, and aspirations.", icon: "Eye" },
      { title: "Embrace Feedback", description: "Constructive feedback is a cornerstone of coaching. Be open to receiving feedback, even if it's challenging.", icon: "MessageCircle" },
      { title: "Stay Committed", description: "Stay committed to the coaching process, even when progress seems slow. Consistency and perseverance are key to achieving results.", icon: "Flame" },
      { title: "Apply Learning", description: "Experiment with new approaches, behaviors, or strategies discussed during coaching to see what works best for you.", icon: "Lightbulb" },
    ],
    quotes: [
      { text: "When you are in any contest, you should work as if there were – to the very last minute – a chance to lose it. This is battle, this is politics, this is anything.", author: "Dwight D. Eisenhower", borderColor: "hsl(210,75%,50%)", bgColor: "hsl(210,75%,97%)" },
      { text: "Who, exactly, seeks out a coach? If you ask a coach the answer is usually the same: Winners who want even more out of life.", author: "Chicago Tribune", borderColor: "hsl(330,65%,55%)", bgColor: "hsl(330,65%,97%)" },
      { text: "Your mindset matters. It affects everything – from the business and investment decisions you make, to the way you raise your children, to your stress levels and overall well-being.", author: "Peter Diamandis", borderColor: "hsl(150,60%,40%)", bgColor: "hsl(150,60%,97%)" },
      { text: "There are three rules for being a good leader: 1. Don't say you are one; 2. Show that you are one; and 3. Lead by example.", author: "Georg W. F. Hegel", borderColor: "hsl(265,55%,50%)", bgColor: "hsl(265,55%,97%)" },
      { text: "To handle yourself, use your head; to handle others, use your heart.", author: "Eleanor Roosevelt", borderColor: "hsl(185,60%,45%)", bgColor: "hsl(185,60%,97%)" },
    ],
    ebooks: [
      { title: "Essentials Of Corporate Communication", author: "Cees B.M. van Riel & Charles J. Fombrun" },
      { title: "The Psychology Of Motivation To Living A Successful Life", author: "Richard Brown" },
      { title: "Time Management", author: "Brian Tracy" },
      { title: "Fostering Creativity & Innovation", author: "Dr. Rashid Alleem" },
      { title: "Concept of the Corporation", author: "Peter F. Drucker" },
    ],
  },

  creativity: {
    tips: [
      { title: "Encourage Exploration", description: "Try different mediums, techniques, or styles. Emphasize the value of experimentation in unlocking creativity.", icon: "Palette" },
      { title: "Cultivate Mindfulness", description: "Be present in the moment. This can help you tap into your inner thoughts & emotions, fostering deeper creativity and self-awareness.", icon: "Brain" },
      { title: "Inspire Diverse Perspectives", description: "Draw inspiration from various sources – art, nature, literature, music, personal experiences, etc.", icon: "Sparkles" },
      { title: "Celebrate Progress", description: "Acknowledge and celebrate each milestone, no matter how small. Recognizing achievements boosts confidence and motivates.", icon: "Trophy" },
      { title: "Embrace Failure", description: "See mistakes as learning opportunities rather than setbacks. It's through these experiences that you may find unexpected and innovative solutions.", icon: "Lightbulb" },
    ],
    quotes: [
      { text: "Creativity is seeing what others see and thinking what no one else ever thought.", author: "Albert Einstein", borderColor: "hsl(30,80%,50%)", bgColor: "hsl(30,80%,97%)" },
      { text: "A creative life is an amplified life. It's a bigger life, a happier life, an expanded life, and a hell of a lot more interesting life.", author: "Elizabeth Gilbert", borderColor: "hsl(330,65%,55%)", bgColor: "hsl(330,65%,97%)" },
      { text: "The worst enemy to creativity is self-doubt.", author: "Sylvia Plath", borderColor: "hsl(210,75%,50%)", bgColor: "hsl(210,75%,97%)" },
      { text: "There is no doubt that creativity is the most important human resource of all. Without creativity, there would be no progress, and we would be forever repeating the same patterns.", author: "Edward De Bono", borderColor: "hsl(150,60%,40%)", bgColor: "hsl(150,60%,97%)" },
      { text: "Deadlines and things make you creative.", author: "Jack White", borderColor: "hsl(265,55%,50%)", bgColor: "hsl(265,55%,97%)" },
    ],
    ebooks: [
      { title: "Scaling Creativity and Innovation", author: "Anonymous" },
      { title: "The Creative Act", author: "Rick Rubin" },
      { title: "The Power Of Creativity", author: "Bryan Collins" },
      { title: "The Ideal Problem Solver", author: "John D. Bransford & Barry S. Stein" },
    ],
  },

  employee: {
    tips: [
      { title: "Clarify Your Goals", description: "Whether it's improving skills, enhancing productivity, or resolving conflicts, having clear objectives will help guide the coaching process.", icon: "Target" },
      { title: "Be Open and Honest", description: "Establish a trusting relationship with your coach by being open and honest about your strengths, weaknesses, and challenges.", icon: "Eye" },
      { title: "Implement Learnings", description: "Apply the insights and strategies discussed during coaching sessions in your daily work.", icon: "Lightbulb" },
      { title: "Celebrate Progress", description: "Recognizing progress can boost motivation and reinforce positive behavior changes.", icon: "Trophy" },
      { title: "Stay Committed", description: "Stay dedicated to attending sessions, completing assignments, and actively working towards your goals even when faced with challenges.", icon: "Flame" },
    ],
    quotes: [
      { text: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon", borderColor: "hsl(210,75%,50%)", bgColor: "hsl(210,75%,97%)" },
      { text: "Don't always scrape and search for compliments. Criticism is what builds character and strength.", author: "Unknown", borderColor: "hsl(330,65%,55%)", bgColor: "hsl(330,65%,97%)" },
      { text: "Build your own dreams, or someone else will hire you to build theirs.", author: "Farrah Gray", borderColor: "hsl(150,60%,40%)", bgColor: "hsl(150,60%,97%)" },
      { text: "Hard work spotlights the character of people. Some turn up their sleeves. Some turn up their noses, and some don't turn up at all.", author: "Sam Ewing", borderColor: "hsl(265,55%,50%)", bgColor: "hsl(265,55%,97%)" },
      { text: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson", borderColor: "hsl(185,60%,45%)", bgColor: "hsl(185,60%,97%)" },
    ],
    ebooks: [
      { title: "The Rules of Work", author: "Richard Templar" },
      { title: "Getting Things Done", author: "David Allen" },
      { title: "The Seven Habits of Highly Effective People", author: "Stephen R. Covey" },
      { title: "How Successful People Think", author: "John C. Maxwell" },
      { title: "Give and Take", author: "Adam Grant" },
    ],
  },

  corporate: {
    tips: [
      { title: "Define Strategic Vision", description: "Align coaching goals with organizational strategy. Ensure leadership development ties into business objectives.", icon: "Building2" },
      { title: "Foster Team Culture", description: "Build a culture of accountability, transparency, and continuous improvement across all levels of the organization.", icon: "Users" },
      { title: "Measure ROI", description: "Track the return on investment of coaching initiatives through performance metrics, engagement surveys, and retention data.", icon: "BarChart3" },
      { title: "Encourage Cross-Functional Learning", description: "Promote collaboration across departments to break silos and foster innovation.", icon: "Network" },
      { title: "Lead Change Effectively", description: "Equip leaders with tools to manage organizational change, minimize resistance, and maintain team morale.", icon: "TrendingUp" },
    ],
    quotes: [
      { text: "The growth and development of people is the highest calling of leadership.", author: "Harvey S. Firestone", borderColor: "hsl(210,75%,50%)", bgColor: "hsl(210,75%,97%)" },
      { text: "Culture eats strategy for breakfast.", author: "Peter Drucker", borderColor: "hsl(330,65%,55%)", bgColor: "hsl(330,65%,97%)" },
      { text: "The secret of change is to focus all of your energy not on fighting the old, but on building the new.", author: "Socrates", borderColor: "hsl(150,60%,40%)", bgColor: "hsl(150,60%,97%)" },
      { text: "Coming together is a beginning, staying together is progress, and working together is success.", author: "Henry Ford", borderColor: "hsl(265,55%,50%)", bgColor: "hsl(265,55%,97%)" },
      { text: "Management is doing things right; leadership is doing the right things.", author: "Peter Drucker", borderColor: "hsl(185,60%,45%)", bgColor: "hsl(185,60%,97%)" },
    ],
    ebooks: [
      { title: "Essentials Of Corporate Communication", author: "Cees B.M. van Riel & Charles J. Fombrun" },
      { title: "Concept of the Corporation", author: "Peter F. Drucker" },
      { title: "The Effective Executive", author: "Peter E Drucker & Joseph A. Maciariello" },
      { title: "Leading From Within", author: "David R. Kolzow" },
      { title: "The Only Leadership Book You'll Ever Need", author: "Peter Barron Stark & Jane Flaherty" },
    ],
  },

  confidence: {
    tips: [
      { title: "Celebrate Small Wins", description: "Acknowledge every achievement, no matter how small. Each win reinforces your belief in your capabilities.", icon: "Trophy" },
      { title: "Practice Self-Compassion", description: "Be kind to yourself during setbacks. Treat yourself with the same empathy you'd offer a close friend.", icon: "Heart" },
      { title: "Step Outside Comfort Zones", description: "Growth happens when you challenge yourself. Take calculated risks to expand your boundaries.", icon: "Rocket" },
      { title: "Positive Affirmations", description: "Start your day with affirmations that reinforce your strengths, values, and potential.", icon: "Sparkles" },
      { title: "Visualize Success", description: "Mentally rehearse achieving your goals. Visualization builds neural pathways that support confident action.", icon: "Eye" },
    ],
    quotes: [
      { text: "Confidence comes not from always being right but from not fearing to be wrong.", author: "Peter T. McIntyre", borderColor: "hsl(210,75%,50%)", bgColor: "hsl(210,75%,97%)" },
      { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt", borderColor: "hsl(330,65%,55%)", bgColor: "hsl(330,65%,97%)" },
      { text: "You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face.", author: "Eleanor Roosevelt", borderColor: "hsl(150,60%,40%)", bgColor: "hsl(150,60%,97%)" },
      { text: "With realization of one's own potential and self-confidence in one's ability, one can build a better world.", author: "Dalai Lama", borderColor: "hsl(265,55%,50%)", bgColor: "hsl(265,55%,97%)" },
      { text: "The most beautiful thing you can wear is confidence.", author: "Blake Lively", borderColor: "hsl(185,60%,45%)", bgColor: "hsl(185,60%,97%)" },
    ],
    ebooks: [
      { title: "The Confidence Gap", author: "Russ Harris" },
      { title: "Master Your Mind", author: "Anonymous" },
      { title: "The Seven Habits of Highly Effective People", author: "Stephen R. Covey" },
      { title: "Think and Grow Rich", author: "Napoleon Hill" },
      { title: "How Successful People Think", author: "John C. Maxwell" },
    ],
  },
};
