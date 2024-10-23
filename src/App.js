// import React, { useState } from "react";
// import { Container, Button } from "@mui/material";
// import ContactsIcon from "@mui/icons-material/Contacts";
// import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
// import styles from "./App.module.css";
// import ContactForm from "./components/contactForm";
// import ContactList from "./components/contactList";
// import Btn from "./components/button";

// const App = () => {
//   const [contacts, setContacts] = useState([]);
//   const [currentContact, setCurrentContact] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(null);
//   const [open, setOpen] = useState(false);

//   const addContact = (contact) => {
//     setContacts([...contacts, contact]);
//   };

//   const editContact = (updatedContact) => {
//     const updatedContacts = [...contacts];
//     updatedContacts[currentIndex] = updatedContact;
//     setContacts(updatedContacts);
//   };

//   const deleteContact = (index) => {
//     setContacts(contacts.filter((a, i) => i !== index));
//   };

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setCurrentContact(null);
//     setCurrentIndex(null);
//   };

//   const handleAddContact = () => {
//     setCurrentContact(null); 
//     setCurrentIndex(null);
//     handleClickOpen();
//   };

//   return (
//     <Container>
//       <div className={styles.head}>
//         <h1>Contacts</h1>
//         <ContactsIcon style={{ marginTop: "30px" }} fontSize="large" />
//       </div>

//       <ContactForm
//         addContact={addContact}
//         editContact={editContact}
//         currentContact={currentContact}
//         open={open}
//         handleClose={handleClose}
//       />

//       <div style={{ textAlign: "center" }}>
//          <Button  onClick={handleAddContact} variant="contained" >
//           Add Contact
//           <PersonAddAlt1Icon style={{ marginLeft: "5px" }} />
//         </Button>
//        {/* <Btn name={"Add Contact"} onClick={handleAddContact} icon={PersonAddAlt1Icon} style={{backgroundColor:'#42A5F5',borderRadius:'20px',cursor:'pointer'}} /> */}

//       </div>

//       <ContactList
//         contacts={contacts}
//         deleteContact={deleteContact}
//         setCurrentContact={(contact, index) => {
//           setCurrentContact(contact);
//           setCurrentIndex(index);
//           handleClickOpen();
//         }}
//       />
//     </Container>
//   );
// };

// export default App;



import React, { useState } from "react";
import { Container } from "@mui/material";
import ContactsIcon from "@mui/icons-material/Contacts";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import styles from "./App.module.css";
import ContactForm from "./components/contactForm";
import ContactList from "./components/contactList";
import Btn from "./components/button";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [open, setOpen] = useState(false);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const editContact = (updatedContact) => {
    const updatedContacts = [...contacts];
    updatedContacts[currentIndex] = updatedContact;
    setContacts(updatedContacts);
  };

  const deleteContact = (index) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentContact(null);
    setCurrentIndex(null);
  };

  const handleAddContact = () => {
    setCurrentContact(null); 
    setCurrentIndex(null);
    handleClickOpen();
  };

  return (
    <Container>
      <div className={styles.head}>
        <h1>Contacts</h1>
        <ContactsIcon style={{ marginTop: "30px" }} fontSize="large" />
      </div>

      <ContactForm
        addContact={addContact}
        editContact={editContact}
        currentContact={currentContact}
        open={open}
        handleClose={handleClose}
      />

      <div style={{ textAlign: "center" }}>
        <Btn 
          name="Add Contact" 
          onClick={handleAddContact} 
          icon={PersonAddAlt1Icon} 
          style={{ backgroundColor: '#42A5F5', borderRadius: '20px', cursor: 'pointer' }} 
        /> 
      </div>

      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
        setCurrentContact={(contact, index) => {
          setCurrentContact(contact);
          setCurrentIndex(index);
          handleClickOpen();
        }}
      />
    </Container>
  );
};

export default App;
