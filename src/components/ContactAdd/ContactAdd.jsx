import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/Contacts/operation";
import {
  selectContactsLoadingStates,
  selectContactsError,
} from "../../redux/Contacts/selectors";
import styles from "./ContactAdd.module.css";

function ContactAdd() {
  const dispatch = useDispatch();
  const loadingStates = useSelector(selectContactsLoadingStates);
  const error = useSelector(selectContactsError);

  // Formik initial values
  const initialValues = {
    name: "",
    number: "",
  };

  // Form submit handler
  const handleSubmit = (values, { resetForm }) => {
    if (!values.name.trim() || !values.number.trim()) {
      alert("Please fill in both name and number fields.");
      return;
    }

    const newContact = {
      name: values.name.trim(),
      number: values.number.trim(),
    };

    dispatch(addContact(newContact))
      .unwrap()
      .then(() => {
        resetForm(); // Formu sıfırla
      })
      .catch((err) => {
        console.error("Error adding contact:", err);
      });
  };

  return (
    <section className={styles.section}>
      <div className={styles.addContactBox}>
        <h2>Add Contact</h2>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form className={styles.form}>
              <div className={styles.inputContainer}>
                <label htmlFor="name" className={styles.label}>
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  className={styles.input}
                  disabled={loadingStates.add}
                />
              </div>

              <div className={styles.inputContainer}>
                <label htmlFor="number" className={styles.label}>
                  Number
                </label>
                <Field
                  type="text"
                  name="number"
                  placeholder="Enter phone number"
                  className={styles.input}
                  disabled={loadingStates.add}
                />
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={loadingStates.add || isSubmitting}
              >
                {loadingStates.add ? "Adding..." : "Add"}
              </button>
            </Form>
          )}
        </Formik>

        {error && <p className={styles.errorMessage}>Error: {error}</p>}
      </div>
    </section>
  );
}

export default ContactAdd;