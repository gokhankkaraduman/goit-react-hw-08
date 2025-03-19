import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/Contacts/operation";
import {
  selectContactsLoadingStates,
  selectContactsError,
} from "../../redux/Contacts/selectors";
import styles from "./ContactAdd.module.css";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";

function ContactAdd() {
  const dispatch = useDispatch();
  const loadingStates = useSelector(selectContactsLoadingStates);
  const error = useSelector(selectContactsError);

  const toastSettings = {
    success: {
      icon: "✅",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      position: "top-right",
    },
    error: {
      icon: "❌",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      position: "top-right",
    },
  };

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    if (!values.name.trim() || !values.number.trim()) {
      toast.error("Please fill in both name and number fields.", toastSettings.error);
      return;
    }

    const newContact = {
      name: values.name.trim(),
      number: values.number.trim(),
    };

    setSubmitting(true); // Butonu hemen devre dışı bırak
    dispatch(addContact(newContact))
      .unwrap()
      .then(() => {
        toast.success("Contact added successfully!", toastSettings.success);
        resetForm();
      })
      .catch((err) => {
        toast.error(`Error adding contact: ${err.message || "Unknown error"}`, toastSettings.error);
        console.error("Error adding contact:", err);
      })
      .finally(() => {
        setSubmitting(false); // İşlem tamamlandığında butonu etkinleştir
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
                  disabled={isSubmitting} // loadingStates.add kaldırıldı
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
                  disabled={isSubmitting} // loadingStates.add kaldırıldı
                />
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting} // loadingStates.add kaldırıldı
              >
                {isSubmitting ? "Adding..." : "Add"}
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