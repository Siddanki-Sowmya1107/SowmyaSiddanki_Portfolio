import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-3xl mx-auto my-20 px-6 bg-creamWhite text-charcoalGray font-modern rounded-lg shadow-lg"
      style={{ backgroundColor: "#FAF3E0" }} // creamWhite
    >
      <h2
        className="text-4xl font-extrabold mb-8"
        style={{ color: "#2C7A7B" }} // richTeal (darkOlive)
      >
        About Me
      </h2>
      <p className="text-lg mb-6 leading-relaxed" style={{ color: "#4A5568" }}>
        Hello! I'm <span style={{ color: "#2C7A7B", fontWeight: "600" }}>Sowmya</span>, a curious and creative Data Scientist passionate about turning raw data into impactful stories and actionable insights.
      </p>
      <p className="text-lg mb-6 leading-relaxed" style={{ color: "#4A5568" }}>
        With a strong foundation in machine learning, data visualization, and software development, I enjoy crafting elegant solutions that blend technical depth with real-world usability.
      </p>
      <ul className="list-disc list-inside text-lg space-y-2" style={{ color: "#4A5568" }}>
        <li>Experienced in Python, SQL, and modern data analytics tools</li>
        <li>Skilled at building end-to-end data pipelines and models</li>
        <li>Passionate about continuous learning and innovative problem solving</li>
      </ul>
    </section>
  );
}
