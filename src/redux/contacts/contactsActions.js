import { createAction } from "@reduxjs/toolkit";
import uuid from "uuid/v4";

const addContact = createAction("contact/add", (name, number) => ({
  payload: { newContact: { id: uuid(), name, number } }
}));
const removeContact = createAction("contact/remove");
const formFilter = createAction("contact/formFilter");

// const addContact = (name, number) => ({
//   type: "contact/add",
//   payload: {
//     newContact: {
//       id: uuid(),
//       name,
//       number
//     }
//   }
// });

// const formFilter = filter => ({
//   type: "contact/formFilter",
//   payload: { filter }
// });

export default { addContact, formFilter, removeContact };
