import * as yup from 'yup'

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(30, "Please include your first and last name")
    .required("Name is required")
})

export default formSchema
