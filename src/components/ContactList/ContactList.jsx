import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getContacts,
  removeContact,
  updateContact,
} from "../../redux/Contacts/operation";
import { selectToken } from "../../redux/Auth/selectors";
import {
  selectContactsLoadingStates,
  selectContacts,
} from "../../redux/Contacts/selectors";
import {
  selectNameFilter,
  selectNumberFilter,
  selectFilteredContacts, // Güncellenmiş selector'ı import et
} from "../../redux/Filters/selectors";
import axios from "axios";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { toast } from 'react-toastify';

function ContactList() {
  const dispatch = useDispatch();
  const allContacts = useSelector(selectContacts);
  const loadingStates = useSelector(selectContactsLoadingStates);
  const token = useSelector(selectToken);

  const nameFilter = useSelector(selectNameFilter);
  const numberFilter = useSelector(selectNumberFilter);
  const filteredContacts = useSelector(selectFilteredContacts); // Sıralanmış verileri al

  const displayContacts = filteredContacts; // Doğrudan sıralanmış verileri kullan

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
    dispatch(getContacts());
  }, [dispatch, token]);

  const handleDelete = async (id) => {
    await dispatch(removeContact(id));
  };

const handleUpdate = async (updatedContact) => {
  try {
    const currentContacts = allContacts; // Already fetched via useSelector
    const contactExists = currentContacts.some(c => c.id === updatedContact.id);
    if (!contactExists) {
      console.error("Contact ID does not exist:", updatedContact.id);
      toast.error("Contact not found!", toastSettings.error);
      return;
    }
    const result = await dispatch(updateContact(updatedContact));
    if (updateContact.rejected.match(result)) {
      console.error("Update failed:", result.payload);
    }
  } catch (error) {
    console.error("Unexpected error during update:", error);
  }
};
  return (
    <section className={styles.section}>
      <div className={styles.contactListBox}>
        {displayContacts && displayContacts.length > 0 ? (
          <ul className={styles.contactList}>
            {displayContacts.map((contact) => (
              <li key={contact.id} className={styles.contactItem}>
                <Contact
                  id={contact.id}
                  name={contact.name}
                  number={contact.number}
                  onDelete={() => handleDelete(contact.id)}
                  onUpdate={handleUpdate}
                />
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.noContacts}>
            {nameFilter || numberFilter
              ? "No contacts match your search criteria"
              : "No contacts found. Add some!"}
          </div>
        )}
      </div>
    </section>
  );
}

export default ContactList;