import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, removeContact, updateContact } from "../../redux/Contacts/operation";
import { selectToken } from "../../redux/Auth/selectors";
import {
  selectContactsLoadingStates,
  selectContacts,
} from "../../redux/Contacts/selectors";
import axios from "axios";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loadingStates = useSelector(selectContactsLoadingStates);
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
    dispatch(getContacts());
  }, [dispatch, token]);

  const handleDelete = async (id) => {
    await dispatch(removeContact(id));
    dispatch(getContacts());
  };

  const handleUpdate = async (updatedContact) => {
    await dispatch(updateContact(updatedContact));
    dispatch(getContacts());
  };

  return (
    <section className={styles.section}>
      <div className={styles.contactListBox}>
        <ul className={styles.contactList}>
          {contacts.map((contact) => (
            <li key={contact.id} className={styles.contactItem}>
              <Contact
                id={contact.id}
                name={contact.name}
                number={contact.number}
                onDelete={() => handleDelete(contact.id)}
                onUpdate={handleUpdate} // handleUpdate fonksiyonunu doğrudan aktar
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ContactList;