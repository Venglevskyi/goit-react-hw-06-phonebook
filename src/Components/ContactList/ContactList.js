import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ContactListItem from "../ContactListItem/ContactListItem";

const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(({ id }) => (
      <ContactListItem key={id} id={id} />
    ))}
  </ul>
);

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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  )
};

export default connect(mapStateToProps)(ContactList);
