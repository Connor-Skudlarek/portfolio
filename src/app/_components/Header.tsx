export default function Header() {
  return (
    <div className="container">
      <header className="flex flex-row justify-between px-[32px]">
        <p className="font-slate-900 font-[30px] leading-9">{"<CS />"}</p>
        <nav className="font-slate-600 flex flex-row gap-[24px] p-2">
          <a className="" href="/about">
            About
          </a>
          <a href="/work">Work</a>
          <a href="testimonials">Testimonials</a>
          <a href="contact">Contact</a>
        </nav>
      </header>
    </div>
  );
}
