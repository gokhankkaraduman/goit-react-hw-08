import { useSelector, useDispatch } from 'react-redux';
import css from './Header.module.css';
import AuthNav from '../../AuthNav/AuthNav';
import UserNav from '../../UserNav/UserNav';
import Logo from '../../Logo/Logo';
import { selectIsLoggedIn } from '../../../redux/Auth/selectors';
import { useState } from 'react';

function Header() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header className={css.header}>
            <div className={css.container}>
                <Logo />
                <div
                    className={`${css.hamburger} ${isNavOpen ? css.active : ''}`}
                    onClick={toggleNav}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={`${css.nav} ${isNavOpen ? css.active : ''}`}>
                    {isLoggedIn ? <UserNav /> : <AuthNav />}
                </div>
            </div>
        </header>
    );
}

export default Header;