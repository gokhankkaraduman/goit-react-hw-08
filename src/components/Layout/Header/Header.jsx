import css from './Header.module.css';
import AuthNav from '../../AuthNav/AuthNav';
import UserNav from '../../UserNav/UserNav';
import Logo from '../../Logo/Logo';

function Header () {
    const isLogin = false;
    return (
        <header className={css.header}> 
            <Logo />
            {isLogin ? <UserNav /> : <AuthNav />}
        </header>
    );
}

export default Header;
