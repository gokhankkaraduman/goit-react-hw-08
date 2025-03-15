import { Formik, Form, Field } from 'formik';
import { BiLogIn } from "react-icons/bi";
import css from './RegisterForm.module.css';

const RegisterForm = () => {
    return (
        <Formik initialValues={{ name: '', email: '', password: '' }}>
            <div className={css.container}>
                <Form className={css.form}>
                    <div className={css.fieldContainer}>
                        <label htmlFor="name" className={css.label}>Name</label>
                        <Field 
                            name="name" 
                            type="text"
                            placeholder="Please enter your name"
                            className={css.input}
                        />
                    </div>
                    
                    <div className={css.fieldContainer}>
                        <label htmlFor="email" className={css.label}>Email</label>
                        <Field 
                            name="email" 
                            type="email"
                            placeholder="Please enter your email"
                            className={css.input}
                        />
                    </div>
                    
                    <div className={css.fieldContainer}>
                        <label htmlFor="password" className={css.label}>Password</label>
                        <Field 
                            name="password" 
                            type="password" 
                            placeholder="Please enter your password"
                            className={css.input}
                        />
                    </div>
                    
                    <button 
                        type="submit"
                        className={css.btn}
                    >
                        <span className={css.icon}>
                            <BiLogIn />
                        </span>
                        Submit
                    </button>  
                </Form>
            </div>
        </Formik>
    );
};

export default RegisterForm;
