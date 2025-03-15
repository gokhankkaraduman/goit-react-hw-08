import { Formik, Form, Field } from 'formik';
import { BiLogIn } from "react-icons/bi";
import css from './LoginForm.module.css';
import validationSchema from '../../validationSchema/loginValidation';

const LoginForm = () => {
    return (
        <Formik 
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
        >
            {({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
                <div className={css.container}>
                    <Form className={css.form}>
                        <div className={css.fieldContainer}>
                            <label htmlFor="email" className={css.label}>Email</label>
                            <Field 
                                name="email" 
                                type="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Please enter your email"
                                className={css.input}
                            />
                            {errors.email && touched.email && (
                                <div className={css.error}>{errors.email}</div>
                            )}
                        </div>
                        
                        <div className={css.fieldContainer}>
                            <label htmlFor="password" className={css.label}>Password</label>
                            <Field 
                                name="password" 
                                type="password" 
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Please enter your password"
                                className={css.input}
                            />
                            {errors.password && touched.password && (
                                <div className={css.error}>{errors.password}</div>
                            )}
                        </div>
                        
                        <button 
                            type="submit"
                            className={css.btn}
                            disabled={isSubmitting}
                        >
                            <span className={css.icon}>
                                <BiLogIn />
                            </span>
                            Submit
                        </button>  
                    </Form>
                </div>
            )}
        </Formik>
    );
};

export default LoginForm;
