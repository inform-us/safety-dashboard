import { Outlet, Link } from 'react-router-dom';
import './Layout.css';
import '/Users/katiebuntic/projects/safety_dashboard/frontend/src/styles.css';
import Button from '../UIElements/Button';

const Layout = () => {
  return (
    <div className="layout">
      <Link to="/patient-experience">
        <Button>Patient Experience</Button>
      </Link>
      <Link to ="/pharmacy">
        <Button>Pharmacy</Button>
      </Link>
      <Link to="/education">
        <Button>Education</Button>
      </Link>

      <main className="main-container">
        <Outlet /> {/* the outlet simply renders all of its child routes, see AppRoutes.tsx  */}
      </main>
    </div>
  );
};

export default Layout;
