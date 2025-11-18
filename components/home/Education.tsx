import React from "react";
import { SubTitle } from "../common/SubTitle";
import { Title } from "../common/Title";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import image from "next/image";

function Education() {
  return (
    <section
      id="education"
      className="min-h-screen flex flex-col items-center  border-b border-zinc-300 py-10 w-full"
    >
      <Title className="text-4xl font-bold">Education</Title>
      <SubTitle className=" py-5">My Academic Journey</SubTitle>

      <Card>
        <CardHeader>
          <CardTitle>Bachelor of Science in Computer Science</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>University of Sittwe</CardDescription>
          <CardDescription>July 2025 - July 2026</CardDescription>
          <span>Bachelor's Degree</span>
        </CardContent>
        <CardFooter>
          Advanced computer science studies focusing on software engineering,
          algorithms, and system design.
        </CardFooter>
      </Card>
    </section>
  );
}

export default Education;
