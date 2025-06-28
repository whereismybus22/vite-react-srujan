// import "./AddPodcast.css";
// import { FaRss, FaYoutube, FaUpload, FaCloudUploadAlt } from "react-icons/fa";
// import logo from "../src/assets/logo.svg";
// import { FiSettings, FiEdit, FiBell, FiLogOut } from "react-icons/fi";
// import { RiVipDiamondLine } from "react-icons/ri";
// import { GoCopy } from "react-icons/go";
// const AddPodcast = () => {
//   return (
//     <div className="podcast-page">
//       <aside className="sidebar">
//         <div className="logo">
//           <img src={logo} alt="main-logo" />
//           <h2>
//             Ques.<span>AI</span>
//           </h2>
//         </div>

//         <ul className="menu">
//           <li className="active">+ Add your Podcast(s)</li>
//           <li>
//             <FiEdit size={15} />
//             <span> Create & Repurpose</span>
//           </li>
//           <li>
//             <GoCopy size={15} />
//             <span> Podcast Widget</span>
//           </li>
//           <li>
//             <RiVipDiamondLine size={15} />
//             <span> Upgrade</span>
//           </li>
//           <div className="last">
//             <FiSettings size={12} />
//             <span> Help</span>
//           </div>
//         </ul>
//         <div className="user-info">
//           <p>Username</p>
//           <small>user@example.com</small>
//         </div>
//       </aside>

//       <main className="podcast-main">
//         <div className="breadcrumb">
//           <div>
//             <span>Home Page / Sample Project / </span>
//             <span className="highlight">Add your podcast</span>
//           </div>

//           <span className="bell">
//             <FiBell size={23} />
//           </span>
//           <span className="logout">
//             <FiLogOut size={23} color="red" />
//           </span>
//         </div>

//         <h2 className="page-title">Add Podcast</h2>

//         <div className="source-options">
//           <div className="source-card">
//             <FaRss size={24} color="#f57c00" />
//             <h4>RSS Feed</h4>
//             <p>Lorem ipsum dolor sit.</p>
//           </div>
//           <div className="source-card">
//             <FaYoutube size={24} color="#e53935" />
//             <h4>Youtube Video</h4>
//             <p>Lorem ipsum dolor sit.</p>
//           </div>
//           <div className="source-card">
//             <FaUpload size={24} color="#3949ab" />
//             <h4>Upload Files</h4>
//             <p>Lorem ipsum dolor sit.</p>
//           </div>
//         </div>

//         <div className="upload-box">
//           <FaCloudUploadAlt size={48} color="#8e24aa" />
//           <p>
//             Select a file or drag and drop here (Podcast Media or Transcription
//             Text)
//           </p>
//           <small>MP4, MOV, MP3, WAV, PDF, DOCX or TXT file</small>
//           <button className="select-btn">Select File</button>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AddPodcast;

// 2nd one
// import { useState } from "react";
// import { FaRss, FaYoutube, FaUpload, FaCloudUploadAlt } from "react-icons/fa";
// import "./AddPodcast.css";
// import UploadModal from "./UploadModal";
// import logo from "../src/assets/logo.svg";

// const AddPodcast = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [uploadType, setUploadType] = useState("");

//   const openModal = (type) => {
//     setUploadType(type);
//     setShowModal(true);
//   };

//   return (
//     <div className="podcast-page">
//       <aside className="sidebar">
//         <div className="logo">
//           <img src={logo} alt="main-logo" />
//           <h2>
//             Ques.<span>AI</span>
//           </h2>
//         </div>
//         <ul className="menu">
//           <li className="active">+ Add your Podcast(s)</li>
//           <li>Create & Repurpose</li>
//           <li>Podcast Widget</li>
//           <li>Upgrade</li>
//         </ul>
//         <div className="user-info">
//           <p>Username</p>
//           <small>user@example.com</small>
//         </div>
//       </aside>

//       <main className="podcast-main">
//         <div className="breadcrumb">
//           <span>Home Page / Sample Project / </span>
//           <span className="highlight">Add your podcast</span>
//         </div>

//         <h2 className="page-title">Add Podcast</h2>

//         <div className="source-options">
//           <div className="source-card" onClick={() => openModal("rss")}>
//             <FaRss size={24} color="#f57c00" />
//             <h4>RSS Feed</h4>
//             <p>Lorem ipsum dolor sit.</p>
//           </div>
//           <div className="source-card" onClick={() => openModal("youtube")}>
//             <FaYoutube size={24} color="#e53935" />
//             <h4>Youtube Video</h4>
//             <p>Lorem ipsum dolor sit.</p>
//           </div>
//           <div className="source-card" onClick={() => openModal("file")}>
//             <FaUpload size={24} color="#3949ab" />
//             <h4>Upload Files</h4>
//             <p>Lorem ipsum dolor sit.</p>
//           </div>
//         </div>

//         <div className="upload-box">
//           <FaCloudUploadAlt size={48} color="#8e24aa" />
//           <p>
//             Select a file or drag and drop here (Podcast Media or Transcription
//             Text)
//           </p>
//           <small>MP4, MOV, MP3, WAV, PDF, DOCX or TXT file</small>
//           <br />
//           <button className="select-btn">Select File</button>
//         </div>
//       </main>

//       {showModal && (
//         <UploadModal type={uploadType} onClose={() => setShowModal(false)} />
//       )}
//     </div>
//   );
// };

// export default AddPodcast;

// 3rd one
// import "./AddPodcast.css";
// import { FaRss, FaYoutube, FaUpload, FaCloudUploadAlt } from "react-icons/fa";
// import logo from "../src/assets/logo.svg";
// import { FiSettings, FiEdit, FiBell, FiLogOut } from "react-icons/fi";
// import { RiVipDiamondLine } from "react-icons/ri";
// import { GoCopy } from "react-icons/go";
// import { useState } from "react";

// const mockFiles = [
//   {
//     id: 1,
//     name: "THE SIDEPOD S2 EPISODE 15",
//     date: "25 Oct 23 | 09:04",
//   },
//   {
//     id: 2,
//     name: "THE SIDEPOD S2 EPISODE 17",
//     date: "27 Oct 23 | 11:08",
//   },
//   {
//     id: 3,
//     name: "THE SIDEPOD S2 EPISODE 20",
//     date: "31 Oct 23 | 20:28",
//   },
// ];

// const AddPodcast = () => {
//   const [files, setFiles] = useState(mockFiles); // set to [] if testing empty

//   return (
//     <div className="podcast-page">
//       <aside className="sidebar">
//         <div className="logo">
//           <img src={logo} alt="main-logo" />
//           <span>
//             <h2>
//               Ques.<span>AI</span>
//             </h2>
//           </span>
//         </div>
//         <ul className="menu">
//           <li>
//             <li className="active">+ Add your Podcast(s)</li>
//             <FiEdit size={15} />
//             <span> Create & Repurpose</span>
//           </li>
//           <li>
//             <GoCopy size={15} />
//             <span> Podcast Widget</span>
//           </li>
//           <li>
//             <RiVipDiamondLine size={15} />
//             <span> Upgrade</span>{" "}
//           </li>
//           <div className="last">
//             <FiSettings size={12} />
//             <span> Help</span>
//           </div>
//         </ul>
//         <div className="user-info">
//           <p>Username</p>
//           <small>user@example.com</small>
//         </div>
//       </aside>

//       <main className="podcast-main">
//         <div className="breadcrumb">
//           <span>Home Page / Sample Project / </span>
//           <span className="highlight">Add your podcast</span>
//         </div>

//         <h2 className="page-title">Add Podcast</h2>

//         <div className="source-options">
//           <div className="source-card">
//             <FaRss size={24} color="#f57c00" />
//             <h4>RSS Feed</h4>
//             <p>Lorem ipsum dolor sit.</p>
//           </div>
//           <div className="source-card">
//             <FaYoutube size={24} color="#e53935" />
//             <h4>Youtube Video</h4>
//             <p>Lorem ipsum dolor sit.</p>
//           </div>
//           <div className="source-card">
//             <FaUpload size={24} color="#3949ab" />
//             <h4>Upload Files</h4>
//             <p>Lorem ipsum dolor sit.</p>
//           </div>
//         </div>

//         {files.length > 0 ? (
//           <div className="file-list-box">
//             <h3>Your Files</h3>
//             <table>
//               <thead>
//                 <tr>
//                   <th>No.</th>
//                   <th>Name</th>
//                   <th>Upload Date & Time</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {files.map((file, index) => (
//                   <tr key={file.id}>
//                     <td>{index + 1}</td>
//                     <td>{file.name}</td>
//                     <td>{file.date}</td>
//                     <td>
//                       <button className="view-btn">View</button>
//                       <button className="delete-btn">Delete</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         ) : (
//           <div className="upload-box">
//             <FaCloudUploadAlt size={48} color="#8e24aa" />
//             <p>
//               Select a file or drag and drop here (Podcast Media or
//               Transcription Text)
//             </p>
//             <small>MP4, MOV, MP3, WAV, PDF, DOCX or TXT file</small>
//             <button className="select-btn">Select File</button>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default AddPodcast;

import { useState } from "react";
import { FaRss, FaYoutube, FaUpload, FaCloudUploadAlt } from "react-icons/fa";
import { FiEdit, FiSettings } from "react-icons/fi";
import { GoCopy } from "react-icons/go";
import { RiVipDiamondLine } from "react-icons/ri";
import logo from "../src/assets/logo.svg"; // Adjust as per your setup
import "./AddPodcast.css";
import EditTranscript from "./EditTranscript";

// Dummy file data
const mockFiles = [
  {
    id: 1,
    name: "THE SIDEPOD S2 EPISODE 15",
    date: "25 Oct 23 | 09:04",
    transcript:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
  },
  {
    id: 2,
    name: "THE SIDEPOD S2 EPISODE 17",
    date: "27 Oct 23 | 11:08",
    transcript:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit...",
  },
];

const AddPodcast = () => {
  const [files, setFiles] = useState(mockFiles);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleView = (file) => {
    setSelectedFile(file);
  };

  const handleBack = () => {
    setSelectedFile(null);
  };

  return (
    <div className="podcast-page">
      <aside className="sidebar">
        <div className="logo">
          <img src={logo} alt="main-logo" />
          <h2>
            Ques.<span>AI</span>
          </h2>
        </div>
        <ul className="menu">
          <li className="active">+ Add your Podcast(s)</li>
          <li>
            <FiEdit size={15} />
            <span> Create & Repurpose</span>
          </li>
          <li>
            <GoCopy size={15} />
            <span> Podcast Widget</span>
          </li>
          <li>
            <RiVipDiamondLine size={15} />
            <span> Upgrade</span>
          </li>
        </ul>
        <div className="menu help">
          <li>
            <FiSettings size={15} />
            <span> Help</span>
          </li>
        </div>
        <div className="user-info">
          <p>Username</p>
          <small>user@example.com</small>
        </div>
      </aside>

      <main className="podcast-main">
        {selectedFile ? (
          <EditTranscript file={selectedFile} onBack={handleBack} />
        ) : (
          <>
            <div className="breadcrumb">
              <span>Home Page / Sample Project / </span>
              <span className="highlight">Add your podcast</span>
            </div>

            <h2 className="page-title">Add Podcast</h2>

            <div className="source-options">
              <div className="source-card">
                <FaRss size={24} color="#f57c00" />
                <h4>RSS Feed</h4>
                <p>Lorem ipsum dolor sit.</p>
              </div>
              <div className="source-card">
                <FaYoutube size={24} color="#e53935" />
                <h4>Youtube Video</h4>
                <p>Lorem ipsum dolor sit.</p>
              </div>
              <div className="source-card">
                <FaUpload size={24} color="#3949ab" />
                <h4>Upload Files</h4>
                <p>Lorem ipsum dolor sit.</p>
              </div>
            </div>

            {files.length > 0 ? (
              <div className="file-list-box">
                <h3>Your Files</h3>
                <table>
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Name</th>
                      <th>Upload Date & Time</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {files.map((file, index) => (
                      <tr key={file.id}>
                        <td>{index + 1}</td>
                        <td>{file.name}</td>
                        <td>{file.date}</td>
                        <td>
                          <button
                            className="view-btn"
                            onClick={() => handleView(file)}
                          >
                            View
                          </button>
                          <button className="delete-btn">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="upload-box">
                <FaCloudUploadAlt size={48} color="#8e24aa" />
                <p>
                  Select a file or drag and drop here (Podcast Media or
                  Transcription Text)
                </p>
                <small>MP4, MOV, MP3, WAV, PDF, DOCX or TXT file</small>
                <button className="select-btn">Select File</button>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default AddPodcast;
