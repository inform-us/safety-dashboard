import { Outlet } from 'react-router-dom';
import './Layout.css';
import MainNavigation from './MainNavigation.tsx';

const Layout = () => {
  return (
    <div className="layout">
      <MainNavigation />
      <main className="main-container">
        <Outlet /> {/* the outlet simply renders all of its child routes, see AppRoutes.tsx */}
      </main>
    </div>
  );
};

export default Layout;
