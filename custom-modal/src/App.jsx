import React, { useState } from 'react';
import CustomModal from '@/CustomModal'; 
import 'antd/dist/reset.css'; 
import '@/App.css'; 

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="modal-button-container">
      <button className="modal-open-button" onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <CustomModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        message="Employee Created!"
      />
    </div>
  );
};

export default App;