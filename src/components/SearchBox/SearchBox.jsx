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

  // Initial form values
  const initialValues = {
    searchType: searchType || "name",
    search: name || "",
    sortType: sortType || "creationDate",
  };

  const handleSearchChange = (e, searchType) => {
    const value = e.target.value;
    if (searchType === "name") {
      dispatch(
        changeNameFilter({
          filter: value,
          contacts,
        })
      );
    } else if (searchType === "number") {
      dispatch(
        changeNumberFilter({
          filter: value,
          contacts,
        })
      );
    }
  };

  return (
    <section className={styles.section}>
        <div className={styles.searchBox}>
        <Formik
            initialValues={initialValues}
            onSubmit={() => {}}
        >
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
                        handleSearchChange(e, values.searchType);
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
                            dispatch(changeSortType({
                                sortType: e.target.value,
                                contacts: contacts //contacts parametresini ekledik
                            }));
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
