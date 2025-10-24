import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, onDelete, onView }) => {
  return (
    <div className="contact-list">
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
            onDelete={onDelete}
            onView={onView}
          />
        ))
      ) : (
        <p className="empty-text">No contacts found</p>
      )}
    </div>
  );
};

export default ContactList;
