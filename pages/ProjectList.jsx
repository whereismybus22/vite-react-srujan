import React, { useState } from "react";
import { FiPlus, FiBell, FiSettings, FiUpload } from "react-icons/fi";
import "./ProjectList.css";
import logo from "../src/assets/logo.svg";
import CreateProjectModal from "./CreateProjectModal";
import { useNavigate } from "react-router-dom";

const initialProjects = [
  {
    id: 1,
    name: "Sample Project",
    files: 4,
    updated: "Last edited a week ago",
    initials: "SP",
    color: "#f5a623",
  },
];

const ProjectList = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [projects, setProjects] = useState(initialProjects);
  const navigate = useNavigate();

  const handleUpload = () => {
    navigate("/upload");
  };

  const handleCreateProject = (newProject) => {
    const projectWithDefaults = {
      ...newProject,
      id: projects.length + 1,
      files: 0,
      updated: "Just now",
      initials: newProject.name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase(),
      color: "#7b1fa2",
    };

    setProjects((prev) => [...prev, projectWithDefaults]);
    setIsCreating(false);
  };

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
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              className="create-project-btn"
              onClick={() => setIsCreating(true)}
            >
              <FiPlus size={16} /> Create New Project
            </button>

            <button className="upload-project-btn" onClick={handleUpload}>
              <FiUpload size={16} /> Upload
            </button>
          </div>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
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

      {/* Modal to create new project */}
      {isCreating && (
        <CreateProjectModal
          onClose={() => setIsCreating(false)}
          onCreate={handleCreateProject}
        />
      )}
    </div>
  );
};

export default ProjectList;
