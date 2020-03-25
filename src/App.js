import React from "react";

import styles from "./base.module.css";

import Layout from "./Components/Layout/Layout";
import Toggler from "./Components/Toggler/Toggler";
import ContactForm from "./Components/ContactForm/ContactForm";
import Filter from "./Components/Filter/Filter";
import ContactList from "./Components/ContactList/ContactList";
import ThemeContext from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeContext>
      <Layout>
        <Toggler />
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={styles.title}>Contacts</h2>
        <Filter />
        <ContactList />
      </Layout>
    </ThemeContext>
  );
};

export default App;
