import { BriefcaseBusiness, Code, ShieldCheck, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

const iconMap = {
  briefcase: BriefcaseBusiness,
  code: Code,
  zap: Zap,
  shield: ShieldCheck,
};

const colorMap: Record<string, string> = {
  red: "text-red-500",
  blue: "text-blue-500",
  green: "text-green-500",
  purple: "text-purple-500",
};

type AboutCardProps = {
  title: string;
  value: string;
  icon: keyof typeof iconMap;
  color?: string;
};

export default function AboutCard({
  title,
  value,
  icon,
  color,
}: AboutCardProps) {
  const IconComponent = iconMap[icon];
  const iconColor = colorMap[color ?? ""] ?? "text-slate-500";

  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-2">
        <IconComponent size={48} className={iconColor} />

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
