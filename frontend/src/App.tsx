import { useState } from 'react';
import './App.css';
import AppRoutes from './AppRoutes';
import Modal from './shared/components/UIElements/modal/Modal';
import Button from './shared/components/UIElements/Button';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(true); // Modal is open by default when app is loaded

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="home">
      <AppRoutes />
      <Modal
        show={isModalOpen}
        onCancel={closeModal}
        header="Welcome to the UCLH Safety Dashboard"
        footer={<Button onClick={closeModal}>Close</Button>}
      >
        <p>Please note that this is dashboard an experimental design.</p>
      </Modal>
    </div>
  );
};

export default App;
