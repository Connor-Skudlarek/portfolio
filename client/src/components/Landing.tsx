import "../styles/Landing.css";
import Profile from "./Profile";
function Landing() {
  return (
    <div className="section0">
      <div className="Landing-container">
        <Profile />
        <div className="Landing-about-me">
          <h2 className="Landing-short-about-me">
            Hello there! My name is Connor Skudlarek, and I'm a full-stack web
            developer.
          </h2>
          <hr className="Landing-about-me-break" />
          <p className="Landing-long-about-me">
            If you found yourself on this page, you probably just want to see my
            work and know what I can do.
          </p>
          <p>
            To save you time, you can <a href="#Experience">click here</a> to
            scroll to it immediately.
          </p>
          <p>
            And if you think we could work together,{" "}
            <strong>
              <a href="#ContactMe">let's talk!</a>
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
