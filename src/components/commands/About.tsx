import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Mostafa Rifat Tazwar</HighlightSpan>{" "}.
      </p>
      <p>
        I'm a CSE graduate at{" "}
        <HighlightAlt>
          Bangladesh University of Engineering and Technology (BUET)
        </HighlightAlt>
        .
      </p>
      <p>
        Currently learning <HighlightAlt>cybersecurity</HighlightAlt> and{" "}
        <HighlightAlt>machine learning</HighlightAlt>, particularly working on federated learning and 5G formal verification. <br />
        Eager to participate in capture the flags, datathons, and research
        collabs.
      </p>
    </AboutWrapper>
  );
};

export default About;
