import "../styles/Landing.css";
const profilePhoto = `${process.env.PUBLIC_URL}/logo192.png`;
const linkedInLogo = `${process.env.PUBLIC_URL}/LinkedIn-Circle.png`;
const githubLogo = `${process.env.PUBLIC_URL}/github-mark.png`;

function Landing() {
  return (
    <div>
      <div class="Landing-profile">
        <div class="Landing-call-to-action">
          <img
            class="Landing-profile-photo"
            src={profilePhoto}
            alt="Connor Skudlarek, smiling in a collared blue shirt"
          />
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/connor-skudlarek/">
                <img
                  class="Landing-logo-image"
                  src={linkedInLogo}
                  alt="LinkedIn logo with link to Connor's LinkedIn"
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/Connor-Skudlarek">
                <img
                  class="Landing-logo-image"
                  src={githubLogo}
                  alt="GitHub logo with link to Connor's GitHub"
                />
              </a>
            </li>
          </ul>
        </div>
        <div class="Landing-about-me">
          <h2 class="Landing-short-about-me">
            Full-stack web developer, skilled at using the MERN stack to create
            web apps that solve your business' needs.
          </h2>
          <hr class="Landing-about-me-break" />
          <p class="Landing-long-about-me">
            I graduated mechanical engineering with honors, have a background in
            the semiconductor industry as a service engineer, experience in
            agriculture, and can cook up a storm in a kitchen.
            <br />
            <br />
            Whether it's front end, back end, or a bit of both—I can help you
            take your ideas from paper to production.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
