type project = {
  title: string;
  description: string;
  media: string[];
};

export default function ProjectCard(props: project) {
  const title: string = props.title;
  const description: string = props.description;
  const media: string[] = props.media;
  let mediaItems = media.map((item: string) => <li key={item}>{item}</li>);
  return (
    <div className="shadow bg-blue-200/50 p-6 rounded">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="h-[30vh]">{mediaItems}</div>
    </div>
  );
}
