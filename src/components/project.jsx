import React from "react";
import { SiGithub } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Fake Medicine Detector",
      description: "An intelligent system that detects counterfeit medicines based on QR codes. This ongoing project helps ensure medicine authenticity and protects consumers from fake pharmaceutical products.",
      status: "Ongoing",
      github: "https://github.com/mukulsingh24/Fake-Medicine-Detector",
      Live: "https://github.com/mukulsingh24/Fake-Medicine-Detector",
    },
    {
      id: 2,
      title: "PDF Merger",
      description: "A user-friendly application to merge multiple PDF files into a single document. Simple, fast, and efficient tool for combining PDFs without losing quality.",
      status: "Completed",
      github: "https://github.com/mukulsingh24/pdf-merger",
      Live: "https://pdf-merger-lilac-chi.vercel.app/",
    },
    {
      id: 3,
      title: "Portfolio",
      description: "A user-frienddly Portfolio Website,Enhanced the UI/UX with modern, responsive design patterns and styling improvements.",
      status: "Completed",
      github: "https://github.com/mukulsingh24/Portfolio",
      Live: "https://mukulsingh.netlify.app/",
    },
  ];

  return (
    <div className="text-white px-0" id="projects" style={{ backgroundColor: '#0f172a', paddingTop: '80px' }}>
      <div className="w-full bg-slate-900" style={{ paddingBottom: '0' }}>
        <h2 className="text-5xl font-bold text-center mb-16 px-10">
          My <span style={{ color: "#3b82f6" }}>Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10" style={{ paddingBottom: '32px' }}>
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800 rounded-lg border border-slate-700 hover:border-blue-400 transition duration-300 overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transform hover:scale-105"
            >
              {/* Project Header with Status */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <span
                    className="px-3 py-1 rounded-full text-sm font-semibold"
                    style={{
                      backgroundColor: project.status === "Ongoing" ? "#ef4444" : "#10b981",
                      color: "white",
                    }}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Body */}
              <div className="p-6 space-y-4">
                {/* Description */}
                <p className="text-gray-300 text-base leading-relaxed">
                  {project.description}
                </p>

                {/* GitHub and Live Demo Links */}
                <div className="pt-4 border-t border-slate-700 flex gap-6">
                  {/* GitHub Link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition duration-300 group"
                  >
                    <SiGithub size={24} className="group-hover:scale-110 transition duration-300" />
                    <span className="font-semibold group-hover:translate-x-1 transition duration-300 inline-block">
                      GitHub
                    </span>
                    <FaExternalLinkAlt size={16} className="opacity-0 group-hover:opacity-100 transition duration-300" />
                  </a>

                  {/* Live Demo Link */}
                  <a
                    href={project.Live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition duration-300 group"
                  >
                    {/* <SiGithub size={24} className="group-hover:scale-110 transition duration-300" /> */}
                    <span className="font-semibold group-hover:translate-x-1 transition duration-300 inline-block">
                      Live Demo
                    </span>
                    <FaExternalLinkAlt size={16} className="opacity-0 group-hover:opacity-100 transition duration-300" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
