import { useState } from "react";
import styles from "./Contact.module.css";
import { FaTrash, FaUser, FaPhone, FaEdit, FaSave } from "react-icons/fa";

function Contact({ id, name, number, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedNumber, setEditedNumber] = useState(number);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (!editedName.trim() || !editedNumber.trim()) {
      alert("Name and number cannot be empty!");
      return;
    }

    if (editedName === name && editedNumber === number) {
      setIsEditing(false);
      return;
    }

    const updatedContact = {
      id,
      name: editedName.trim(),
      number: editedNumber.trim(),
    };

    onUpdate(updatedContact);
    setIsEditing(false);
  };

  return (
    <div className={styles.contactCard}>
      {isEditing ? (
        <div className={styles.editContainer}>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            className={styles.editInput}
            placeholder="Edit name"
          />
          <input
            type="text"
            value={editedNumber}
            onChange={(e) => setEditedNumber(e.target.value)}
            className={styles.editInput}
            placeholder="Edit number"
          />
          <button className={styles.saveButton} onClick={handleSave}>
            <FaSave /> Save
          </button>
        </div>
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.contactInfo}>
            <p className={styles.contactName}>
              <FaUser className={styles.icon} /> {name}
            </p>
            <p className={styles.contactNumber}>
              <FaPhone className={styles.icon} /> {number}
            </p>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.editButton} onClick={handleEdit}>
              <FaEdit /> Edit
            </button>
            <button className={styles.deleteButton} onClick={onDelete}>
              <FaTrash /> Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;