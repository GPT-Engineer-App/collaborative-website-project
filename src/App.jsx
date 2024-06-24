import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ProjectManagement from "./pages/ProjectManagement.jsx";
import TaskProgress from "./pages/TaskProgress.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/project-management" element={<ProjectManagement />} />
        <Route exact path="/task-progress" element={<TaskProgress />} />
      </Routes>
    </Router>
  );
}

export default App;