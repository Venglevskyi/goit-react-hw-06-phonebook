import React from "react";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";
import PropTypes from "prop-types";

import ContactListItem from "../ContactListItem/ContactListItem";

const ContactList = ({ contacts, onRemoveContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <ContactListItem
        key={id}
        name={name}
        number={number}
        removeContact={() => onRemoveContact(id)}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  ),
  onRemoveContact: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  const normalizedFilter = filter.toLowerCase();

  const getVisibleContact = items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return {
    contacts: getVisibleContact
  };
};

const mapDispatchToProps = {
  onRemoveContact: contactsActions.removeContact
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
