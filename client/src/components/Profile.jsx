import "../styles/Profile.css";
const profilePhoto = `${process.env.PUBLIC_URL}/logo192.png`;
const linkedInLogo = `${process.env.PUBLIC_URL}/LinkedIn-Circle.png`;
const githubLogo = `${process.env.PUBLIC_URL}/github-mark.png`;

function Profile() {
  return (
    <div class="Profile-container">
      <img
        class="Profile-photo"
        src={profilePhoto}
        alt="Connor Skudlarek, smiling in a collared blue shirt"
      />
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/connor-skudlarek/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="Profile-logo-image"
              src={linkedInLogo}
              alt="LinkedIn logo with link to Connor's LinkedIn"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Connor-Skudlarek"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="Profile-logo-image"
              src={githubLogo}
              alt="GitHub logo with link to Connor's GitHub"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
