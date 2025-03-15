import css from './Header.module.css';
import AuthNav from '../../AuthNav/AuthNav';
import UserNav from '../../UserNav/UserNav';
import Logo from '../../Logo/Logo';

function Header () {
    const isLogin = false;
    return (
        <header className={css.header}> 
            <div className={css.container}>
                <Logo />
                {isLogin ? <UserNav /> : <AuthNav />}
            </div>
        </header>
    );
}

export default Header;
