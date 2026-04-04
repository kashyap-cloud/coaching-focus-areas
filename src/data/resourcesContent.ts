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
}

export interface AreaResources {
  tips: Tip[];
  quotes: QuoteItem[];
  ebooks: Ebook[];
}

export const resourcesContent: Record<string, AreaResources> = {
  career: {
    tips: [
      {
        title: "Set goals regularly",
        description: "Consistently establish manageable, short-range objectives to stay focused.",
        icon: "Target",
      },
      {
        title: "Challenge yourself",
        description: "Push yourself by creating short-term goals, engaging in research, & acquiring new skills.",
        icon: "Flame",
      },
      {
        title: "Read often",
        description: "Enhance yourself by being updated about competitors, emerging products, services, & more.",
        icon: "BookOpen",
      },
      {
        title: "Attend training programs",
        description: "Participate in workshops, sessions, & events within your industry to learn, evolve, & connect with new resources.",
        icon: "GraduationCap",
      },
      {
        title: "Get organized",
        description: "Maintain a record of your goals, & tasks by organizing your work and establishing a consistent schedule.",
        icon: "LayoutGrid",
      },
    ],
    quotes: [
      {
        text: "Opportunities don't happen, you create them.",
        author: "Chris Grosser",
        borderColor: "hsl(210,75%,50%)",
        bgColor: "hsl(210,75%,97%)",
      },
      {
        text: "Don't limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe you can achieve.",
        author: "Mary Kay Ash",
        borderColor: "hsl(330,65%,55%)",
        bgColor: "hsl(330,65%,97%)",
      },
      {
        text: "A man can succeed at almost anything for which he has unlimited enthusiasm.",
        author: "Charles Schwab",
        borderColor: "hsl(150,60%,40%)",
        bgColor: "hsl(150,60%,97%)",
      },
      {
        text: "No one can discover you until you do. Exploit your talents, skills and strengths and make the world sit up and take notice.",
        author: "Rob Liano",
        borderColor: "hsl(265,55%,50%)",
        bgColor: "hsl(265,55%,97%)",
      },
      {
        text: "Start by doing what is necessary, then what is possible, and suddenly you are doing the impossible.",
        author: "Francis of Assisi",
        borderColor: "hsl(185,60%,45%)",
        bgColor: "hsl(185,60%,97%)",
      },
    ],
    ebooks: [
      { title: "Career Coaching", author: "Jody Michael Associates" },
      { title: "80/20 Rule Personal Excellence", author: "Celestine Chua" },
      { title: "101 Ways To Be A Better Person", author: "Celestine Chua" },
      { title: "Worklife Reset", author: "Cindy Atlee & Dana Theus" },
      { title: "Personal Brand Coaching Insights", author: "Dana Theus" },
    ],
  },
};
