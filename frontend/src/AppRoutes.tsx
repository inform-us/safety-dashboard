import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Education from './pages/Education';
import Layout from './shared/components/Layout/Layout';
import NotFound from './pages/NotFound';
import Pharmacy from './pages/Pharmacy';
import PatientExperience from './pages/PatientExperience';

const AppRoutes: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />} />
        <Route path="education" element={<Education />} />
        <Route path="pharmacy" element={<Pharmacy />} />
        <Route path="patient-experience" element={<PatientExperience />} />
        <Route path="*" element={<NotFound />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default AppRoutes;
