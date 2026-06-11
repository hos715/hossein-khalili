export type SkillGroup = {
  id: string;
  label: { en: string; fa: string };
  skills: string[];
  learning?: boolean;
};

export const skillGroups: SkillGroup[] = [
  {
    id: "core",
    label: { en: "Core", fa: "هسته" },
    skills: ["JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    id: "state",
    label: { en: "State & APIs", fa: "State و API" },
    skills: ["Redux", "Zustand", "REST API", "WebSocket", "Socket.io", "SignalR"],
  },
  {
    id: "ui",
    label: { en: "UI", fa: "رابط کاربری" },
    skills: ["Tailwind CSS", "Radix UI", "ShadCN", "Material UI", "SCSS"],
  },
  {
    id: "tools",
    label: { en: "Tools", fa: "ابزارها" },
    skills: ["Git", "Agile / Scrum"],
  },
  {
    id: "ai",
    label: { en: "AI (project-scoped)", fa: "هوش مصنوعی (در پروژه)" },
    skills: ["OpenAI", "Llama", "Image processing"],
  },
  {
    id: "learning",
    label: { en: "Building with", fa: "در حال یادگیری" },
    skills: ["NestJS", "Node.js backend patterns"],
    learning: true,
  },
];
