import RegisterForm from '../../components/RegisterForm/RegisterForm';
import css from './RegisterPage.module.css';

function RegisterPage () {
    return (
        <section className={css.section}>
            <div className={css.container}>
                <h1 className={css.title}>Register</h1>
                <RegisterForm />
            </div>
        </section>
    );
};
export default RegisterPage;