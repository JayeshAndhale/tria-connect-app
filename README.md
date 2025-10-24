#TriaConnect – Contact List Web App

A modern, minimal, and aesthetic **React-based contact manager** built as part of the **Tria Frontend Assignment**.  
This project demonstrates core frontend skills, React componentization, mock API interaction, and design sense.

---

##Live Demo

**Deployed App:** [https://jayeshandhale.github.io/tria-connect-app/](https://jayeshandhale.github.io/tria-connect-app/)

The app is fully hosted on **GitHub Pages** — no backend setup required.

---

##Objective

The goal of this project was to build a **single-page React web application** that can:
1. **Display a list of contacts**
2. **Search contacts** by name through a dynamic search bar
3. **Add new contacts** (optional feature)
4. *(Enhanced)* **Delete contacts**
5. *(Enhanced)* **View contact details** in a beautiful popup modal

---

##Tech Stack

| Category | Technology |
|-----------|-------------|
| **Framework** | React (Create React App) |
| **Language** | JavaScript (ES6+) |
| **Styling** | Custom CSS (modern, responsive layout) |
| **State Management** | React Hooks (`useState`, `useEffect`) |
| **Data Handling** | Mock API simulation (no backend required) |
| **Persistence** | Browser LocalStorage |
| **Deployment** | GitHub Pages |

---

##Key Features

###Contact List
- Displays an elegant, card-style list of all saved contacts.  
- Loads demo contacts via a **mock API** (simulated network delay).  

###Search
- Real-time filtering of contacts as you type.  

###Add Contact
- Add new contacts easily using a **popup modal** form.  
- Data is saved to **localStorage** for persistence.  

###Delete Contact
- Delete any contact from the list with a confirmation.  

###View Details
- Click a contact to open a **glassmorphic modal** showing full details.  

###Aesthetic UI
- Clean, centered layout with soft gradients and shadows.  
- Subtle animations for modal popups and interactions.  
- Premium, minimal feel throughout the app.  

---

##Design & Implementation Notes

- The app mimics API fetching through a **Promise-based mock function** with a `setTimeout` delay to simulate real-world data loading.
- LocalStorage ensures data persists even after page refresh.
- Fully responsive and mobile-friendly.
- Simple and maintainable component structure:
