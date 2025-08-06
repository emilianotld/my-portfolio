import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 50, category: "Frontend" },
  { name: "JavaScript", level: 50, category: "Frontend" },
  { name: "React", level: 50, category: "Frontend" },
  { name: "TypeScript", level: 10, category: "Frontend" },
  { name: "Tailwindcss", level: 50, category: "Frontend" },

  // Backend
  { name: "Node.js", level: 40, category: "Backend" },
  { name: "Java", level: 50, category: "Backend" },
  { name: "Express", level: 30, category: "Backend" },
  { name: "MongoDB", level: 20, category: "Backend" },
  { name: "MySQL", level: 50, category: "Backend" },

  // Tools
  { name: "Git/Github", level: 25, category: "Tools" },
  { name: "Docker", level: 10, category: "Tools" },
  { name: "Figma", level: 5, category: "Tools" },
  { name: "VS Code", level: 60, category: "Tools" },
];

const categories = ["all", "Frontend", "Backend", "Tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {" "}
          My <span className="text-primary"> Skills </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full trasition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full- bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
