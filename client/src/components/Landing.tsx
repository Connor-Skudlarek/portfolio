import Profile from "./Profile";

function Landing() {
  return (
    <div className="snap-y snap-center bg-gradient-to-bl from-[#ff8c002d] from-[1%] via-sky-300 via-90% to-[#0000ff2d] to-100% pt-20 text-[#000] lg:h-[100vh]">
      <div className="m-auto flex flex-col items-center p-[20px] font-[1.6rem] md:w-[80%] md:flex-row md:justify-between md:p-12">
        <Profile />
        <div className="m-auto ml-[50px] flex flex-col md:text-left">
          <h2 className="text-5xl">
            Hello there! My name is Connor Skudlarek, and I'm a full-stack web
            developer.
          </h2>
          <hr className="mx-auto my-16 w-[100%] max-w-[250px] border border-slate-400" />
          <p className="text-2xl">
            If you found yourself on this page, you probably just want to see my
            work and know what{" "}
            <a href="#Skills">
              <strong>I can do</strong>
            </a>
            .
          </p>
          <br></br>
          <p className="text-2xl">
            To save you time, you can{" "}
            <a href="#Experience">
              <strong>click here</strong>
            </a>{" "}
            to scroll to it immediately.
          </p>
          <br></br>
          <p className="text-2xl">
            And if you think we could work together,{" "}
            <strong>
              <a href="#ContactMe">
                <strong>let's talk!</strong>
              </a>
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
