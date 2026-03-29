import { SKILLS } from "@/content/skills"
import { Badge } from "./ui/badge"

const Skills = () => {
  return (
    <div className="flex flex-col gap-8 max-w-[800px]">
      <div>
        <h3 className="text-xl font-semibold mb-4">Languages</h3>
        <div className="flex flex-wrap gap-2">
          {SKILLS.languages.map((skill, index) => (
            <Badge
              key={index}
              className="bg-slate-800 text-slate-200 dark:text-slate-800 dark:bg-slate-200"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {SKILLS.technologies.map((skill, index) => (
            <Badge
              key={index}
              className="bg-slate-800 text-slate-200 dark:text-slate-800 dark:bg-slate-200"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills 