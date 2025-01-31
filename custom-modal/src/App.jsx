import React, { useState } from 'react';
import CustomModal from './CustomModal';
import './App.css';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="app-container">
      <button onClick={handleShowModal}>Create Employee</button>
      <CustomModal show={showModal} message="Employee Created!" onClose={handleCloseModal} />
    </div>
  );
};

export default App;