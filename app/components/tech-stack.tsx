import { Card } from "@/components/ui/card"

const technologies = [
  {
    category: "Frontend",
    skills: ["JavaScript", "React", "React Native", "Redux", "Next.js", "HTML", "CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "Mongoose", "SQL"],
  },
  {
    category: "Tools & Version Control",
    skills: ["Git", "GitHub"],
  },
]

export default function TechStack() {
  return (
    <div className="grid gap-6">
      {technologies.map((tech) => (
        <Card
          key={tech.category}
          className="p-6 bg-black/50 border-blue-500/30 shadow-lg shadow-blue-500/5 hover:shadow-blue-500/10 transition-all backdrop-blur-sm"
        >
          <h3 className="text-lg font-semibold mb-4 text-blue-300">{tech.category}</h3>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md bg-blue-950/50 px-2 py-1 text-sm font-medium text-blue-300 ring-1 ring-inset ring-blue-500/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}

