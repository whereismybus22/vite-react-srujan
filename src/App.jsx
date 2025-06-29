import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, AuthContext } from "../context/AuthContext";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import CreateProjectModal from "../pages/CreateProjectModal";
import UploadModal from "../pages/UploadModal";
import EditTranscript from "../pages/EditTranscript";
import AddPodcast from "../pages/AddPodcast";
import ProjectList from "../pages/ProjectList";
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("auth_token");
  return token ? children : <Navigate to="/" />;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/create" element={<ProjectList />} />
          <Route path="/upload" element={<AddPodcast />} />
          <Route path="/edit/:id" element={<EditTranscript />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
