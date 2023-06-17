import "../styles/Skills.css";
const HTMLLogo = "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png";
const CSSLogo = `${process.env.PUBLIC_URL}/icons8-css-logo-64.png`;
const JavaScriptLogo = `${process.env.PUBLIC_URL}/JavaScript-logo.png`;
const NodeJSLogo = `${process.env.PUBLIC_URL}/320px-Node.js_logo.svg.png`;
const ExpressLogo = `${process.env.PUBLIC_URL}/expressjs-680x220.webp`;
const ReactJSLogo = `${process.env.PUBLIC_URL}/React-icon.svg.png`;
const MongoDBLogo = `${process.env.PUBLIC_URL}/MongoDB-Logo1.jpg`;
const GitLogo = `${process.env.PUBLIC_URL}/Git-Logo-2Color.svg`;

function Skills() {
  return (
    <div class="section1">
      <div class="Skills-discussion">
        <p>
          These are some of my software developer skills. I'm also familiar with
          Python and Matlab, some data science, AWS {"(which this site is hosted on)"}, and more. If the
          need arises, I won't hesitate to learn something new on my own time to
          accomplish what you need!
        </p>
      </div>
      <div class="Skills-container">
        <div class="Skills-card">
          <img
            class="Skills-logo"
            src={HTMLLogo}
            width="64"
            height="64"
            title="HTML5"
            alt="HTML logo"
          ></img>
          <p class="Skills-skill">HTML</p>
        </div>
        <div class="Skills-card">
          <img
            class="Skills-logo"
            src={CSSLogo}
            width="64"
            height="64"
            title="CSS3"
            alt="CSS logo"
          ></img>
          <p class="Skills-skill">CSS</p>
        </div>
        <div class="Skills-card">
          <img
            class="Skills-logo"
            src={JavaScriptLogo}
            alt="JavaScript logo"
          ></img>
          <p class="Skills-skill">JavaScript</p>
        </div>
        <div class="Skills-card">
          <img class="Skills-logo" src={NodeJSLogo} alt="NodeJS logo"></img>
          <p class="Skills-skill">Node</p>
        </div>
        <div class="Skills-card">
          <img class="Skills-logo" src={ExpressLogo} alt="ExpressJS logo"></img>
          <p class="Skills-skill">Express</p>
        </div>
        <div class="Skills-card">
          <img class="Skills-logo" src={ReactJSLogo} alt="ReactJS logo"></img>
          <p class="Skills-skill">React</p>
        </div>
        <div class="Skills-card">
          <img class="Skills-logo" src={MongoDBLogo} alt="MongoDB logo"></img>
          <p class="Skills-skill">MongoDB</p>
        </div>
        <div class="Skills-card">
          <img
            class="Skills-logo"
            src={GitLogo}
            height="64"
            alt="Git logo"
          ></img>
          <p class="Skills-skill">Git/GitHub</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
