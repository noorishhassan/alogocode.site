interface Education {
  date: string;
  degree: string;
  institution: string;
  description: string;
}

export const EDUCATION: Education[] = [
  {
    date: "Apr 2024 - Present",
    degree: "M.Sc. Informatiks",
    institution: "Universität des Saarlandes, Saarbrücken, Germany",
    description: `Focus on Exploratory Data Analysis, Information Theory, and Human Learning.`
    // description: "German Grade: 2.4, Equivalent to US CGPA: 3.0-3.25"
  },
  {
    date: "Sep 2017 - Sep 2021",
    degree: "B.Sc. Computer Science",
    institution: "National University of Computer and Emerging Sciences, Lahore, Pakistan",
    description: `Focus on Algorithms, Data Structures, Information Retrieval and Data Science.`

    // description: "CGPA: 3.44 / 4.00"
  }
] 