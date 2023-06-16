import "../styles/Landing.css";
import Profile from "./Profile"
function Landing() {
  return (
    <div class="section0">
      <div class="Landing-container">
        <Profile />
        <div class="Landing-about-me">
          <h2 class="Landing-short-about-me">
            Hello there! My name is Connor Skudlarek, and I'm a full-stack web
            developer—skilled at using the MERN stack to create web apps that
            solve your business' needs.
          </h2>
          <hr class="Landing-about-me-break" />
          <p class="Landing-long-about-me">
            I graduated mechanical engineering with honors, have a background in
            the semiconductor industry as a service engineer, experience in
            agriculture, and can cook up a storm in a kitchen.
            <br />
            <br />
            Whether it's front end, back end, or a bit of both—I can help you
            take your ideas from paper to production.{" "}
            <strong><a href="#ContactMe">Let's talk!</a></strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
