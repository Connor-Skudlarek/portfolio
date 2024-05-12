import "../styles/Skills.css";
const HTMLLogo = "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png";
const CSSLogo = "/icons8-css-logo-64.png";
const JavaScriptLogo = "/JavaScript-logo.png";
const NodeJSLogo = "/320px-Node.js_logo.svg.png";
const ExpressLogo = "/expressjs-680x220.webp";
const ReactJSLogo = "/React-icon.svg.png";
const MongoDBLogo = "/MongoDB-Logo1.jpg";
const GitLogo = "/Git-Logo-2Color.svg";

function Skills() {
  return (
    <div className="section1">
      <div className="Skills-discussion">
        <p>
          These are some of my software developer skills. I'm also familiar with
          Python and Matlab, some data science, AWS{" "}
          {"(which this site is hosted on)"}, and more. If the need arises, I
          won't hesitate to learn something new on my own time to accomplish
          what you need!
        </p>
      </div>
      <div className="Skills-container">
        <div className="Skills-card">
          <img
            className="Skills-logo"
            src={HTMLLogo}
            width="64"
            height="64"
            title="HTML5"
            alt="HTML logo"
          ></img>
          <p className="Skills-skill">HTML</p>
        </div>
        <div className="Skills-card">
          <img
            className="Skills-logo"
            src={CSSLogo}
            width="64"
            height="64"
            title="CSS3"
            alt="CSS logo"
          ></img>
          <p className="Skills-skill">CSS</p>
        </div>
        <div className="Skills-card">
          <img
            className="Skills-logo"
            src={JavaScriptLogo}
            alt="JavaScript logo"
          ></img>
          <p className="Skills-skill">JavaScript</p>
        </div>
        <div className="Skills-card">
          <img className="Skills-logo" src={NodeJSLogo} alt="NodeJS logo"></img>
          <p className="Skills-skill">Node</p>
        </div>
        <div className="Skills-card">
          <img
            className="Skills-logo"
            src={ExpressLogo}
            alt="ExpressJS logo"
          ></img>
          <p className="Skills-skill">Express</p>
        </div>
        <div className="Skills-card">
          <img
            className="Skills-logo"
            src={ReactJSLogo}
            alt="ReactJS logo"
          ></img>
          <p className="Skills-skill">React</p>
        </div>
        <div className="Skills-card">
          <img
            className="Skills-logo"
            src={MongoDBLogo}
            alt="MongoDB logo"
          ></img>
          <p className="Skills-skill">MongoDB</p>
        </div>
        <div className="Skills-card">
          <img
            className="Skills-logo"
            src={GitLogo}
            height="64"
            alt="Git logo"
          ></img>
          <p className="Skills-skill">Git/GitHub</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
