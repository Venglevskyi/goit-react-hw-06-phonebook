import React from "react";
import PropTypes from "prop-types";

import styles from "./contactList.module.css";

const ContactListItem = ({ name, number, removeContact }) => (
  <li className={styles.contactsListItem}>
    <p>
      {name}: {number}
    </p>
    <button
      type="button"
      className={styles.deleteButton}
      onClick={removeContact}
    >
      Delete
    </button>
  </li>
);

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  removeContact: PropTypes.func.isRequired
};

export default ContactListItem;
