const profilePhoto = "/logo192.png";
const linkedInLogo = "/LinkedIn-Circle.png";
const githubLogo = "/github-mark.png";

function Profile() {
  return (
    <div className="align-center m-auto flex w-[300px] flex-col">
      <img
        className="m-auto h-[150px] w-[150px] rounded-[50%] object-cover p-1 shadow-profile1 shadow-profile2"
        src={profilePhoto}
        alt="Connor Skudlarek, smiling in a collared blue shirt"
      />
      <ul className="flex list-none justify-between p-0">
        <li className="m-auto">
          <a
            href="https://www.linkedin.com/in/connor-skudlarek/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="mt-[20px] h-auto w-[48px] transform rounded-[50%] p-0.5 shadow-logo1 shadow-logo2 transition-transform duration-200 ease-in-out hover:scale-[1.2]"
              src={linkedInLogo}
              alt="LinkedIn logo with link to Connor's LinkedIn"
            />
          </a>
        </li>
        <li className="m-auto">
          <a
            href="https://github.com/Connor-Skudlarek"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="mt-[20px] h-auto w-[48px] transform rounded-[50%] p-0.5 shadow-logo1 shadow-logo2 transition-transform duration-200 ease-in-out hover:scale-[1.2]"
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
