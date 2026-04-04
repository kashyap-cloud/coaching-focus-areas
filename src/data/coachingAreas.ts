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

export interface CoachingArea {
  id: string;
  name: string;
  image: string;
  bgColor: string;
  exercises: { title: string; icon: string }[];
  learn: { title: string; image: string }[];
  resources: { type: "tips" | "quotes" | "ebooks"; title: string; subtitle: string }[];
}

export const coachingAreas: CoachingArea[] = [
  {
    id: "career",
    name: "Career",
    image: careerImg,
    bgColor: "bg-coaching-career",
    exercises: [
      { title: "Improvement Canvas", icon: "🎨" },
      { title: "SWOT Analysis", icon: "📊" },
      { title: "Not To-Do List", icon: "📝" },
      { title: "GROW", icon: "📈" },
    ],
    learn: [
      { title: "Key Principles", image: "" },
      { title: "Coaching Benefits", image: "" },
      { title: "Unexpected Advantages", image: "" },
      { title: "Hidden Capabilities", image: "" },
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
      { title: "Decision Matrix", icon: "🎯" },
      { title: "Vision Board", icon: "🔮" },
      { title: "Priority Map", icon: "🗺️" },
      { title: "Stakeholder Grid", icon: "👥" },
    ],
    learn: [
      { title: "Executive Presence", image: "" },
      { title: "Strategic Thinking", image: "" },
      { title: "Board Dynamics", image: "" },
      { title: "C-Suite Skills", image: "" },
    ],
    resources: [
      { type: "tips", title: "Tips", subtitle: "Lead with confidence" },
      { type: "quotes", title: "Quotes", subtitle: "Think big, act bold" },
      { type: "ebooks", title: "Ebooks", subtitle: "Executive reading list" },
    ],
  },
  {
    id: "wellness",
    name: "Wellness",
    image: wellnessImg,
    bgColor: "bg-coaching-wellness",
    exercises: [
      { title: "Wellness Wheel", icon: "🧘" },
      { title: "Habit Tracker", icon: "✅" },
      { title: "Stress Audit", icon: "🌿" },
      { title: "Energy Map", icon: "⚡" },
    ],
    learn: [
      { title: "Holistic Health", image: "" },
      { title: "Work-Life Balance", image: "" },
      { title: "Nutrition Basics", image: "" },
      { title: "Sleep Science", image: "" },
    ],
    resources: [
      { type: "tips", title: "Tips", subtitle: "Balance your life" },
      { type: "quotes", title: "Quotes", subtitle: "Health is wealth" },
      { type: "ebooks", title: "Ebooks", subtitle: "Wellness essentials" },
    ],
  },
  {
    id: "leadership",
    name: "Leadership",
    image: leadershipImg,
    bgColor: "bg-coaching-leadership",
    exercises: [
      { title: "Leadership Style", icon: "⭐" },
      { title: "Team Assessment", icon: "👥" },
      { title: "Influence Map", icon: "🌐" },
      { title: "Vision Craft", icon: "🔭" },
    ],
    learn: [
      { title: "Servant Leadership", image: "" },
      { title: "Emotional Intelligence", image: "" },
      { title: "Delegation Mastery", image: "" },
      { title: "Conflict Resolution", image: "" },
    ],
    resources: [
      { type: "tips", title: "Tips", subtitle: "Inspire your team" },
      { type: "quotes", title: "Quotes", subtitle: "Lead by example" },
      { type: "ebooks", title: "Ebooks", subtitle: "Leadership library" },
    ],
  },
  {
    id: "finance",
    name: "Finance",
    image: financeImg,
    bgColor: "bg-coaching-finance",
    exercises: [
      { title: "Budget Planner", icon: "💰" },
      { title: "Goal Setting", icon: "🎯" },
      { title: "Risk Assessment", icon: "⚖️" },
      { title: "Investment Map", icon: "📊" },
    ],
    learn: [
      { title: "Financial Literacy", image: "" },
      { title: "Wealth Building", image: "" },
      { title: "Tax Strategy", image: "" },
      { title: "Retirement Plan", image: "" },
    ],
    resources: [
      { type: "tips", title: "Tips", subtitle: "Master your money" },
      { type: "quotes", title: "Quotes", subtitle: "Wealth wisdom" },
      { type: "ebooks", title: "Ebooks", subtitle: "Finance fundamentals" },
    ],
  },
  {
    id: "performance",
    name: "Performance",
    image: performanceImg,
    bgColor: "bg-coaching-performance",
    exercises: [
      { title: "KPI Dashboard", icon: "📈" },
      { title: "Feedback Loop", icon: "🔄" },
      { title: "Peak State", icon: "🏔️" },
      { title: "Skill Matrix", icon: "🧩" },
    ],
    learn: [
      { title: "Peak Performance", image: "" },
      { title: "Flow State", image: "" },
      { title: "Productivity Hacks", image: "" },
      { title: "Accountability", image: "" },
    ],
    resources: [
      { type: "tips", title: "Tips", subtitle: "Achieve more daily" },
      { type: "quotes", title: "Quotes", subtitle: "Push your limits" },
      { type: "ebooks", title: "Ebooks", subtitle: "Performance guides" },
    ],
  },
  {
    id: "mindset",
    name: "Mindset",
    image: mindsetImg,
    bgColor: "bg-coaching-mindset",
    exercises: [
      { title: "Belief Audit", icon: "🧠" },
      { title: "Gratitude Log", icon: "🙏" },
      { title: "Reframe Tool", icon: "🔄" },
      { title: "Growth Plan", icon: "🌱" },
    ],
    learn: [
      { title: "Growth Mindset", image: "" },
      { title: "Neuroplasticity", image: "" },
      { title: "Positive Psychology", image: "" },
      { title: "Mental Models", image: "" },
    ],
    resources: [
      { type: "tips", title: "Tips", subtitle: "Shift your thinking" },
      { type: "quotes", title: "Quotes", subtitle: "Mind over matter" },
      { type: "ebooks", title: "Ebooks", subtitle: "Mindset mastery" },
    ],
  },
  {
    id: "spiritual",
    name: "Spiritual",
    image: spiritualImg,
    bgColor: "bg-coaching-spiritual",
    exercises: [
      { title: "Meditation Guide", icon: "🧘" },
      { title: "Values Clarity", icon: "💎" },
      { title: "Purpose Finder", icon: "🧭" },
      { title: "Inner Peace", icon: "☮️" },
    ],
    learn: [
      { title: "Mindfulness", image: "" },
      { title: "Self-Discovery", image: "" },
      { title: "Inner Wisdom", image: "" },
      { title: "Sacred Practices", image: "" },
    ],
    resources: [
      { type: "tips", title: "Tips", subtitle: "Find your center" },
      { type: "quotes", title: "Quotes", subtitle: "Journey within" },
      { type: "ebooks", title: "Ebooks", subtitle: "Spiritual readings" },
    ],
  },
  {
    id: "mental-health",
    name: "Mental Health",
    image: mentalHealthImg,
    bgColor: "bg-coaching-mental",
    exercises: [
      { title: "Mood Tracker", icon: "💙" },
      { title: "Coping Skills", icon: "🛡️" },
      { title: "Boundary Set", icon: "🚧" },
      { title: "Self-Care Plan", icon: "🌸" },
    ],
    learn: [
      { title: "Anxiety Management", image: "" },
      { title: "Emotional Regulation", image: "" },
      { title: "Resilience Building", image: "" },
      { title: "Burnout Prevention", image: "" },
    ],
    resources: [
      { type: "tips", title: "Tips", subtitle: "Nurture your mind" },
      { type: "quotes", title: "Quotes", subtitle: "You are not alone" },
      { type: "ebooks", title: "Ebooks", subtitle: "Mental health guides" },
    ],
  },
  {
    id: "transform",
    name: "Transform",
    image: transformImg,
    bgColor: "bg-coaching-transform",
    exercises: [
      { title: "Change Canvas", icon: "🦋" },
      { title: "Before & After", icon: "🔄" },
      { title: "Habit Stack", icon: "📚" },
      { title: "Identity Shift", icon: "🪞" },
    ],
    learn: [
      { title: "Change Science", image: "" },
      { title: "Transformation Stories", image: "" },
      { title: "Breakthrough Methods", image: "" },
      { title: "Sustaining Change", image: "" },
    ],
    resources: [
      { type: "tips", title: "Tips", subtitle: "Embrace the change" },
      { type: "quotes", title: "Quotes", subtitle: "Transform daily" },
      { type: "ebooks", title: "Ebooks", subtitle: "Transformation toolkit" },
    ],
  },
  {
    id: "communicate",
    name: "Communicate",
    image: communicateImg,
    bgColor: "bg-coaching-communicate",
    exercises: [
      { title: "Active Listening", icon: "👂" },
      { title: "Feedback Model", icon: "💬" },
      { title: "Pitch Perfect", icon: "🎤" },
      { title: "Empathy Map", icon: "❤️" },
    ],
    learn: [
      { title: "Nonverbal Cues", image: "" },
      { title: "Persuasion Skills", image: "" },
      { title: "Difficult Talks", image: "" },
      { title: "Public Speaking", image: "" },
    ],
    resources: [
      { type: "tips", title: "Tips", subtitle: "Connect better" },
      { type: "quotes", title: "Quotes", subtitle: "Words matter" },
      { type: "ebooks", title: "Ebooks", subtitle: "Communication guides" },
    ],
  },
  {
    id: "organization",
    name: "Organization",
    image: organizationImg,
    bgColor: "bg-coaching-organization",
    exercises: [
      { title: "Org Chart", icon: "🏢" },
      { title: "Process Map", icon: "🗺️" },
      { title: "Culture Audit", icon: "🎭" },
      { title: "Team Build", icon: "🤝" },
    ],
    learn: [
      { title: "Org Design", image: "" },
      { title: "Culture Building", image: "" },
      { title: "Change Management", image: "" },
      { title: "Team Dynamics", image: "" },
    ],
    resources: [
      { type: "tips", title: "Tips", subtitle: "Build strong teams" },
      { type: "quotes", title: "Quotes", subtitle: "Together we grow" },
      { type: "ebooks", title: "Ebooks", subtitle: "Organization insights" },
    ],
  },
  {
    id: "creativity",
    name: "Creativity",
    image: creativityImg,
    bgColor: "bg-coaching-creativity",
    exercises: [
      { title: "Ideation Sprint", icon: "💡" },
      { title: "Mind Map", icon: "🧠" },
      { title: "SCAMPER", icon: "🔧" },
      { title: "Design Think", icon: "🎨" },
    ],
    learn: [
      { title: "Creative Process", image: "" },
      { title: "Innovation Methods", image: "" },
      { title: "Lateral Thinking", image: "" },
      { title: "Creative Blocks", image: "" },
    ],
    resources: [
      { type: "tips", title: "Tips", subtitle: "Unleash creativity" },
      { type: "quotes", title: "Quotes", subtitle: "Imagine more" },
      { type: "ebooks", title: "Ebooks", subtitle: "Creativity guides" },
    ],
  },
  {
    id: "employee",
    name: "Employee",
    image: employeeImg,
    bgColor: "bg-coaching-employee",
    exercises: [
      { title: "Engagement Survey", icon: "📋" },
      { title: "Career Path", icon: "🛤️" },
      { title: "Skills Gap", icon: "📊" },
      { title: "Onboarding Plan", icon: "🚀" },
    ],
    learn: [
      { title: "Employee Engagement", image: "" },
      { title: "Talent Development", image: "" },
      { title: "Workplace Culture", image: "" },
      { title: "Retention Strategy", image: "" },
    ],
    resources: [
      { type: "tips", title: "Tips", subtitle: "Empower your people" },
      { type: "quotes", title: "Quotes", subtitle: "People first" },
      { type: "ebooks", title: "Ebooks", subtitle: "Employee guides" },
    ],
  },
  {
    id: "corporate",
    name: "Corporate",
    image: corporateImg,
    bgColor: "bg-coaching-corporate",
    exercises: [
      { title: "Strategy Canvas", icon: "📐" },
      { title: "Market Analysis", icon: "🔍" },
      { title: "Value Chain", icon: "🔗" },
      { title: "Risk Register", icon: "⚠️" },
    ],
    learn: [
      { title: "Corporate Strategy", image: "" },
      { title: "Governance", image: "" },
      { title: "Compliance", image: "" },
      { title: "Mergers & Acquisitions", image: "" },
    ],
    resources: [
      { type: "tips", title: "Tips", subtitle: "Drive corporate success" },
      { type: "quotes", title: "Quotes", subtitle: "Business wisdom" },
      { type: "ebooks", title: "Ebooks", subtitle: "Corporate playbook" },
    ],
  },
  {
    id: "confidence",
    name: "Confidence",
    image: confidenceImg,
    bgColor: "bg-coaching-confidence",
    exercises: [
      { title: "Self-Assessment", icon: "🪞" },
      { title: "Power Pose", icon: "💪" },
      { title: "Win Journal", icon: "🏆" },
      { title: "Fear Ladder", icon: "🪜" },
    ],
    learn: [
      { title: "Building Confidence", image: "" },
      { title: "Imposter Syndrome", image: "" },
      { title: "Self-Belief", image: "" },
      { title: "Assertiveness", image: "" },
    ],
    resources: [
      { type: "tips", title: "Tips", subtitle: "Believe in yourself" },
      { type: "quotes", title: "Quotes", subtitle: "You've got this" },
      { type: "ebooks", title: "Ebooks", subtitle: "Confidence builders" },
    ],
  },
];
