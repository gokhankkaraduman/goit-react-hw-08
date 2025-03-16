import { NavLink } from "react-router";
import css from './AuthNav.module.css';

function AuthNav () {
    return (
        <nav className={css.authNav}>
            <ul className={css.authNavList}>
                <li className={css.authNavItem}>
                    <NavLink to="/register" >Register</NavLink>
                </li>
                <li className={css.authNavItem}>
                    <NavLink to="/login" >Login</NavLink>
                </li>
            </ul>
        </nav>
    );
};
export default AuthNav;