import { NavLink } from 'react-router';
import css from './Header.module.css';
import logo from '../../../assets/logo/android-chrome-512x512.png';
import AuthNav from '../../AuthNav/AuthNav';

function Header () {

    return (
        <header> 
            <NavLink to="/"> 
                <span>
                    <img src={logo} alt="logo"  width={80} />
                </span>
                Nexora
            </NavLink>
            <AuthNav />
        </header>
    );
}

export default Header;
