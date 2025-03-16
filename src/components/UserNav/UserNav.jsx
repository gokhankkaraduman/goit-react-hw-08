import css from './UserNav.module.css';
import { HiOutlineLogout } from "react-icons/hi";
import { selectAuth } from '../../redux/Auth/selectors';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutUser } from '../../redux/Auth/operation';
import { useDispatch } from 'react-redux';


function UserNav () {
    const auth = useSelector(selectAuth);
    
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutUser()).unwrap().then(() => {
            
        });
    };
    return (
        <div className={css.userNav}>

            <div className={css.userNavContent}>
                <p className={css.text}>Welcome {auth.user.name}</p>
            </div>
            <div className={css.userNavLinks}>
                <NavLink to="/" className={css.home}> Home </NavLink>
                <NavLink to="/contacts" className={css.contact}> Contacts </NavLink>
            </div>
            <button 
                className={css.userNavButton}
                onClick={handleLogout}>
                Logout
                <span className={css.userNavIcon}>
                    <HiOutlineLogout />
                </span>
            </button>
        </div>
    )
};
export default UserNav;