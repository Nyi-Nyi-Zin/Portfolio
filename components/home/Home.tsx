import Image from "next/image";
import { Title } from "../common/Title";
import { SubTitle } from "../common/SubTitle";
import { Text } from "../common/Text";
import AnimatedTextButton from "../common/AnimatedButton";
import { Skills } from "@/lib/constants";
import { Button } from "../ui/button";
import { ArrowRight, Eye } from "lucide-react";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex  border-b border-zinc-300 w-full my-20 mx-auto px-8 justify-between gap-50"
    >
      <div className="flex-1">
        <Title>Nyi Nyi Zin</Title>
        <br />
        <br />
        <Text>
          Full-Stack Developer | Next.js, Golang, React.js, Express.js Expert
        </Text>
        <br /> <AnimatedTextButton texts={Skills} interval={2000} />
        <br />
        <br />
        <div className="flex gap-3 ">
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
        <div className=" w-[400px] h-[400px] overflow-hidden rounded-full border-2 border-blue-300 object-cover transition-transform duration-500 ease-in-out  hover:scale-102">
          <Image
            src="/Miracle.jpg"
            alt="asd"
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
