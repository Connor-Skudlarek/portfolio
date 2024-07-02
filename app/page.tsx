import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import AboutMe from "@/components/AboutMe";
export default function Page() {
  return (
    <main className="mx-auto">
      <Header />
      <div className="container mx-auto pt-14">
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
        <Footer />
      </div>
    </main>
  );
}
