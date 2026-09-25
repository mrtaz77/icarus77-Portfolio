import { EduIntro } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Achievements: React.FC = () => {
  return (
    <Wrapper data-testid="achievements">
      <EduIntro>A few highlights from CTFs, hackathons, and bug bounties!</EduIntro>
      <ul style={{ margin: 0, paddingLeft: "1.25rem", lineHeight: 1.7 }}>
        {achievements.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Wrapper>
  );
};

const achievements = [
  "Finalist, HackerOne BugHunt 2025",
  "1st Runner-Up, MERN Stack Track, Learnathon 3.0, 2025",
  "6th Place, Phoenix Summit CTF 2025",
  "Champion, Cyber Raid CTF 2025",
  "1st Runner-Up, iCTF 2024, organized by Carnegie Mellon University",
  "1st Runner-Up, National Robofest CTF 2024, organized by East-West University",
  "1st Runner-Up, Inter-University BUET CTF 2024",
];

export default Achievements;
