import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Experience: React.FC = () => {
  return (
    <Wrapper data-testid="experience">
      <EduIntro>Here is my research & work experience!</EduIntro>
      {experience.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const experience = [
  {
    title: "Full Stack Developer — Foam On Latte",
    desc: "Toronto, Canada | June 2025 - January 2026 — Integrated Shopify Webhooks/API into a .NET backend and optimized a Svelte dashboard (~40% faster page loads); debugged and extended a Flutter app (~25% fewer crashes); improved DB query performance by ~60% via indexing strategies and vectorized full-text search.",
  },
  {
    title: "Undergraduate Researcher — NLP, Biose Research Center, BRAC",
    desc: "Dhaka, Bangladesh | 2024 - 2025 — Co-authored CSTRL, a sequential transfer learning framework for abstractive radiology report summarization, published at ACL Findings 2025. Proposed Fisher matrix regularization to mitigate catastrophic forgetting during domain adaptation of transformer-based language models, achieving state-of-the-art BLEU/ROUGE on MIMIC-CXR and Open-I.",
  },
  {
    title: "Apprentice, MERN Stack — Learnathon 3.0 by Geeky Solutions",
    desc: "Dhaka, Bangladesh | January 2025 - April 2025 — Led a team of 3 to build Geeky Chef, an AI-powered nutrition companion with personalized recipe recommendations and computer-vision nutrition analysis; placed 1st Runner-Up.",
  },
  {
    title: "Software Engineering Fellow — Headstarter AI",
    desc: "New York, USA | July 2024 - October 2024 — Built a pantry management app (Next.js, Firebase, flax/T5) with 92% recommendation accuracy; designed an AI interview-prep chatbot (Next.js, TypeScript, Mistral AI) on AWS EC2 spot instances, cutting hosting costs up to 90%; developed a flashcard SaaS with Meta-Llama 3.1-8B and Stripe API, boosting user retention by 35% and automating 75% of flashcard generation.",
  },
  {
    title: "Thesis — BUET",
    desc: "Dhaka, Bangladesh | 2025 - 2026 — Designed two defenses, EDF (energy distance filtering) and PKDD (personalized knowledge distillation defense), against backdoor attacks in personalized federated learning. EDF achieved significant improvement against gradient masking class attacks, while PKDD showed strong performance against all attacks, especially distributed backdoor attacks.",
  },
];

export default Experience;
