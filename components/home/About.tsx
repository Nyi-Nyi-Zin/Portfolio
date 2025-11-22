import { Text } from "../common/Text";
import { Title } from "../common/Title";
import { aboutCardData } from "@/lib/constants";
import AboutCard from "./AboutCard";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center border-b border-zinc-300 py-8 "
    >
      {/* Title above everything */}
      <Title className="text-4xl font-bold py-5 text-center">About Me</Title>

      {/* Text and cards side by side */}
      <div className="flex flex-col lg:flex-row w-full gap-10">
        {/* Left side: Text */}
        <div className="lg:w-1/2">
          <Text className="leading-relaxed">
            I am a passionate Full-Stack Software Developer, specialized in web
            and mobile development, with experience in multiple programming
            languages. Experienced in algorithms, data structures, and software
            architecture, with a focus on building scalable and maintainable
            applications across frontend and backend. Committed to continuous
            learning, solving complex problems, and delivering high-quality
            software.
          </Text>
          <br />
          <Text className="leading-relaxed">
            <strong>During my fourth year,</strong> I paused my university
            studies due to the country’s political situation and fully committed
            to advancing my career. I am currently resuming my studies while
            working remotely.
          </Text>
        </div>

        {/* Right side: Cards */}
        <div className="lg:w-1/2 grid lg:grid-cols-2 grid-cols-2 gap-5">
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
      </div>
    </section>
  );
}

export default About;
