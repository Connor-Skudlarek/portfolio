import ProjectCard from "./projects/ProjectCard";

export default function Projects() {
  return (
    <div className="rounded-xl shadow-xl bg-slate-200 my-4 p-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12">
      <ProjectCard
        title={"Murphy"}
        description={"Some kind of nonsense"}
        media={["Item1", "Item2", "Item3"]}
      />
      <ProjectCard
        title={"Multi-Agent Stock Analysis"}
        description={"Some kind of nonsense"}
        media={["Item1", "Item2", "Item3"]}
      />
      <ProjectCard
        title={"Murphy"}
        description={"Some kind of nonsense"}
        media={["Item1", "Item2", "Item3"]}
      />
      <ProjectCard
        title={"Murphy"}
        description={"Some kind of nonsense"}
        media={["Item1", "Item2", "Item3"]}
      />
    </div>
  );
}
