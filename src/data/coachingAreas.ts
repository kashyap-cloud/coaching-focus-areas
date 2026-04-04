import careerImg from "@/assets/coaching/career.png";
import executiveImg from "@/assets/coaching/executive.png";
import wellnessImg from "@/assets/coaching/wellness.png";
import leadershipImg from "@/assets/coaching/leadership.png";
import financeImg from "@/assets/coaching/finance.png";
import performanceImg from "@/assets/coaching/performance.png";
import mindsetImg from "@/assets/coaching/mindset.png";
import spiritualImg from "@/assets/coaching/spiritual.png";
import mentalHealthImg from "@/assets/coaching/mental-health.png";
import transformImg from "@/assets/coaching/transform.png";
import communicateImg from "@/assets/coaching/communicate.png";
import organizationImg from "@/assets/coaching/organization.png";
import creativityImg from "@/assets/coaching/creativity.png";
import employeeImg from "@/assets/coaching/employee.png";
import corporateImg from "@/assets/coaching/corporate.png";
import confidenceImg from "@/assets/coaching/confidence.png";

export type ExerciseColor = "navy" | "red" | "blue" | "purple" | "orange" | "teal" | "yellow" | "salmon";

export interface Exercise {
  title: string;
  lucideIcon: string;
  color: ExerciseColor;
}

export interface LearnItem {
  title: string;
}

export interface CoachingArea {
  id: string;
  name: string;
  image: string;
  bgColor: string;
  exercises: Exercise[];
  learn: LearnItem[];
  resources: { type: "tips" | "quotes" | "ebooks"; title: string; subtitle: string }[];
}

export const exerciseColorMap: Record<ExerciseColor, string> = {
  navy: "bg-[hsl(220,55%,32%)]",
  red: "bg-[hsl(350,70%,55%)]",
  blue: "bg-[hsl(210,75%,50%)]",
  purple: "bg-[hsl(265,55%,45%)]",
  orange: "bg-[hsl(30,90%,55%)]",
  teal: "bg-[hsl(175,60%,40%)]",
  yellow: "bg-[hsl(45,90%,55%)]",
  salmon: "bg-[hsl(5,65%,65%)]",
};

export const coachingAreas: CoachingArea[] = [
  {
    id: "career",
    name: "Career",
    image: careerImg,
    bgColor: "bg-coaching-career",
    exercises: [
      { title: "Improvement Canvas", lucideIcon: "Presentation", color: "red" },
      { title: "SWOT Analysis", lucideIcon: "LayoutGrid", color: "blue" },
      { title: "Not To-Do List", lucideIcon: "ListChecks", color: "purple" },
      { title: "GROW", lucideIcon: "TrendingUp", color: "navy" },
    ],
    learn: [
      { title: "Key Principles" },
      { title: "Coaching Benefits" },
      { title: "Unexpected Advantages" },
      { title: "Hidden Capabilities" },
    ],
    resources: [
      { type: "tips", title: "Tips", subtitle: "Get control of your life" },
      { type: "quotes", title: "Quotes", subtitle: "One day at a time" },
      { type: "ebooks", title: "Ebooks", subtitle: "Books are a man's best friend" },
    ],
  },
  {
    id: "executive",
    name: "Executive",
    image: executiveImg,
    bgColor: "bg-coaching-executive",
    exercises: [
      { title: "GROW", lucideIcon: "TrendingUp", color: "navy" },
      { title: "Improvement Canvas", lucideIcon: "Presentation", color: "red" },
      { title: "SWOT Analysis", lucideIcon: "LayoutGrid", color: "teal" },
      { title: "Not To-Do List", lucideIcon: "ListChecks", color: "purple" },
    ],
    learn: [
      { title: "Key Principles" },
      { title: "Benefits" },
      { title: "Unexpected Advantages" },
      { title: "Hidden Capabilities" },
    ],
    resources: [
      { type: "tips", title: "Tips", subtitle: "Get control of your life" },
      { type: "quotes", title: "Quotes", subtitle: "One day at a time" },
      { type: "ebooks", title: "Ebooks", subtitle: "Books are a man's best friend" },
    ],
  },
  {
    id: "wellness",
    name: "Wellness",
    image: wellnessImg,
    bgColor: "bg-coaching-wellness",
    exercises: [
      { title: "Self-Care Quiz", lucideIcon: "ClipboardCheck", color: "blue" },
      { title: "Self-care List", lucideIcon: "CheckSquare", color: "blue" },
      { title: "Make Heart Sing", lucideIcon: "Heart", color: "red" },
      { title: "Too Comfortable?", lucideIcon: "Armchair", color: "blue" },
    ],
    learn: [
      { title: "Achieving Healthy Lifestyle" },
      { title: "Discovering Equilibrium" },
      { title: "Health Vs. Wellness" },
      { title: "Natural Health and Nutrition" },
    ],
    resources: [
      { type: "tips", title: "Tips", subtitle: "Get control of your life" },
      { type: "quotes", title: "Quotes", subtitle: "One day at a time" },
      { type: "ebooks", title: "Ebooks", subtitle: "Books are a man's best friend" },
    ],
  },
  {
    id: "leadership",
    name: "Leadership",
    image: leadershipImg,
    bgColor: "bg-coaching-leadership",
    exercises: [
      { title: "Detox Toxic Relationships", lucideIcon: "Plus", color: "navy" },
      { title: "Make Heart Sing", lucideIcon: "Heart", color: "red" },
      { title: "Identify Your Zappers", lucideIcon: "Zap", color: "yellow" },
      { title: "Putting Up With?", lucideIcon: "Flag", color: "orange" },
    ],
    learn: [
      { title: "Alter Your Views" },
      { title: "Crafting a Culture" },
      { title: "Unsure About Coaching?" },
      { title: "Significance of Roles" },
    ],
    resources: [
      { type: "tips", title: "Tips", subtitle: "Get control of your life" },
      { type: "quotes", title: "Quotes", subtitle: "One day at a time" },
      { type: "ebooks", title: "Ebooks", subtitle: "Books are a man's best friend" },
    ],
  },
  {
    id: "finance",
    name: "Finance",
    image: financeImg,
    bgColor: "bg-coaching-finance",
    exercises: [
      { title: "Urgent vs. Important", lucideIcon: "Hourglass", color: "navy" },
      { title: "Plan, Do and Review", lucideIcon: "ClipboardEdit", color: "red" },
      { title: "My Money Priorities", lucideIcon: "PiggyBank", color: "blue" },
      { title: "Financial Goals Chart", lucideIcon: "Target", color: "orange" },
    ],
    learn: [
      { title: "Secure Your Future" },
      { title: "Why Personal Finance?" },
      { title: "Financial Coaching?" },
      { title: "Controlling Your Finances" },
    ],
    resources: [
      { type: "tips", title: "Tips", subtitle: "Get control of your life" },
      { type: "quotes", title: "Quotes", subtitle: "One day at a time" },
      { type: "ebooks", title: "Ebooks", subtitle: "Books are a man's best friend" },
    ],
  },
  {
    id: "performance",
    name: "Performance",
    image: performanceImg,
    bgColor: "bg-coaching-performance",
    exercises: [
      { title: "Success Planner", lucideIcon: "CalendarCheck", color: "blue" },
      { title: "Eliminate Delaying", lucideIcon: "Clock", color: "blue" },
      { title: "Unstick Yourself!", lucideIcon: "Smile", color: "red" },
      { title: "Love Your Weaknesses", lucideIcon: "Sparkles", color: "purple" },
    ],
    learn: [
      { title: "Performance Coaching" },
      { title: "What & How?" },
      { title: "Performance Advantages" },
      { title: "Seeking a Coach?" },
    ],
    resources: [
      { type: "tips", title: "Tips", subtitle: "Get control of your life" },
      { type: "quotes", title: "Quotes", subtitle: "One day at a time" },
      { type: "ebooks", title: "Ebooks", subtitle: "Books are a man's best friend" },
    ],
  },
  {
    id: "mindset",
    name: "Mindset",
    image: mindsetImg,
    bgColor: "bg-coaching-mindset",
    exercises: [
      { title: "3 Month Vision", lucideIcon: "Binoculars", color: "navy" },
      { title: "Get Motivated!", lucideIcon: "Puzzle", color: "orange" },
      { title: "Build a Bridge", lucideIcon: "Construction", color: "yellow" },
      { title: "SMART! Goals", lucideIcon: "Target", color: "navy" },
    ],
    learn: [
      { title: "Mastering Mindset" },
      { title: "Fostering a Mindset" },
      { title: "A Coaching Mindset" },
      { title: "What Does a Coach Do?" },
    ],
    resources: [
      { type: "tips", title: "Tips", subtitle: "Get control of your life" },
      { type: "quotes", title: "Quotes", subtitle: "One day at a time" },
      { type: "ebooks", title: "Ebooks", subtitle: "Books are a man's best friend" },
    ],
  },
  {
    id: "spiritual",
    name: "Spiritual",
    image: spiritualImg,
    bgColor: "bg-coaching-spiritual",
    exercises: [
      { title: "Mentor Magic!", lucideIcon: "Users", color: "blue" },
      { title: "Intuition Exercise", lucideIcon: "Brain", color: "teal" },
      { title: "Love And Loathe List", lucideIcon: "HeartOff", color: "red" },
      { title: "Powerful Questions", lucideIcon: "MessageCircleQuestion", color: "blue" },
    ],
    learn: [
      { title: "Enhance Your Life" },
      { title: "Essence of Spirituality" },
      { title: "Exploring the Mechanics" },
      { title: "Spiritual Vs Life Coaching" },
    ],
    resources: [
      { type: "tips", title: "Tips", subtitle: "Get control of your life" },
      { type: "quotes", title: "Quotes", subtitle: "One day at a time" },
      { type: "ebooks", title: "Ebooks", subtitle: "Books are a man's best friend" },
    ],
  },
  {
    id: "mental-health",
    name: "Mental Health",
    image: mentalHealthImg,
    bgColor: "bg-coaching-mental",
    exercises: [
      { title: "Let Go", lucideIcon: "Bird", color: "salmon" },
      { title: "Too Comfortable?", lucideIcon: "Armchair", color: "blue" },
      { title: "Discover Yourself", lucideIcon: "SearchHeart", color: "orange" },
      { title: "Gratitude Diary", lucideIcon: "CloudSun", color: "red" },
    ],
    learn: [
      { title: "Know Mental Health" },
      { title: "Foundations of Wellness" },
      { title: "Coaching vs Counseling" },
      { title: "Path to Well-Being" },
    ],
    resources: [
      { type: "tips", title: "Tips", subtitle: "Get control of your life" },
      { type: "quotes", title: "Quotes", subtitle: "One day at a time" },
      { type: "ebooks", title: "Ebooks", subtitle: "Books are a man's best friend" },
    ],
  },
  {
    id: "transform",
    name: "Transform",
    image: transformImg,
    bgColor: "bg-coaching-transform",
    exercises: [
      { title: "Wacky Wild Goal", lucideIcon: "Target", color: "navy" },
      { title: "Big & Little Rocks", lucideIcon: "Gem", color: "orange" },
      { title: "Rocking Chair", lucideIcon: "ArmchairIcon", color: "purple" },
      { title: "Goals Motivator", lucideIcon: "Star", color: "red" },
    ],
    learn: [
      { title: "Coaching to Transform" },
      { title: "Why Coach?" },
      { title: "Exploring Coaching" },
      { title: "What Does It Entail?" },
    ],
    resources: [
      { type: "tips", title: "Tips", subtitle: "Get control of your life" },
      { type: "quotes", title: "Quotes", subtitle: "One day at a time" },
      { type: "ebooks", title: "Ebooks", subtitle: "Books are a man's best friend" },
    ],
  },
  {
    id: "communicate",
    name: "Communicate",
    image: communicateImg,
    bgColor: "bg-coaching-communicate",
    exercises: [
      { title: "Active Listening", lucideIcon: "Ear", color: "blue" },
      { title: "Feedback Model", lucideIcon: "MessageSquare", color: "teal" },
      { title: "Pitch Perfect", lucideIcon: "Mic", color: "red" },
      { title: "Empathy Map", lucideIcon: "Heart", color: "orange" },
    ],
    learn: [
      { title: "Nonverbal Cues" },
      { title: "Persuasion Skills" },
      { title: "Difficult Talks" },
      { title: "Public Speaking" },
    ],
    resources: [
      { type: "tips", title: "Tips", subtitle: "Get control of your life" },
      { type: "quotes", title: "Quotes", subtitle: "One day at a time" },
      { type: "ebooks", title: "Ebooks", subtitle: "Books are a man's best friend" },
    ],
  },
  {
    id: "organization",
    name: "Organization",
    image: organizationImg,
    bgColor: "bg-coaching-organization",
    exercises: [
      { title: "Org Chart", lucideIcon: "Network", color: "navy" },
      { title: "Process Map", lucideIcon: "Map", color: "blue" },
      { title: "Culture Audit", lucideIcon: "Theater", color: "red" },
      { title: "Team Build", lucideIcon: "Users", color: "orange" },
    ],
    learn: [
      { title: "Org Design" },
      { title: "Culture Building" },
      { title: "Change Management" },
      { title: "Team Dynamics" },
    ],
    resources: [
      { type: "tips", title: "Tips", subtitle: "Get control of your life" },
      { type: "quotes", title: "Quotes", subtitle: "One day at a time" },
      { type: "ebooks", title: "Ebooks", subtitle: "Books are a man's best friend" },
    ],
  },
  {
    id: "creativity",
    name: "Creativity",
    image: creativityImg,
    bgColor: "bg-coaching-creativity",
    exercises: [
      { title: "Ideation Sprint", lucideIcon: "Lightbulb", color: "yellow" },
      { title: "Mind Map", lucideIcon: "Brain", color: "blue" },
      { title: "SCAMPER", lucideIcon: "Wrench", color: "purple" },
      { title: "Design Think", lucideIcon: "Palette", color: "red" },
    ],
    learn: [
      { title: "Creative Process" },
      { title: "Innovation Methods" },
      { title: "Lateral Thinking" },
      { title: "Creative Blocks" },
    ],
    resources: [
      { type: "tips", title: "Tips", subtitle: "Get control of your life" },
      { type: "quotes", title: "Quotes", subtitle: "One day at a time" },
      { type: "ebooks", title: "Ebooks", subtitle: "Books are a man's best friend" },
    ],
  },
  {
    id: "employee",
    name: "Employee",
    image: employeeImg,
    bgColor: "bg-coaching-employee",
    exercises: [
      { title: "Engagement Survey", lucideIcon: "ClipboardList", color: "blue" },
      { title: "Career Path", lucideIcon: "Route", color: "navy" },
      { title: "Skills Gap", lucideIcon: "BarChart", color: "orange" },
      { title: "Onboarding Plan", lucideIcon: "Rocket", color: "red" },
    ],
    learn: [
      { title: "Employee Engagement" },
      { title: "Talent Development" },
      { title: "Workplace Culture" },
      { title: "Retention Strategy" },
    ],
    resources: [
      { type: "tips", title: "Tips", subtitle: "Get control of your life" },
      { type: "quotes", title: "Quotes", subtitle: "One day at a time" },
      { type: "ebooks", title: "Ebooks", subtitle: "Books are a man's best friend" },
    ],
  },
  {
    id: "corporate",
    name: "Corporate",
    image: corporateImg,
    bgColor: "bg-coaching-corporate",
    exercises: [
      { title: "Strategy Canvas", lucideIcon: "LayoutDashboard", color: "navy" },
      { title: "Market Analysis", lucideIcon: "Search", color: "blue" },
      { title: "Value Chain", lucideIcon: "Link", color: "teal" },
      { title: "Risk Register", lucideIcon: "ShieldAlert", color: "orange" },
    ],
    learn: [
      { title: "Corporate Strategy" },
      { title: "Governance" },
      { title: "Compliance" },
      { title: "Mergers & Acquisitions" },
    ],
    resources: [
      { type: "tips", title: "Tips", subtitle: "Get control of your life" },
      { type: "quotes", title: "Quotes", subtitle: "One day at a time" },
      { type: "ebooks", title: "Ebooks", subtitle: "Books are a man's best friend" },
    ],
  },
  {
    id: "confidence",
    name: "Confidence",
    image: confidenceImg,
    bgColor: "bg-coaching-confidence",
    exercises: [
      { title: "Self-Assessment", lucideIcon: "UserCheck", color: "blue" },
      { title: "Power Pose", lucideIcon: "Dumbbell", color: "red" },
      { title: "Win Journal", lucideIcon: "Trophy", color: "orange" },
      { title: "Fear Ladder", lucideIcon: "Ladder", color: "purple" },
    ],
    learn: [
      { title: "Building Confidence" },
      { title: "Imposter Syndrome" },
      { title: "Self-Belief" },
      { title: "Assertiveness" },
    ],
    resources: [
      { type: "tips", title: "Tips", subtitle: "Get control of your life" },
      { type: "quotes", title: "Quotes", subtitle: "One day at a time" },
      { type: "ebooks", title: "Ebooks", subtitle: "Books are a man's best friend" },
    ],
  },
];
