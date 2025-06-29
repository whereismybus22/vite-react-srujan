import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import "./EditTranscript.css";

const EditTranscript = ({ file, onBack }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [transcript, setTranscript] = useState(file.transcript);
  const [tempTranscript, setTempTranscript] = useState(file.transcript);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDiscard = () => {
    setTempTranscript(transcript); // reset to original
    setIsEditing(false);
  };

  const handleSave = () => {
    setTranscript(tempTranscript); // save changes
    setIsEditing(false);
  };

  return (
    <div className="edit-transcript-page">
      <div className="breadcrumb">
        <span>Home Page / Sample Project / </span>
        <span className="highlight">Add your podcast</span>
      </div>

      <div className="transcript-header">
        <button onClick={onBack} className="back-btn">
          <FaArrowLeft />
        </button>
        <h2>Edit Transcript</h2>
        {!isEditing && (
          <button className="edit-btn" onClick={handleEdit}>
            Edit
          </button>
        )}
        {isEditing && (
          <div className="edit-actions">
            <button className="discard-btn" onClick={handleDiscard}>
              Discard
            </button>
            <button className="save-btn" onClick={handleSave}>
              Save
            </button>
          </div>
        )}
      </div>

      <div className="transcript-box">
        <h4 className="speaker-label">Speaker</h4>
        {isEditing ? (
          <textarea
            value={tempTranscript}
            onChange={(e) => setTempTranscript(e.target.value)}
            className="transcript-textarea"
          />
        ) : (
          <p className="transcript-text">{transcript}</p>
        )}
        {!isEditing && <p className="transcript-text">{transcript}</p>}
      </div>
    </div>
  );
};

export default EditTranscript;
