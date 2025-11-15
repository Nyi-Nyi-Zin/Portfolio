import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col bg-zinc-50 dark:bg-black font-sans">
      {/* HOME */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center border-b border-zinc-300"
      >
        <h1 className="text-4xl font-bold">Home Section</h1>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center border-b border-zinc-300"
      >
        <h1 className="text-4xl font-bold">About Section</h1>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="min-h-screen flex items-center justify-center border-b border-zinc-300"
      >
        <h1 className="text-4xl font-bold">Experience Section</h1>
      </section>

      {/* SKILL */}
      <section
        id="skill"
        className="min-h-screen flex items-center justify-center border-b border-zinc-300"
      >
        <h1 className="text-4xl font-bold">Skill Section</h1>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center border-b border-zinc-300"
      >
        <h1 className="text-4xl font-bold">Projects Section</h1>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center border-b border-zinc-300"
      >
        <h1 className="text-4xl font-bold">Contact Section</h1>
      </section>

      {/* BLOGS */}
      <section
        id="blogs"
        className="min-h-screen flex items-center justify-center border-b border-zinc-300"
      >
        <h1 className="text-4xl font-bold">Blogs Section</h1>
      </section>
    </main>
  );
}
