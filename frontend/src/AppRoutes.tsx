import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Layout from './shared/components/Layout/Layout'; // Import Layout
import HomeTiles from './shared/components/Layout/HomeTiles'; // Assuming HomeTiles is a page
import Education from './pages/Education';
import NotFound from './pages/NotFound';
import Pharmacy from './pages/Pharmacy';
import PatientExperience from './pages/PatientExperience';
// Assuming SafetyNews is a valid module or file
import InfectionControl from './pages/InfectionControl';
import LearningAndActions from './pages/LearningAndActions';
import AuditAndQI from './pages/AuditAndQI';
import ICUExamplar from './pages/ICUExamplar';
import Headlines from './pages/Headlines';
import QualityAndSafety from './pages/QualityAndSafety';
import SafetyNews from './pages/SafetyNews';

const AppRoutes: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeTiles />} /> {/* Render HomeTiles at the root path */}
          <Route path="patient-experience" element={<PatientExperience />} />
          <Route path="pharmacy" element={<Pharmacy />} />
          <Route path="safety-news" element={<SafetyNews />} />
          <Route path="education" element={<Education />} />
          <Route path="infection-control" element={<InfectionControl />} />
          <Route path="learning-actions" element={<LearningAndActions />} />
          <Route path="audit-qi" element={<AuditAndQI />} />
          <Route path="icu-examplar" element={<ICUExamplar />} />
          <Route path="headlines" element={<Headlines />} />
          <Route path="quality-safety" element={<QualityAndSafety />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default AppRoutes;
