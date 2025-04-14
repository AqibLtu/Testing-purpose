import React, { useState, createContext, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import Tasks from "./pages/Tasks";
import VideoCall from "./pages/VideoCall";
import Files from "./pages/Files";
import Notes from "./pages/Notes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import virtualMeeting from "./assets/virtual_meeting.jpg";
import screenShare from "./assets/screen_share.jpg";

// Page transition animation
const pageVariants = {
  initial: { opacity: 0, y: 10 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -10 },
};

const PageWrapper = ({ children }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

// Create Authentication Context
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const login = (email, password) => {
    console.log("Logging in with", email, password);
    setIsAuthenticated(true);
  };

  const signup = (email, password) => {
    console.log("Signing up with", email, password);
    setIsAuthenticated(true);
  };

  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
            <Route path="/signup" element={<PageWrapper><Signup /></PageWrapper>} />
            <Route path="/dashboard" element={<ProtectedRoute element={<PageWrapper><Dashboard /></PageWrapper>} />} />
            <Route path="/chat" element={<ProtectedRoute element={<PageWrapper><Chat /></PageWrapper>} />} />
            <Route path="/tasks" element={<ProtectedRoute element={<PageWrapper><Tasks /></PageWrapper>} />} />
            <Route path="/video-call" element={<ProtectedRoute element={<PageWrapper><VideoCall /></PageWrapper>} />} />
            <Route path="/files" element={<ProtectedRoute element={<PageWrapper><Files /></PageWrapper>} />} />
            <Route path="/notes" element={<ProtectedRoute element={<PageWrapper><Notes /></PageWrapper>} />} />
          </Routes>
          <div className="text-center mt-4">
            <h3>Virtual Meeting</h3>
            <motion.img src={virtualMeeting} alt="Virtual Meeting" className="img-fluid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <h3 className="mt-4">Screen Share</h3>
            <motion.img src={screenShare} alt="Screen Share" className="img-fluid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
