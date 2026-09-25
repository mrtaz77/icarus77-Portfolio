import { useContext } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";

const Resume: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  /* ===== check current command makes redirect ===== */
  if (rerender && currentCommand[0] === "resume") {
    // TODO: drop your resume PDF into public/icarus77-resume.pdf
    window.open("/icarus77-resume.pdf", "_blank");
  }

  return <span></span>;
};

export default Resume;
