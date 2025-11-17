import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

type AboutCardProps = {
  title: string;
  value: string;
  icon: React.ReactNode;
};

function AboutCard({ title, value, icon: Icon }: AboutCardProps) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-2">
        {Icon}
        <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">
          {value}
        </CardTitle>
        <CardDescription className="text-center text-slate-600 dark:text-slate-400">
          {title}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export default AboutCard;
