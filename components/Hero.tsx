import Image from "next/image";
export default function Hero() {
  return (
    <div className="pt-4 mt-4 w-full bg-slate-200 rounded-xl">
      <img
        src="https://media.licdn.com/dms/image/D5603AQH_wkAXHmhKQQ/profile-displayphoto-shrink_400_400/0/1670614981025?e=1725494400&v=beta&t=Qz2QjoXTectvvvlACGWLC1JiqegaaGonwdbTaHJNK64"
        alt=""
        className="rounded-[10%] border-2 border-orange-700/60 mt-4 bg-slate-200 max-w-[256px] mx-auto"
      />
      <p className="max-w-[768px] rounded bg-slate-200 p-16 mx-auto">
        Hi, {"I’m"}{" "}
        <span className="font-bold text-orange-400">Connor Skudlarek</span>, a
        mechanical engineering graduate with a passion for programming, data,
        and solving business needs through software.{" "}
      </p>
      <div className="flex flex-col p-4">
        <button
          className="text-orange-400 font-bold mx-auto
        block p-4 rounded mb-4 shadow-[5px_12px_15px_-3px_rgba(10,30,70,0.5)]
        bg-[rgba(10,30,70,0.9)] ease-in-out
        hover:-translate-y-1 hover:scale-110 hover:bg-slate-800
        hover:shadow-[8px_12px_15px_-6px_rgba(10,30,70,0.8)]
        hover:text-orange-200 duration-300 delay-[50ms]"
        >
          <a href="https://linkedin.com/in/connor-skudlarek" className="">
            Let{"'"}s connect!{" "}
          </a>
        </button>
        <ul className="flex flex-row gap-4 mx-auto my-4 h-[64px]">
          <a href="https://linkedin.com/in/connor-skudlarek">
            <Image
              className="mr-2 bg-white p-2 rounded h-[54px] shadow-[3px_5px_8px_-3px_rgba(10,30,70,0.7)]
        bg-[rgba(10,30,70,0.9)] ease-in-out
        hover:-translate-y-1 hover:scale-110
        hover:text-orange-200 duration-300 delay-[50ms] hover:shadow-[8px_12px_15px_-6px_rgba(10,30,70,0.8)]"
              src="/LI-In-Bug.png"
              alt="LinkedIn icon shorthand style"
              height="54"
              width="64"
            />
          </a>
          <a href="https://github.com/connor-skudlarek">
            <Image
              className="bg-white p-2 rounded h-[54px] shadow-[3px_5px_8px_-3px_rgba(10,30,70,0.7)]
        bg-[rgba(10,30,70,0.9)] ease-in-out
        hover:-translate-y-1 hover:scale-110
        hover:text-orange-200 duration-300 delay-[50ms] hover:shadow-[8px_12px_15px_-6px_rgba(10,30,70,0.8)]"
              src="/github-mark.png"
              alt="GitHub brand logo"
              height="54"
              width="54"
            />
          </a>
        </ul>
      </div>
    </div>
  );
}
