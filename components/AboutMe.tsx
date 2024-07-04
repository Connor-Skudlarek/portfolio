export default function AboutMe() {
  return (
    <div className="rounded-xl shadow-xl bg-slate-200 my-4 p-4">
      <p className="bg-slate-200 my-4 p-4 mx-10">
        My skillset extends through the full stack of web development. I
        volunteer as a lead developer at{" "}
        <a href="/4human">
          <span className="font-bold text-orange-400">4Human Corporation</span>
        </a>
        , where I use modern web technologies like NextJS to create custom
        software for other charities.
      </p>
      <p className="bg-slate-200 my-4 p-4 mx-10">
        I also have an interest in data, statistics & probability, and machine
        learning. I am currently working on custom market analysis tooling,
        utilizing multi-agent systems to simulate irrational agents in a
        rational market.
      </p>
      <p className="bg-slate-200 my-4 p-4 md:ml-10 hidden sm:block">
        <code>
          <span className="text-[rgba(190,30,210,0.8)]">if {"("}</span>{" "}
          <span className="text-[rgba(0,140,190,0.8)]">
            hiringExcellentEngineer
          </span>{" "}
          == <span className="text-[rgba(0,70,220)]">true</span>
          <span className="text-[rgba(190,30,210,0.8)]"> {") {"}</span>
        </code>
        <br />
        <code className="ml-8">
          {"<"}
          <span className="text-[rgba(0,70,220)]">{"a"}</span>{" "}
          <span className="text-[rgba(0,140,190,0.8)]">{"href"}</span>
          {"="}
          <span className="text-orange-700/90">
            {'"mailto:connor.skudlarek@gmail.com"'}
          </span>
          {">"}
        </code>
        <br />
        <code className="ml-16 text-orange-400 font-bold animate-[]">
          <a href="mailto:connor.skudlarek@gmail.com">Click here to hire me!</a>{" "}
        </code>
        <code className="text-green-700">{"// Opens a new email"}</code>
        <br />
        <code className="ml-8">
          {"</"}
          <span className="text-[rgba(0,70,220)]">{"a"}</span>
          {">"}
        </code>

        <br />
        <code className="text-[rgba(190,30,210,0.8)]">{"}"}</code>
        <br />
      </p>
    </div>
  );
}
