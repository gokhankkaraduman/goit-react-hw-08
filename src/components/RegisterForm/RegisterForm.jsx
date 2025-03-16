import { Formik, Form, Field } from 'formik';
import { BiLogIn } from "react-icons/bi";
import css from './RegisterForm.module.css';
import validationSchema from '../../validationSchema/registerValidation';
import { registerUser } from '../../redux/Auth/operation';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleValidation = (values) => {
        const errors = {};
        try {
            validationSchema.validateSync(values, { abortEarly: false });
        } catch (validationErrors) {
            validationErrors.inner.forEach((error) => {
                errors[error.path] = error.message;
            });
        }
        return errors;
    };

    const handleSubmit = (values ) =>{
        dispatch(registerUser(values)).unwrap().then(() => {
            navigate('/login');
            console.log('User registered successfully');
        });
    };

    return (
        <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validate={handleValidation}
            onSubmit={handleSubmit}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                isSubmitting,
            }) => (
                <div className={css.container}>
                    <Form className={css.form}>
                        <div className={css.fieldContainer}>
                            <label htmlFor="name" className={css.label}>Name</label>
                            <Field
                                name="name"
                                type="text"
                                placeholder="Please enter your name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                autoComplete="on"
                                disabled={isSubmitting}
                                className={css.input}
                            />
                            {errors.name && touched.name && (
                                <div className={css.error}>{errors.name}</div>
                            )}
                        </div>

                        <div className={css.fieldContainer}>
                            <label htmlFor="email" className={css.label}>Email</label>
                            <Field
                                name="email"
                                type="email"
                                placeholder="Please enter your email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                autoComplete="on"
                                disabled={isSubmitting}
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
                                autoComplete="on"
                                disabled={isSubmitting}
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

export default RegisterForm;
