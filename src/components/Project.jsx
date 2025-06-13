import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Recommendation System Driven by Sentiment Analysis",
      place: "Institute of Aeronautical Engineering",
      description:
        "Developed an advanced recommendation engine for e-commerce using ML and sentiment analysis. Used collaborative and content-based filtering with Google Colab and Python.",
      tech: ["Python", "ML", "Google Colab", "Sentiment Analysis"],
    },
    {
      title: "Customer Segmentation Using Unsupervised Learning",
      place: "Independent Project – Summer Break, 3rd Year B.Tech",
      description:
        "Built a pipeline to cluster customers based on purchasing patterns using K-Means, Agglomerative Clustering, and PCA. Evaluated clusters using Elbow, Silhouette, and Davies-Bouldin Index.",
      tech: ["Python", "K-Means", "PCA", "Clustering"],
    },
    {
      title: "Sentiment Analysis on Amazon Alexa Reviews",
      place: "Institute of Aeronautical Engineering",
      description:
        "Analyzed Alexa reviews using NLP techniques for text preprocessing and model building. Achieved high accuracy in predicting customer sentiment.",
      tech: ["Python", "NLP", "Text Classification"],
    },
    {
      title: "Tableau Sales Dashboard",
      place: "GitHub Repo",
      description:
        "Designed an interactive dashboard displaying key sales metrics like revenue, profit, and trends. Used filtering and storytelling features in Tableau.",
      tech: ["Tableau", "Data Visualization"],
      link: "https://github.com/Siddanki-Sowmya1107/Tableau-SalesDashboard",
    },
  ];

  return (
    <section
      className="py-16 px-6 rounded-lg shadow-lg max-w-6xl mx-auto"
      style={{ backgroundColor: "#FAF3E0" }} // creamWhite
      id="projects"
    >
      <h2
        className="text-4xl font-bold mb-12 text-center"
        style={{ color: "#2C7A7B" }} // richTeal
      >
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-[1.02]"
          >
            <h3
              className="text-xl font-semibold mb-1"
              style={{ color: "#2C7A7B" }} // richTeal
            >
              {project.title}
            </h3>
            <p
              className="text-sm mb-3 italic"
              style={{ color: "#E07A5F" }} // warmCoral for accent
            >
              {project.place}
            </p>
            <p className="mb-4" style={{ color: "#4A5568" }}>
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full"
                  style={{
                    backgroundColor: "#D4AF7F", // mutedGold
                    color: "#FAF3E0", // softIvory text
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline hover:text-[#2C7A7B]"
                style={{ color: "#E07A5F" }} // warmCoral link color
              >
                View Project ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
