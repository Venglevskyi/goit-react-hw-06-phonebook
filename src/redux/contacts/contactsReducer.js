import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsActions from "./contactsActions";

const onAddContact = (state, action) => {
  return [...state, action.payload.newContact];
};
const onRemoveContact = (state, action) =>
  state.filter(({ id }) => id !== action.payload);

const items = createReducer([], {
  [contactsActions.addContact]: onAddContact,
  [contactsActions.removeContact]: onRemoveContact
});

const filter = createReducer(" ", {
  [contactsActions.formFilter]: (state, action) => action.payload
});

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case contactsActions.addContact.type:
//       return [...state, payload.newContact];

//     case contactsActions.removeContact.type:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case contactsActions.formFilter.type:
//       return payload;

//     default:
//       return state;
//   }
// };

export default combineReducers({ items, filter });
