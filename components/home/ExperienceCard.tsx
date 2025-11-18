import React from "react";
import { Card, CardHeader, CardContent } from "../ui/card";
import { SubTitle } from "../common/SubTitle";
import { Calendar, Dot, MapPin, Trophy } from "lucide-react";
import { Text } from "../common/Text";

// Define the type for a single experience item
export type ExperienceItem = {
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  keyAchievements: string[];
};

// Accept the whole item as a prop
type ExperienceCardProps = {
  item: ExperienceItem;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ item }) => {
  return (
    <Card className="p-4 w-full  my-4  px-6 ">
      <div className="space-y-1 ">
        <div className="flex items-center justify-between gap-3">
          <SubTitle className="font-bold text-black dark:text-white ">
            {item.title}
          </SubTitle>
          <span className="bg-green-200 rounded-full px-3 text-green-700">
            FullTime
          </span>
        </div>
        <h3 className="text-2xl font-bold text-blue-600">{item.company}</h3>
        <span className="text-sm text-muted-foreground inline space-x-2">
          <Calendar className="inline-block text-green-600" />
          {
            item.period
          } <MapPin className="inline-block ml-2 text-orange-400" />{" "}
          {item.location}
        </span>
      </div>

      <div>
        <div className="flex items-center mb-2">
          <Trophy className="text-red-600 mr-2" />
          <h4 className="text-base font-bold text-slate-600">
            Key Achievements
          </h4>
        </div>

        <ul className=" space-y-2">
          {item.keyAchievements.map((achieve, index) => (
            <li key={index} className="flex items-start space-x-2">
              <Dot strokeWidth={6} className="text-green-500" />

              <span>{achieve}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default ExperienceCard;
