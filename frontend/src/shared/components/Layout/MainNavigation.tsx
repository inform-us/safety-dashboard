import React from 'react';
import NavBar from './NavBar.tsx';
import NavLinks from './NavLinks.tsx';

const MainNavigation: React.FC = () => {
  return (
    <NavBar>
      <NavLinks />
    </NavBar>
  );
};

export default MainNavigation;
