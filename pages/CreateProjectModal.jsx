import { useState } from "react";
import "./Dashboard.css"; // using same CSS file for simplicity
import { useNavigate } from "react-router-dom";

const CreateProjectModal = ({ onClose }) => {
  const [projectName, setProjectName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleCreate = () => {
    if (!projectName.trim()) {
      setError("Project Name can't be empty");
      return;
    }

    // logic to POST to backend can go here
    console.log("Project Created:", projectName);
    onClose();
    navigate("/create");
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Create Project</h2>
        <label>Enter Project Name:</label>
        <input
          type="text"
          placeholder="Type here"
          value={projectName}
          onChange={(e) => {
            setProjectName(e.target.value);
            setError("");
          }}
        />
        {error && <p className="error">{error}</p>}

        <div className="modal-actions">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="create-modal-btn" onClick={handleCreate}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectModal;
