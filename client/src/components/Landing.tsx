import Profile from "./Profile";

function Landing() {
  return (
    <div className="bg-themeColor1">
      <div className="m-[auto] flex max-w-[800px] flex-col items-center p-[20px] font-[1.6rem] md:flex-row md:justify-between md:p-12">
        <Profile />
        <div className="ml-[50px] flex flex-col md:text-left">
          <h2 className="">
            Hello there! My name is Connor Skudlarek, and I'm a full-stack web
            developer.
          </h2>
          <hr className="mx-auto my-6 w-[100%] max-w-[250px]" />
          <p className="">
            If you found yourself on this page, you probably just want to see my
            work and know what I can do.
          </p>
          <p>
            To save you time, you can{" "}
            <a href="#Experience">
              <strong>click here</strong>
            </a>{" "}
            to scroll to it immediately.
          </p>
          <p>
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
