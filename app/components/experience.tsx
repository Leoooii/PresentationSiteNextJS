import { Card } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    company: "CREATIV TUB",
    position: "System Engineer / IT Consultant",
    duration: "7 months",
    description:
      "As an IT Consultant, I worked on the company's website, handling its development and maintenance. I completed all my tasks, ensured the site met the company's needs, provided ongoing support to keep it running smoothly, and also managed the firm's IT maintenance.",
  },
  {
    company: "DIVERTILAND",
    position: "Lifeguard",
    duration: "2 months",
    description:
      "I worked as a lifeguard, a position that involved ensuring the safety of individuals in the recreational and relaxation area.",
  },
  {
    company: "RATEN-CITON",
    position: "IT Maintenance Intern",
    duration: "Practice",
    description:
      "I worked in IT maintenance, which involves monitoring, diagnosing, and resolving hardware and software problems for computers.",
  },
  {
    company: "PROJECT 13",
    position: "Web Development Intern",
    duration: "Practice",
    description:
      "I learned basic concepts and rules in HTML, CSS, JavaScript, and React, and I contributed to the development of two web projects.",
  },
]

export default function Experience() {
  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <Card
          key={index}
          className="p-6 bg-black/50 border-blue-500/30 shadow-lg shadow-blue-500/5 hover:shadow-blue-500/10 transition-all backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row md:items-start gap-4">
            <div className="flex-shrink-0 bg-blue-900/30 p-3 rounded-lg">
              <Briefcase className="h-6 w-6 text-blue-300" />
            </div>
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-blue-300">{exp.position}</h3>
                <div className="flex items-center text-blue-200 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{exp.duration}</span>
                </div>
              </div>
              <h4 className="text-lg font-medium text-blue-400 mb-2">{exp.company}</h4>
              <p className="text-blue-100">{exp.description}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

