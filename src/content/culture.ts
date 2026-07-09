import {
  BookOpenText,
  Mic2,
  Music2,
  Paintbrush,
  Sparkles,
  VenetianMask,
} from "lucide-react";

export const culturalPillars = [
  {
    title: "Music",
    body: "Rabindra Sangeet, folk memories, contemporary voices and shared listening moments that keep Bengal's musical imagination alive.",
    icon: Music2,
  },
  {
    title: "Dance",
    body: "Classical, folk and modern movement shaped by rhythm, grace, festival energy and community participation.",
    icon: VenetianMask,
  },
  {
    title: "Art",
    body: "Drawing, craft, alpana, installation, festival workmanship and the quiet confidence of hand-made cultural expression.",
    icon: Paintbrush,
  },
  {
    title: "Literature & Language",
    body: "Bengali language, poetry, stories, manuscripts and reading traditions passed between generations with care.",
    icon: BookOpenText,
  },
  {
    title: "Recitation & Open Mic",
    body: "A stage for spoken word, personal voice, humor, memory and the joy of performing in community.",
    icon: Mic2,
  },
  {
    title: "Festivals & Traditions",
    body: "Seasonal rituals, Puja, Poila Boishakh, family gatherings and the many textures of Bengali festive life.",
    icon: Sparkles,
  },
] as const;

export const cultureIntro =
  "Aarohan's cultural work extends beyond one festival. It gathers music, dance, art, language, literature, recitation, open mic, festive traditions and community creativity into one rising shared platform.";
