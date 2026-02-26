import React from "react";

export default function Skills() {
  const skillCategories = {
  "Programming & Query Languages": [
    "Python",
    "SQL",
    "JavaScript",
    "Java",
    "Shell Script",
  ],

  "Web & Application Development": [
    "React.js",
    "HTML",
    "CSS",
    "Streamlit",
  ],

  "Data Science & Machine Learning": [
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "TensorFlow",
    "Keras",
    "Transformer Models",
    "RAG Systems",
  ],

  "Data Visualization & BI": [
    "Power BI",
    "Tableau",
  ],

  "Databases": [
    "PostgreSQL",
    "MySQL",
    "Microsoft SQL Server",
    "MongoDB",
    "Oracle",
  ],

  "Cloud & MLOps": [
    "Microsoft Azure",
    "Azure Data Factory",
    "Azure Machine Learning",
    "Azure Databricks",
    "Azure SQL",
    "Git",
    "GitHub",
    "Azure DevOps",
  ],

  "Professional Skills": [
    "Analytical Thinking",
    "Problem Solving",
    "Communication",
    "Collaboration",
    "Adaptability",
  ],
};
  return (
    <section
      id="skills"
      className="bg-creamWhite py-16 px-6 text-charcoalGray font-modern"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-darkOlive mb-12">
          Skills & Tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {Object.entries(skillCategories).map(([category, skills], idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold text-rustOrange mb-4 border-b border-mutedGold pb-2">
                {category}
              </h3>
              <ul className="space-y-2">
                {skills.map((skill, index) => (
                  <li
                    key={index}
                    className="bg-rustOrange/10 text-charcoalGray px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition duration-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
