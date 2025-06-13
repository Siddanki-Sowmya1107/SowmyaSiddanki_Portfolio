import React from "react";
import { motion } from "framer-motion";

export default function WorkExperience() {
  const experiences = [
    {
      role: "Data Analytics Intern",
      company: "Twilearn Edutech",
      duration: "2-Month Virtual Internship",
      description:
        "Analyzed employee attrition patterns using HR data to identify key resignation factors. Applied EDA with Pandas, Seaborn, and Matplotlib, and built ML models like SVM, Logistic Regression, and Decision Trees to predict attrition risk. Delivered actionable insights through data visualization and reports.",
    },
    {
      role: "Volunteer Teacher",
      company: "Hold Child Christian School",
      duration: "Few Months",
      description:
        "Taught Class 8 and 9 students as a volunteer, contributing to education in under-resourced settings. Developed lesson plans and engaged students in subjects through innovative teaching methods.",
    },
  ];

  return (
    <section className="bg-creamWhite text-charcoalGray py-16 px-6" id="experience">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-darkOlive text-center mb-12"
        >
          Work Experience
        </motion.h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white shadow-md rounded-xl p-6 border-l-4 border-rustOrange"
            >
              <h3 className="text-2xl font-semibold text-darkOlive">{exp.role}</h3>
              <p className="text-sm italic mb-1">{exp.company}</p>
              <p className="text-xs text-gray-500 mb-3">{exp.duration}</p>
              <p className="text-base leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
