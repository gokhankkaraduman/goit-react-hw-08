import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactAdd from '../../components/ContactAdd/ContactAdd'
import css from './ContactsPage.module.css'

function ContactPage () {
    return (
        <div className={css.container }>
            <SearchBox />
            <div className={css.contact}>

                <ContactAdd />
                <ContactList />
            </div>
        </div>
    )
};
export default ContactPage;