// src/api/mockApi.js
export const fetchMockContacts = () => {
  const demoContacts = [
    { id: 1, name: "Ava Collins", email: "ava.collins@example.com", phone: "9876543210" },
    { id: 2, name: "Liam Patel", email: "liam.patel@example.com", phone: "9823456712" },
    { id: 3, name: "Sofia Kim", email: "sofia.kim@example.com", phone: "9812234567" },
    { id: 4, name: "Noah Smith", email: "noah.smith@example.com", phone: "9998877766" }
  ];

  // Return promise to simulate API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(demoContacts);
    }, 1000); // Simulate 1s API delay
  });
};
