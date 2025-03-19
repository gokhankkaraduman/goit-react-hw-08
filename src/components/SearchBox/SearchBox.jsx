import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import {
  changeNameFilter,
  changeNumberFilter,
  changeSearchType,
  changeSortType,
} from "../../redux/Filters/slice";
import styles from "./SearchBox.module.css";

function SearchBox() {
  const dispatch = useDispatch();
  const { name, searchType, sortType } = useSelector((state) => state.filters);
  const contacts = useSelector((state) => state.contacts.items);

  const initialValues = {
    searchType: searchType || "name",
    search: name || "",
    sortType: sortType || "creationDate",
  };

  return (
    <section className={styles.section}>
      <div className={styles.searchBox}>
        <Formik initialValues={initialValues} onSubmit={() => {}}>
          {({ values, handleChange }) => (
            <Form className={styles.formContainer}>
              <div className={styles.searchContainer}>
                <div className={styles.selectContainer}>
                  <label htmlFor="searchType" className={styles.label}>
                    Search By
                  </label>
                  <Field
                    as="select"
                    name="searchType"
                    className={styles.select}
                    onChange={(e) => {
                      handleChange(e);
                      dispatch(changeSearchType(e.target.value));
                    }}
                  >
                    <option value="name">Name</option>
                    <option value="number">Number</option>
                  </Field>
                </div>

                <div className={styles.inputContainer}>
                  <label htmlFor="search" className={styles.label}>
                    {`Search by ${values.searchType}`}
                  </label>
                  <Field
                    type="text"
                    name="search"
                    className={styles.input}
                    placeholder={`Search by ${values.searchType}`}
                    onChange={(e) => {
                      handleChange(e);
                      const value = e.target.value;
                      if (values.searchType === "name") {
                        dispatch(changeNameFilter({ filter: value, contacts }));
                      } else if (values.searchType === "number") {
                        dispatch(changeNumberFilter({ filter: value, contacts }));
                      }
                    }}
                  />
                </div>

                <div className={styles.selectContainer}>
                  <label htmlFor="sortType" className={styles.label}>
                    Sort By
                  </label>
                  <Field
                    as="select"
                    name="sortType"
                    className={styles.select}
                    onChange={(e) => {
                      handleChange(e);
                      dispatch(changeSortType(e.target.value));
                    }}
                  >
                    <option value="creationDate">Creation Date</option>
                    <option value="name">Name</option>
                    <option value="number">Number</option>
                  </Field>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}

export default SearchBox;