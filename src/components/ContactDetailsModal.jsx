import React from "react";

const ContactDetailsModal = ({ contact, onClose }) => {
  if (!contact) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="details-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>{contact.name}</h2>
        <div className="contact-detail-info">
          <p><strong>Email:</strong> {contact.email}</p>
          <p><strong>Phone:</strong> {contact.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsModal;
