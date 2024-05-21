const HTMLLogo = "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png";
function SkillCard() {
  <div className="shadow-card m-[1rem] w-fit rounded-[5px] bg-[#fff] p-[1rem] text-center">
    <img
      className="mx-[20px] my-0 h-[64px] text-[3rem]"
      src={HTMLLogo} // Need this to come from data
      width="64"
      height="64"
      title="HTML5" // Need this to come from data
      alt="HTML logo" // Need this to come from data
    ></img>
    <p className="m-[2px] text-[1.6rem]">HTML</p>{" "}
    {/* Need this to come from data */}
  </div>;
}

export default SkillCard;
