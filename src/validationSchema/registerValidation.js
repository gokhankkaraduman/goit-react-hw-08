import * as yup from "yup";

const validationSchema = yup.object({
    name: yup
        .string()
        .min(2, "Name should be at least 2 characters")
        .max(30, "Name should not exceed 30 characters")
        .matches(/^[a-zA-Z\s]*$/, "Name can only contain letters and spaces")
        .required("Name is required"),
    email: yup
        .string()
        .email("Enter a valid email")
        .required("Email is required"),
    password: yup
        .string()
        .min(7, "Password should be at least 7 characters")
        .matches(/[0-9]/, "Password must contain at least one number")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .required("Password is required"),
});

export default validationSchema;