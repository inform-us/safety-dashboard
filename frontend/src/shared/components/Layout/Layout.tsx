import { Outlet, Link } from 'react-router-dom';
import './Layout.css';
import 'styles.css';
import Button from '../UIElements/Button';

const Layout = () => {
  return (
    <div className="layout">
      <Link to="/education">
        <Button>Education</Button>
      </Link>
      <Link to="/patient-experience">
        <Button>Patient Experience</Button>
      </Link>
      <Link to ="/pharmacy">
        <Button>Pharmacy</Button>
      </Link>

      <main className="main-container">
        <Outlet /> {/* the outlet simply renders all of its child routes, see AppRoutes.tsx  */}
      </main>
    </div>
  );
};

export default Layout;
