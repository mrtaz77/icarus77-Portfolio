import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender, executeCommand } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== handle project click ===== */
  const handleProjectClick = (id: number, url: string) => {
    window.open(url, "_blank");
  };

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4", "5", "6", "7"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you! <br />
        Here are some of my projects you shouldn't miss
      </ProjectsIntro>
      {projects.map(({ id, title, desc, url }) => (
        <ProjectContainer key={id}>
          <ProjectTitle
            onClick={() => handleProjectClick(id, url)}
            style={{ cursor: 'pointer' }}
          >
            {`${id}. ${title}`}
          </ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Multilingual Indirect Prompt Injection Defense",
    desc: "Defense strategies (boosting, stacking, finetuning, ensemble) against multilingual indirect prompt injection attacks on open-source LLMs like Qwen, TigerLLM, and Gemma. Stack: ML, PyTorch, LoRA.",
    url: "https://github.com/Muhtadi13/Multilingual-Indirect-Prompt-Injection-Defense",
  },
  {
    id: 2,
    title: "Career-Studio",
    desc: "Backend of an automatic CV and portfolio builder, achieving 2x faster API responses; Docker-based CI/CD deployed on Azure VM with Nginx. Stack: FastAPI, PostgreSQL, Prisma, Supabase, Docker.",
    url: "https://github.com/mrtaz77/career-studio",
  },
  {
    id: 3,
    title: "Geeky Chef",
    desc: "AI-powered nutrition companion with personalized recipe recommendations and computer-vision nutrition analysis; 1st Runner-Up at Learnathon 3.0. Stack: MERN, Firebase, Spoonacular API, Gemini, Clarifai.",
    url: "https://github.com/mrtaz77/brain-train",
  },
  {
    id: 4,
    title: "mjolnir",
    desc: "A YARA scanner detecting malware using YARA rules. Stack: Python, yara.",
    url: "https://github.com/mrtaz77/mjolnir-A-Yara-Scanner",
  },
  {
    id: 5,
    title: "nyShark",
    desc: "A packet sniffer / network protocol analyzer. Stack: Python, scapy.",
    url: "https://github.com/mrtaz77/nyShark",
  },
  {
    id: 6,
    title: "BdStokz",
    desc: "Real-time stock trading backend; optimized Oracle SQL/PL/SQL, cutting query latency to under 200ms. Stack: Node.js, Express, Oracle SQL, PL/SQL.",
    url: "https://github.com/mrtaz77/BDStokz",
  },
  {
    id: 7,
    title: "MUCU Micro-controller Project",
    desc: "A smart automobile featuring bluetooth, voice control, and automatic navigation using sonar, camera, and GPS. Stack: Arduino Uno, servo motor, sonar, camera.",
    url: "https://www.youtube.com/watch?v=IHWIqOERDno",
  },
];

export default Projects;
