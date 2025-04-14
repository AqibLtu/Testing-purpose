import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../App";

function Home() {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="container text-center mt-5">
      <h1>Welcome to Virtual Workspace</h1>
      <p>Collaborate with your team efficiently.</p>
    </div>
  );
}

export default Home;
