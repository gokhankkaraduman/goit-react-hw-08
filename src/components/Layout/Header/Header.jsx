import css from './Header.module.css';
import AuthNav from '../../AuthNav/AuthNav';
import UserNav from '../../UserNav/UserNav';
import Logo from '../../Logo/Logo';

function Header () {

    return (
        <header> 
            <Logo />
            <AuthNav />
            <UserNav />
        </header>
    );
}

export default Header;
