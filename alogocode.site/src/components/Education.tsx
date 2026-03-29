import { EDUCATION } from "@/content/education"

interface Education {
  date: string;
  degree: string;
  institution: string;
  description: string;
}

const Education = () => {
  return (
    <section className="flex flex-col max-w-[800px]">
      <div className="relative border-l-4 border-slate-700 ml-6">
        {EDUCATION.map((edu: Education, index: number) => (
          <div key={index} className="relative mb-10 ml-6">
            <div className="absolute w-4 h-4 bg-slate-700 rounded-full -left-[34px] top-1.5"></div>
            <p className="text-sm text-gray-500">{edu.date}</p>
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <h4 className="text-md text-gray-700 font-medium dark:text-gray-400">
              {edu.institution}
            </h4>
            {edu.description && (
              <p className="text-gray-600 mt-2">{edu.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education 