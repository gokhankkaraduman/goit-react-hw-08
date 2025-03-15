import LoginForm from '../../components/LoginForm/LoginForm';
import css from './LoginPage.module.css';

function LoginPage () {
    return (
        <section className={css.section}>
            <div className={css.container}>
                <h1 className={css.title}>Login</h1>
                <LoginForm />
            </div>
        </section>
    );
};
export default LoginPage;