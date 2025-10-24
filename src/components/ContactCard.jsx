import React from "react";

const ContactCard = ({ contact, onDelete, onView }) => {
  const handleDelete = (e) => {
    e.stopPropagation();
    if (window.confirm(`Delete ${contact.name}?`)) {
      onDelete(contact.id);
    }
  };

  return (
    <div className="contact-card" onClick={() => onView(contact)}>
      <div className="contact-info">
        <h3>{contact.name}</h3>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
      </div>
      <button className="delete-btn" onClick={handleDelete}>
        🗑
      </button>
    </div>
  );
};

export default ContactCard;
