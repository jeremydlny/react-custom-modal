import React from 'react';
import { Modal } from 'antd'; // Import de la modal d'Ant Design

const CustomModal = ({ isOpen, onClose, message }) => {
  return (
    <Modal
      open={isOpen} // Utilise 'open' à la place de 'visible' dans Ant Design 5+
      onCancel={onClose}
      footer={null}  // Suppression du pied de page pour le styliser selon tes besoins
      closable={true} // Affiche le bouton de fermeture
    >
      <p>{message}</p>
    </Modal>
  );
};

export default CustomModal;