import React from "react";

import styles from "./base.module.css";

import Layout from "./Components/Layout/Layout";
import ContactForm from "./Components/ContactForm/ContactForm";
import Filter from "./Components/Filter/Filter";
import ContactList from "./Components/ContactList/ContactList";

const App = () => {
  return (
    <Layout>
      {/* <Toggler /> */}
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </Layout>
  );
};

export default App;
