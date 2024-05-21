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
    <div
      id="Skills"
      className="bg-gradient-to-tl from-[#ff8c002d] from-[1%] via-sky-300 via-90% to-[#0000ff2d] to-100%"
    >
      <h3 className="m-auto max-w-[80%] text-2xl">
        These are some of my skills I use for software development.<br></br>
        <br></br>I also am familiar with Vite and NextJS, and deploying to AWS
        and Vercel.
      </h3>
      <div className="m-auto flex flex-wrap justify-center p-12">
        <div className="shadow-card m-[1rem] w-fit rounded-[5px] bg-[#fff] p-[1rem] text-center">
          <img
            className="mx-[20px] my-0 h-[64px] text-[3rem]"
            src={HTMLLogo}
            width="64"
            height="64"
            title="HTML5"
            alt="HTML logo"
          ></img>
          <p className="m-[2px] text-[1.6rem]">HTML</p>
        </div>
        <div className="shadow-card m-[1rem] w-fit rounded-[5px] bg-[#fff] p-[1rem] text-center">
          <img
            className="mx-[20px] my-0 h-[64px] text-[3rem]"
            src={CSSLogo}
            width="64"
            height="64"
            title="CSS3"
            alt="CSS logo"
          ></img>
          <p className="m-[2px] text-[1.6rem]">CSS</p>
        </div>
        <div className="shadow-card m-[1rem] w-fit rounded-[5px] bg-[#fff] p-[1rem] text-center">
          <img
            className="mx-[20px] my-0 h-[64px] text-[3rem]"
            src={JavaScriptLogo}
            alt="JavaScript logo"
          ></img>
          <p className="m-[2px] text-[1.6rem]">JavaScript</p>
        </div>
        <div className="shadow-card m-[1rem] w-fit rounded-[5px] bg-[#fff] p-[1rem] text-center">
          <img
            className="mx-[20px] my-0 h-[64px] text-[3rem]"
            src={NodeJSLogo}
            alt="NodeJS logo"
          ></img>
          <p className="m-[2px] text-[1.6rem]">Node</p>
        </div>
        <div className="shadow-card m-[1rem] w-fit rounded-[5px] bg-[#fff] p-[1rem] text-center">
          <img
            className="mx-[20px] my-0 h-[64px] text-[3rem]"
            src={ExpressLogo}
            alt="ExpressJS logo"
          ></img>
          <p className="m-[2px] text-[1.6rem]">Express</p>
        </div>
        <div className="shadow-card m-[1rem] w-fit rounded-[5px] bg-[#fff] p-[1rem] text-center">
          <img
            className="mx-[20px] my-0 h-[64px] text-[3rem]"
            src={ReactJSLogo}
            alt="ReactJS logo"
          ></img>
          <p className="m-[2px] text-[1.6rem]">React</p>
        </div>
        <div className="shadow-card m-[1rem] w-fit rounded-[5px] bg-[#fff] p-[1rem] text-center">
          <img
            className="mx-[20px] my-0 h-[64px] text-[3rem]"
            src={MongoDBLogo}
            alt="MongoDB logo"
          ></img>
          <p className="m-[2px] text-[1.6rem]">MongoDB</p>
        </div>
        <div className="shadow-card m-[1rem] w-fit rounded-[5px] bg-[#fff] p-[1rem] text-center">
          <img
            className="mx-[20px] my-0 h-[64px] text-[3rem]"
            src={GitLogo}
            height="64"
            alt="Git logo"
          ></img>
          <p className="m-[2px] text-[1.6rem]">Git/GitHub</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
