import React from 'react';
import './App.css'; // Assure-toi que les styles sont dans App.css ou un autre fichier CSS

const CustomModal = ({ show, message, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="modal-close" onClick={onClose}>
          ×
        </span>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default CustomModal;