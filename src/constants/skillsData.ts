import { IconType } from "react-icons";
import { FaPython, FaDocker, FaAws, FaGitAlt, FaLinux, FaDatabase, FaBrain, FaComments } from "react-icons/fa";
import { SiPytorch, SiGrafana, SiLangchain, SiNixos, SiMlflow} from "react-icons/si";

interface Skill {
  skill: string;
  icon: IconType;
}

export const skills: Skill[] = [
  {
    skill: "Python",
    icon: FaPython,
  },
  {
    skill: "PyTorch",
    icon: SiPytorch,
  },
  {
    skill: "LangChain",
    icon: SiLangchain,
  },
  {
    skill: "SQL",
    icon: FaDatabase,
  },
  {
    skill: "AI/ML",
    icon: FaBrain,
  },
  {
    skill: "RAG/LLM",
    icon: FaComments,
  },
  {
    skill: "Mlflow",
    icon: SiMlflow,
  },
  {
    skill: "Docker",
    icon: FaDocker,
  },
  {
    skill: "AWS",
    icon: FaAws,
  },
  {
    skill: "ChromaDB",
    icon: FaDatabase,
  },
  {
    skill: "Grafana",
    icon: SiGrafana,
  },
  {
    skill: "Git",
    icon: FaGitAlt,
  },
  {
    skill: "Linux",
    icon: FaLinux,
  },
  {
    skill: "Nixos",
    icon: SiNixos,
  },
];
