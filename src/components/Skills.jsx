import React from "react";

export default function Skills() {
  const skillCategories = {
    "Technical Skills": [
      "Python Programming",
      "SQL",
      "HTML",
      "CSS",
      "ReactJS",
      "Java (Basics)",
      "Machine Learning",
      "Data Visualization",
    ],
    "Tools & Platforms": [
      "Power BI",
      "Tableau",
      "Google Colab",
      "GitHub",
    ],
    "Soft Skills": [
      "Problem Solving",
      "Analytical Thinking",
      "Communication",
      "Collaboration",
      "Adaptability",
      "Time Management",
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
