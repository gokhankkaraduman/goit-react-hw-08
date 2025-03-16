import { useSelector } from 'react-redux';
import css from './Header.module.css';
import AuthNav from '../../AuthNav/AuthNav';
import UserNav from '../../UserNav/UserNav';
import Logo from '../../Logo/Logo';
import { selectIsLoggedIn } from '../../../redux/Auth/selectors';

function Header () {
    const isLoggedIn = useSelector(selectIsLoggedIn); 
    return (
        <header className={css.header}> 
            <div className={css.container}>
                <Logo />
                {isLoggedIn ? <UserNav /> : <AuthNav />}
            </div>
        </header>
    );
}

export default Header;
