import React, { useEffect, useState } from "react";
import { fetchMockContacts } from "../api/mockApi";
import ContactList from "../components/ContactList";
import SearchBar from "../components/SearchBar";
import AddContactForm from "../components/AddContactForm";
import ContactDetailsModal from "../components/ContactDetailsModal";

const ContactsPage = () => {
  const [contacts, setContacts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate fetching contacts
  useEffect(() => {
  const saved = localStorage.getItem("contacts");

  if (saved && JSON.parse(saved).length > 0) {
    // If we already have saved contacts, use them
    const parsed = JSON.parse(saved);
    setContacts(parsed);
    setFiltered(parsed);
    setLoading(false);
  } else {
    // Otherwise, fetch demo contacts
    fetchMockContacts().then((data) => {
      setContacts(data);
      setFiltered(data);
      localStorage.setItem("contacts", JSON.stringify(data));
      setLoading(false);
    });
  }
}, []);


  useEffect(() => {
    setFiltered(
      contacts.filter((c) =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, contacts]);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleAdd = (newContact) => {
    const contactWithId = { ...newContact, id: Date.now() };
    const updated = [...contacts, contactWithId];
    setContacts(updated);
    setShowModal(false);
  };

  const handleDelete = (id) => {
    const updated = contacts.filter((c) => c.id !== id);
    setContacts(updated);
  };

  const handleView = (contact) => {
    setSelectedContact(contact);
  };

  const handleCloseDetails = () => {
    setSelectedContact(null);
  };

  if (loading) {
    return (
      <div className="contacts-page">
        <h1>Loading your contacts...</h1>
      </div>
    );
  }

  return (
    <div className="contacts-page">
      <div className="header">
        <h1>TriaConnect</h1>
        <button className="add-btn" onClick={() => setShowModal(true)}>
          + Add Contact
        </button>
      </div>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ContactList contacts={filtered} onDelete={handleDelete} onView={handleView} />

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Add New Contact</h2>
            <AddContactForm onContactAdded={handleAdd} />
            <button className="cancel-btn" onClick={() => setShowModal(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {selectedContact && (
        <ContactDetailsModal contact={selectedContact} onClose={handleCloseDetails} />
      )}
    </div>
  );
};

export default ContactsPage;
