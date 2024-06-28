import Image from "next/image";
import profilePhoto from "../../../public/hero-photo.jpg";

export default function Hero() {
  return (
    <div className="container flex flex-row">
      <div className="flex flex-col gap-[48px]">
        <div className="flex flex-col">
          <h1 className="font-[60px] font-bold leading-[72px]">
            Hi, I{"'"}m Connor 👋
          </h1>
          <p className="font-slate-800">
            I{"'"}m a full stack developer experienced in quickly delivering
            fast, quality experiences in responsive and accessible web
            applications.
          </p>
        </div>
        <div className="flex flex-col">
          <p className="font-slate-800">
            <span></span>Portland, OR
          </p>
          <p className="font-slate-800">
            <span></span>Looking for work
          </p>
        </div>
        <div className="flex flex-row">
          <span className="font-slate-800">Github</span>
          <span className="font-slate-800">LinkedIn</span>
        </div>
      </div>
      <div className="h-fit min-w-[384px]">
        <Image
          src={profilePhoto}
          alt="Connor head shot"
          width={280}
          height={280}
        />
      </div>
    </div>
  );
}
