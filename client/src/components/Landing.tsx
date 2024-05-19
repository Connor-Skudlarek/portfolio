import "../styles/Landing.css";
import Profile from "./Profile";
function Landing() {
  return (
    <div className="bg-[#f5f5dc80]">
      <div className="flex flex-col items-center max-w-prose font-[1.6rem] p-[20px] my-0 m-auto md:justify-between md:flex-row md:px-[150px] md:py-[40px] md:items-start">
        <Profile />
        <div className="flex flex-col ml-[50px] md:text-left">
          <h2 className="">
            Hello there! My name is Connor Skudlarek, and I'm a full-stack web
            developer.
          </h2>
          <hr className="w-[150px]" />
          <p className="">
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
