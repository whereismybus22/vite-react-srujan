// App.jsx
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import EditTranscript from "../pages/EditTranscript";
import { AuthProvider } from "../context/AuthContext";
import ProjectList from "../pages/ProjectList";
import AddPodcast from "../pages/AddPodcast";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<ProjectList />} />
        <Route path="/upload" element={<AddPodcast />} />
        <Route path="/edit/:id" element={<EditTranscript />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
