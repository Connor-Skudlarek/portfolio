import "../styles/Landing.css";
const profilePhoto = `${process.env.PUBLIC_URL}/logo192.png`;

function Landing() {
  return (
    <div>
      <div class="profile">
        <div class="call-to-action">
          <img
            class="profile-photo"
            src={profilePhoto}
            alt="Connor Skudlarek, smiling in a collared blue shirt"
          />
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/connor-skudlarek/">
                <img
                class="logo-image"
                  src={profilePhoto} // Update this with logo
                  alt="LinkedIn logo with link to Connor's LinkedIn"
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/Connor-Skudlarek">
                <img
                class="logo-image"
                  src={profilePhoto} // Update this with logo
                  alt="GitHub logo with link to Connor's GitHub"
                />
              </a>
            </li>
          </ul>
        </div>
        <div class="about-me">
          <p class="short-about-me">
            Full-stack web developer, skilled at using the MERN stack to create
            web apps that solve your business' needs.
          </p>
          <p class="long-about-me">
            I graduated mechanical engineering with honors, have a background in
            the semiconductor industry as a service engineer, experience in
            agriculture, and can cook up a storm in a kitchen. Whether it's
            front end, back end, or a bit of both—I can help you take your ideas
            from paper to production.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
