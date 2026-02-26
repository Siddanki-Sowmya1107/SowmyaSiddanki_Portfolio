// src/components/Projects.jsx
import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Customer Segmentation using ML models for E-commerce websites",
      date: "09/2024 – 12/2024",
      bullets: [
        "Designed an end-to-end cloud-based customer segmentation pipeline using Microsoft Azure, with data ingestion and orchestration handled through Azure Data Factory and storage in Azure SQL Database.",
        "Built and trained K-Means clustering models using Azure Machine Learning, optimizing the number of clusters with Silhouette Score and Elbow Method to improve segment clarity and interpretability.",
        "Visualized customer segments and business insights using Azure analytics workflows, enabling scalable and automated model execution without relying on local environments.",
      ],
      tech: [
        "Azure Data Factory",
        "Azure SQL Database",
        "Azure Machine Learning",
        "Python",
        "K-Means",
      ],
      link: "https://github.com/Siddanki-Sowmya1107/azure-customer-segmentation", // add GitHub/demo later if you want
    },
    {
      title: "Sentiment-Driven Recommendation System for E-Commerce",
      date: "02/2024 – 06/2024",
      bullets: [
        "Built a scalable recommendation engine using collaborative filtering and NLP on 50K+ customer reviews, improving recommendation relevance by ~30% using TF-IDF and cosine similarity.",
        "Addressed cold-start and sparse data challenges through similarity-based modeling and evaluation metrics, improving personalization and product coverage.",
        "Deployed a real-time multi-user Streamlit application; optimized data pipelines to reduce latency by ~25% and increase product discoverability by ~20%.",
        
      ],
      tech: [
        "Python",
        "NLP",
        "TF-IDF",
        "Cosine Similarity",
        "Collaborative Filtering",
        "Streamlit",
      ],
      link: "https://github.com/Siddanki-Sowmya1107/Sentiment_Driven_RecommendationSystem", // add GitHub/demo later
    },
    {
      title: "Deep Learning–Based Retrieval Augmented Generation (RAG) System",
      date: "01/2025 – 04/2025",
      bullets: [
        "Built a deep learning–based RAG system using Python, transformer-based embedding models, and a GPT-based large language model to answer questions from large unstructured document collections.",
        "Implemented document chunking, embedding generation, and vector similarity search using PostgreSQL with vector extensions to retrieve the most relevant text passages for each query.",
        "Integrated retrieved context with the GPT-based model to generate accurate, context-aware responses, reduced hallucinations, and evaluated performance using relevance, coherence, and consistency metrics.",
      ],
      tech: [
        "Python",
        "Transformers",
        "PostgreSQL (vector)",
        "Vector Search",
        "RAG",
        "GPT-based LLM",
      ],
      link: "https://github.com/Siddanki-Sowmya1107/rag-hybrid-pgvector", // add GitHub/demo later
    },
  ];

  return (
    <section
      id="projects"
      className="bg-creamWhite text-charcoalGray py-16 px-6 font-modern"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-darkOlive">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 border-l-4 border-rustOrange hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-darkOlive mb-1">
                {project.title}
              </h3>

              <p className="text-sm italic text-rustOrange mb-4">
                {project.date}
              </p>

              <ul className="list-disc list-inside space-y-2 text-charcoalGray mb-5">
                {project.bullets.map((point, i) => (
                  <li key={i} className="leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-rustOrange/10 text-charcoalGray px-3 py-1 text-xs rounded-full"
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
                  className="text-sm underline text-rustOrange hover:text-darkOlive"
                >
                  View Project ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}