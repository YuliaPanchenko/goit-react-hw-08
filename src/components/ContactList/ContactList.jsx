import React, { useEffect } from "react";
import css from "../ContactList/ContactList.module.css";
import { Contact } from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/slice";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  deleteContact,
  fetchContacts,
} from "../../redux/contacts/operations";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => {
        return (
          <li className={css.contactItem} key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
              onDeleteContact={onDeleteContact}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
