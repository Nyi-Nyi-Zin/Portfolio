import Image from "next/image";
import { Title } from "../common/Title";
import { Text } from "../common/Text";
import AnimatedTextButton from "../common/AnimatedButton";
import { skills } from "@/lib/constants";
import { Button } from "../ui/button";
import { ArrowRight, Eye } from "lucide-react";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex lg:flex-row flex-col   border-b border-zinc-300 w-full  mx-auto justify-between gap-12 items-center"
    >
      <div className="flex-1 space-y-6 ">
        <Title className="lg:text-start text-center">Nyi Nyi Zin</Title>

        <Text className="text-center lg:text-start">
          Full-Stack Developer | Next.js, Golang, React.js, Express.js Expert
        </Text>

        <div className="flex space-y-8 items-center justify-center lg:justify-start  ">
          <AnimatedTextButton texts={skills} interval={2000} />
        </div>

        <div className="flex gap-3 flex-col lg:flex-row">
          <Button
            className="px-8 py-6 text-base font-bold flex items-center gap-4 text-white"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Hire Me
            <ArrowRight className="w-9 h-9" />
          </Button>

          <Button
            className="px-8 py-6 text-base font-bold   flex items-center gap-4 text-white bg-[#0d4768] hover:bg-[#052f47]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <Eye className="w-10 h-10" />
            View CV
          </Button>
        </div>
      </div>
      <div className="flex-1">
        <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] overflow-hidden rounded-full transition-transform duration-500 ease-in-out hover:scale-102">
          <Image
            src="/Miracle.jpg"
            alt="Nyi Nyi Zin - Full-Stack Developer portrait"
            width={400}
            height={400}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-108"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
