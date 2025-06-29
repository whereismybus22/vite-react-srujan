// src/components/UploadModal.jsx
import "./UploadModal.css";

const UploadModal = ({ type, onClose }) => {
  const getIcon = () => {
    switch (type) {
      case "rss":
        return <i className="fa fa-rss" style={{ color: "#f57c00" }}></i>;
      case "youtube":
        return (
          <i className="fa fa-youtube-play" style={{ color: "#e53935" }}></i>
        );
      case "file":
        return <i className="fa fa-upload" style={{ color: "#3949ab" }}></i>;
      default:
        return null;
    }
  };

  const getTitle = () => {
    switch (type) {
      case "rss":
        return "Upload from RSS Feed";
      case "youtube":
        return "Upload from YouTube";
      case "file":
        return "Upload Files";
      default:
        return "";
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="youtube-modal">
        <div className="modal-header">
          <div className="title">
            {getIcon()}
            <h3>{getTitle()}</h3>
          </div>
          <span className="close-btn" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <label>Name</label>
          <input type="text" placeholder="Enter name" />

          {(type === "youtube" || type === "rss") && (
            <>
              <label>{type === "youtube" ? "Transcript" : "Feed URL"}</label>
              <textarea
                rows={4}
                placeholder={`Enter ${
                  type === "youtube" ? "transcript" : "RSS URL"
                }...`}
              ></textarea>
            </>
          )}

          {type === "file" && (
            <>
              <label>Upload File</label>
              <input type="file" />
            </>
          )}

          <button className="upload-btn">Upload</button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
