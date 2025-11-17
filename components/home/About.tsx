import { Text } from "../common/Text";
import { Title } from "../common/Title";
import { aboutCardData } from "@/lib/constants";
import AboutCard from "./AboutCard";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center border-b border-zinc-300 py-15"
    >
      <Title className="text-4xl font-bold py-5">About Me</Title>

      <Text>
        I am a passionate Full-Stack Software Developer, specialized in web and
        mobile development, with experience in multiple programming languages.
        Experienced in algorithms, data structures, and software architecture,
        with a focus on building scalable and maintainable applications across
        frontend and backend. Committed to continuous learning, solving complex
        problems, and delivering high-quality software.
      </Text>

      <div className="grid lg:grid-cols-4 grid-cols-2 w-full my-10 gap-5">
        {aboutCardData.map((item) => (
          <AboutCard
            key={item.title}
            title={item.title}
            value={item.value}
            icon={item.icon}
            color={item.color}
          />
        ))}
      </div>
    </section>
  );
}

export default About;
