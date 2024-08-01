import { Outlet } from 'react-router-dom';

import TopHeader from './TopHeader.tsx';

import './Layout.css';
import HomePage from '../../../pages/HomePage.tsx';

const Layout = () => {
  return (
    <div className="layout">
      <TopHeader />
      <HomePage />
      <main className="main-container">
        <Outlet /> {/* the outlet simply renders all of its child routes, see AppRoutes.tsx  */}
      </main>
    </div>
  );
};

export default Layout;
