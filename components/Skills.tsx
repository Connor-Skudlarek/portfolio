export default function Skills() {
  return (
    <div className="rounded-xl shadow-xl bg-slate-200 my-4 p-4">
      <h3 className="my-4 p-4 mx-10">
        This is a quick look at my most practiced skills.
      </h3>
      <div className="flex flex-row mx-auto gap-10 ml-20">
        <ul className="my-4 p-4 mx-10 list-disc">
          <li>HTML and CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>NextJS</li>
        </ul>
        <ul className="my-4 p-4 mx-10 list-disc">
          <li>MongoDB</li>
          <li>Express</li>
          <li>Node</li>
          <li>PostgreSQL</li>
          <li>AWS</li>
        </ul>
      </div>
    </div>
  );
}
