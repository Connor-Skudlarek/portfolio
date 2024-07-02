export default function Header() {
  return (
    <header className="flex flex-row justify-between p-2 bg-slate-200 mb-4 top-0 fixed w-full h-14">
      <p className="md:block p-2 font-bold text-xl">
        {"<"}
        <span className="text-orange-400">C</span>onnor
        <span className="text-orange-400">S</span>kudlarek {"/>"}
      </p>
      <nav>
        <ul className="hidden md:flex flex-row [&>*]:p-2 [&>*]:mx-4 text-xl">
          <a href="/home">
            <li>Home</li>
          </a>
          <a href="/about">
            <li>About Me</li>
          </a>
          <a href="/projects">
            <li>Projects</li>
          </a>
          <a href="/contact">
            <li>Contact</li>
          </a>
        </ul>
      </nav>
    </header>
  );
}
