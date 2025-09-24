import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";
import "./ContactsPage.css";
import "../../components/contactForm/ContactForm.css";
import "../../components/tileList/TileList.css";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const contacts = props.contacts;
  const addContact = props.addContact;
  /* local state */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!duplicate) {
      addContact(name, phone, email);
      //reset
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    setDuplicate(contacts.some((contact) => contact.name === name));
  }, [name, contacts]);

  return (
    <div className="contacts-page">
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
          className="contacts-form"
        />
      </section>
      <hr style={{ color: "#1e538b" }} />
      <section>
        <h2>Contacts</h2>
        <TileList className="tile-list" objArr={props.contacts} />
      </section>
    </div>
  );
};
