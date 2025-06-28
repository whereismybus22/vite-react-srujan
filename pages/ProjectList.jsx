import React, { useState } from "react";
import { FiPlus, FiBell, FiSettings } from "react-icons/fi";
import "./ProjectList.css";
import logo from "../src/assets/logo.svg";
import CreateProjectModal from "./CreateProjectModal"; // You must create this component

const mockProjects = [
  {
    id: 1,
    name: "Sample Project",
    files: 4,
    updated: "Last edited a week ago",
    initials: "SP",
    color: "#f5a623",
  },
  // Add more mock projects as needed
];

const ProjectList = () => {
  const [isCreating, setIsCreating] = useState(false);

  return (
    <div className="project-list-container">
      <header className="project-header">
        <div className="logo-section">
          <img src={logo} alt="Ques.AI Logo" className="logo-img" />
          <h2>
            Ques.<span>AI</span>
          </h2>
        </div>
        <div className="header-icons">
          <FiSettings size={24} />
          <FiBell size={24} />
        </div>
      </header>

      <div className="project-list-content">
        <div className="project-list-header">
          <h2>Projects</h2>
          <button
            className="create-project-btn"
            onClick={() => setIsCreating(true)}
          >
            <FiPlus size={16} /> Create New Project
          </button>
        </div>

        <div className="project-grid">
          {mockProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div
                className="project-icon"
                style={{ backgroundColor: project.color }}
              >
                {project.initials}
              </div>
              <div className="project-details">
                <h3>{project.name}</h3>
                <p>{project.files} Files</p>
                <span className="timestamp">{project.updated}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project creation modal */}
      {isCreating && (
        <CreateProjectModal
          onClose={() => setIsCreating(false)}
          onCreate={(newProject) => {
            console.log("Project created:", newProject);
            setIsCreating(false);
          }}
        />
      )}
    </div>
  );
};

export default ProjectList;
