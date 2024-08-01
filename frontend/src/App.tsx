import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="home">
      <h1>Welcome to the Home Page</h1>
      <div className="tiles">
        <Link to="/education" className="button">
          Education
        </Link>
        <Link to="/patient-experience" className="button">
          Patient Experience
        </Link>
      </div>
    </div>
  );
};

export default App;
