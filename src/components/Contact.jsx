import React from "react";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-creamWhite py-16 px-6 text-charcoalGray font-modern"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-darkOlive mb-8">Contact Me</h2>
        <p className="text-lg mb-6">
          Feel free to reach out via email or connect with me on LinkedIn and GitHub!
        </p>
        <div className="flex justify-center space-x-6 text-2xl text-darkOlive">
          <a
            href="mailto:sowmyasiddanki@email.com"
            aria-label="Email"
            className="hover:text-rustOrange transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/siddanki-sowmya1107"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-rustOrange transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Siddanki-Sowmya1107"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-rustOrange transition"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}

