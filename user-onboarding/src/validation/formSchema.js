import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
    .string()
    .min(1, "Please include your first and last name")
    .required("Name is required"),
    email: yup
    .string()
    .min(5, "Please enter a valid email address")
    .required("Email is required"),
    password: yup
    .string()
    .min(10, "Please create a password including one number")
    .required("Password is required")
})

export default formSchema
