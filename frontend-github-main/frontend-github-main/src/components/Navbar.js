import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../App";

function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Virtual Workspace</Link>
        <div className="ml-auto">
          {isAuthenticated ? (
            <>
              <Link className="btn btn-secondary mx-2" to="/dashboard">Dashboard</Link>
              <button className="btn btn-danger mx-2" onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <Link className="btn btn-primary mx-2" to="/login">Login</Link>
              <Link className="btn btn-success mx-2" to="/signup">Signup</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
