import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import App from './App';
import Education from './components/Education';
import PatientExperience from './components/PatientExperience';

const AppRoutes: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="education" element={<Education />} />
        <Route path="patient-experience" element={<PatientExperience />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default AppRoutes;
