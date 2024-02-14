import * as React from "react";
import Tooltip from "@mui/material/Tooltip";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFile,
  faL,
  fas,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function FloatingActionButtonsRight() {
  const [hovered, setHovered] = React.useState({
    github: false,
    linked: false,
    mail: false,
    resume: false,
    twitter: false,
  });

  let bgColor = getComputedStyle(document.documentElement).getPropertyValue("--bg").trim();

  const openPdf = () => {
    console.log("click");
    window.open("resume.pdf", "_blank");
  };

  return (
    <div className="floating-div right">
      <div className="floating-icons">
        <Tooltip title="Github" placement="left-start" arrow>
          <a href="https://github.com/barathbalasubramanian/">
            <FontAwesomeIcon
              icon={faGithub}
              style={{
                color: hovered["github"]
                  ? bgColor === "white"
                    ? "grey"
                    : "white"
                  : "",
              }}
              onMouseEnter={() => setHovered({ ...hovered, github: true })}
              onMouseLeave={() => setHovered({ ...hovered, github: false })}
            />
          </a>
        </Tooltip>
        <Tooltip title="Twitter" placement="left-start" arrow>
          <a href="https://twitter.com/_Barathkumar_B">
            <FontAwesomeIcon
              icon={faTwitter}
              style={{ color: hovered["twitter"] ? "#00acee" : "" }}
              onMouseEnter={() => setHovered({ ...hovered, twitter: true })}
              onMouseLeave={() => setHovered({ ...hovered, twitter: false })}
            />
          </a>
        </Tooltip>
        <Tooltip title="Linked in" placement="left-start" arrow>
          <a href="https://www.linkedin.com/in/barathbalasubramanian/">
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: hovered["linked"] ? "#0A66C2" : "" }}
              onMouseEnter={() => setHovered({ ...hovered, linked: true })}
              onMouseLeave={() => setHovered({ ...hovered, linked: false })}
            />
          </a>
        </Tooltip>
        <Tooltip title="Mail" placement="left-start" arrow>
          <a href="mailto:barathkumar.b2411@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: hovered["mail"] ? "skyblue" : "" }}
              onMouseEnter={() => setHovered({ ...hovered, mail: true })}
              onMouseLeave={() => setHovered({ ...hovered, mail: false })}
            />
          </a>
        </Tooltip>
        <Tooltip title="Resume" placement="left-start" arrow>
          <FontAwesomeIcon
            icon={faFile}
            onClick={openPdf}
            style={{ color: hovered["resume"] ? "#0A66C2" : "" }}
            onMouseEnter={() => setHovered({ ...hovered, resume: true })}
            onMouseLeave={() => setHovered({ ...hovered, resume: false })}
          />
        </Tooltip>
      </div>
    </div>
  );
}
