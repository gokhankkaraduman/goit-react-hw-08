import css from './UserNav.module.css';
import { HiOutlineLogout } from "react-icons/hi";

function UserNav () {
    return (
        <div className={css.userNav}>
            <div className={css.userNavContent}>
                <p className={css.text}>Welcome User</p>
            </div>
            <button className={css.userNavButton}>
                Logout
                <span className={css.userNavIcon}>
                    <HiOutlineLogout />
                </span>
            </button>
        </div>
    )
};
export default UserNav;