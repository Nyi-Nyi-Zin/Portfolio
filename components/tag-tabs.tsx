"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const tags = [
  { value: "all", label: "All" },
  { value: "sharing", label: "sharing" },
  { value: "api", label: "API" },
  { value: "testing", label: "testing" },
  { value: "ai", label: "ai" },
  { value: "golang", label: "Golang" },
  { value: "webhook", label: "web hook" },
  { value: "extensions", label: "extensions" },
  { value: "expo", label: "Expo" },
  { value: "docker", label: "docker" },
  { value: "typescript", label: "typescript" },
  { value: "react", label: "react" },
] as const;

export type TagValue = (typeof tags)[number]["value"];

interface TagTabsProps {
  value: TagValue;
  onValueChange: (value: TagValue) => void;
}

export function TagTabs({ value, onValueChange }: TagTabsProps) {
  const handleValueChange = (newValue: string) => {
    onValueChange(newValue as TagValue);
  };

  return (
    <div className="w-full bg-background overflow-y-auto px-2">
      <Tabs value={value} onValueChange={handleValueChange}>
        <TabsList className="inline-flex h-auto min-h-10 items-center justify-start border-b-0 bg-transparent p-0 gap-2">
          {tags.map((tag) => (
            <TabsTrigger
              key={tag.value}
              value={tag.value}
              className="
                  rounded-sm 
                  border 
                  border-gray-300
                  px-4 
                  py-1.5 
                  text-sm 
                  font-medium
                  transition-all
                  data-[state=active]:border 
                  data-[state=active]:border-primary/20
                  data-[state=active]:bg-primary 
                  data-[state=active]:text-primary-foreground
                  data-[state=active]:shadow-sm
                  hover:bg-accent 
                  hover:text-accent-foreground
                  focus-visible:outline-none 
                  focus-visible:ring-2 
                  focus-visible:ring-ring 
                  focus-visible:ring-offset-2
                  my-5
                "
            >
              {tag.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}
