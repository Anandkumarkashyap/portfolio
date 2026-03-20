import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiGit,
  SiFigma,
  SiBootstrap,
  SiMui,
  SiCanva,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiFreelancer,
  SiCplusplus,
  SiPython,
  SiOpenjdk,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiGithub,
  SiLinux,
  SiPostman,
} from "react-icons/si";
import { IconType } from "react-icons";

export const getSkillIcon = (skill: string): IconType => {
  const skillLower = skill.toLowerCase();

  switch (skillLower) {
    case "html":
      return SiHtml5;
    case "css":
      return SiCss3;
    case "javascript":
    case "js":
      return SiJavascript;
    case "typescript":
    case "ts":
      return SiTypescript;
    case "react":
      return SiReact;
    case "next js":
    case "nextjs":
    case "next.js":
      return SiNextdotjs;
    case "tailwind":
    case "tailwindcss":
      return SiTailwindcss;
    case "node js":
    case "nodejs":
    case "node.js":
      return SiNodedotjs;
    case "mongodb":
      return SiMongodb;
    case "mysql":
      return SiMysql;
    case "firebase":
      return SiFirebase;
    case "git":
      return SiGit;
    case "figma":
      return SiFigma;
    case "bootstrap":
      return SiBootstrap;
    case "materialui":
    case "mui":
      return SiMui;
    case "canva":
      return SiCanva;
    case "illustrator":
      return SiAdobeillustrator;
    case "photoshop":
      return SiAdobephotoshop;
    case "c++":
      return SiCplusplus;
    case "python":
      return SiPython;
    case "java":
      return SiOpenjdk;
    case "express js":
    case "expressjs":
    case "express":
      return SiExpress;
    case "postgresql":
    case "postgres":
      return SiPostgresql;
    case "prisma":
      return SiPrisma;
    case "github":
      return SiGithub;
    case "linux":
      return SiLinux;
    case "postman":
      return SiPostman;
    default:
      return SiFreelancer; // Fallback icon
  }
};

export const getSkillColor = (skill: string): string => {
  const skillLower = skill.toLowerCase();
  switch (skillLower) {
    case "html":
      return "#ef4444"; // blue-500
    case "css":
      return "#dc2626"; // blue-600
    case "javascript":
    case "js":
      return "#f7df1e"; // JS Yellow
    case "typescript":
    case "ts":
      return "#3178c6"; // TS Blue
    case "react":
      return "#61dafb"; // React Blue
    case "next js":
    case "nextjs":
    case "next.js":
      return "#ffffff"; // White
    case "tailwind":
      return "#06b6d4"; // Tailwind Teal
    case "node js":
    case "nodejs":
      return "#339933"; // Node Green
    case "mongodb":
      return "#47a248"; // MongoDB Green
    case "mysql":
      return "#4479a1"; // MySQL Blue
    case "firebase":
      return "#ffca28"; // Firebase Yellow
    case "git":
      return "#f05032"; // Git Orange
    case "figma":
      return "#f24e1e"; // Figma Orange
    case "bootstrap":
      return "#7952b3"; // Bootstrap Purple
    case "materialui":
    case "mui":
      return "#007fff"; // MUI Blue
    case "c++":
      return "#00599c"; // C++ Blue
    case "python":
      return "#3776ab"; // Python Blue
    case "java":
      return "#007396"; // Java Blue
    case "express js":
    case "expressjs":
    case "express":
      return "#ffffff"; // Express White
    case "postgresql":
    case "postgres":
      return "#4169e1"; // Postgres Blue
    case "prisma":
      return "#2d3748"; // Prisma Dark
    case "github":
      return "#ffffff"; // GitHub White
    case "linux":
      return "#fcc624"; // Linux Yellow
    case "postman":
      return "#ff6c37"; // Postman Orange
    default:
      return "#ef4444"; // Default blue
  }
};
