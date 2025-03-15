import logo from '../../assets/logo/android-chrome-512x512.png';
import { NavLink } from 'react-router';
import css from './Logo.module.css';

function Logo () {
    return ( 
    <NavLink to="/"> 
        <span className={css.logoimg}>
            <img src={logo} alt="logo"  width={80} />
        </span>
        <p className={css.logotext}>Nexora</p>
    </NavLink>
    )
};
export default Logo;

