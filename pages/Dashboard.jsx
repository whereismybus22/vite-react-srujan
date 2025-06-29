import "./Dashboard.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import logo from "../src/assets/logo.svg";
import illustration from "../src/assets/dashboard.svg";
import { FiSettings, FiBell, FiPlus } from "react-icons/fi";
import CreateProjectModal from "./CreateProjectModal";
import { useState } from "react";
const Dashboard = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { logout } = useContext(AuthContext);
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="logo-section">
          <img src={logo} alt="Ques.AI Logo" className="logo-img" />
          <h2>
            Ques.<span>AI</span>
          </h2>
        </div>
        <div className="header-icons">
          <FiSettings size={24} />
          <FiBell size={24} />
          <button className="create-btn" onClick={logout}>
            Logout
          </button>
        </div>
      </header>

      <main className="dashboard-main">
        <h1>Create a New Project</h1>
        <img
          src={illustration}
          alt="Team creating project"
          className="dashboard-img"
        />
        <p className="dashboard-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in
        </p>
        <button className="create-btn" onClick={() => setModalOpen(true)}>
          <FiPlus size={18} />
          Create New Project
        </button>
      </main>
      {isModalOpen && (
        <CreateProjectModal onClose={() => setModalOpen(false)} />
      )}
    </div>
  );
};

export default Dashboard;
