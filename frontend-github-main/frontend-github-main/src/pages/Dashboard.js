import React, { useContext } from "react";
import Typical from "react-typical";
import { AuthContext } from "../App";

function Dashboard() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className="container text-center mt-5">
      <h2>
        <Typical
          steps={["Welcome to Your Virtual Workspace!", 2000, "Let's Get Productive 🚀", 2000]}
          loop={Infinity}
          wrapper="span"
        />
      </h2>
      {isAuthenticated && <p className="text-success">You're logged in! Start collaborating now.</p>}
    </div>
  );
}

export default Dashboard;
