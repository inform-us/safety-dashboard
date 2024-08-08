import { useState } from 'react';

import AppRoutes from './AppRoutes';
import Modal from './shared/components/UIElements/modal/Modal';
import Button from './shared/components/UIElements/Button';

import './App.css';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(true); // Modal is open by default when app is loaded

  return (
    <div className="home">
      <Modal
        show={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        header="Welcome to the UCLH Safety Dashboard"
        footer={<Button onClick={() => setIsModalOpen(false)}>Close</Button>}
      >
        <>
          <p>Please note that this dashboard is an experimental platform.</p>
          <p>
            This is a proof of concept. The technical architecture is fragile and should not be expected to run
            smoothly.
          </p>
        </>
      </Modal>

      <AppRoutes />
    </div>
  );
};

export default App;
