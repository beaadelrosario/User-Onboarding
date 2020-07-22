import React, {useState , useEffect}from 'react'
import Form from './components/Form'
import axios from 'axios'
import * as yup from 'yup'
import './App.css'
import formSchema from './validation/formSchema'
import User from './components/User'

const initialFormValues = {
  name: ''
}

const initialFormErrors = {
  name: ''
}

const initialUsers = []
const initialDisabled = true

function App() {

  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled) 

  const postUser = (user) => {
    axios.post('https://reqres.in/api/users', user)
    .then(res => {
      console.log(res.data);
      setUsers([res.data,...users])
      setFormValues(initialFormValues)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const submit = () => {
    const newUser = {
      name: formValues.name.trim()
    }
    postUser(newUser)
  }

  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)

      .validate(value)

      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })

    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
  }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid =>{
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <div className='container'>
      <h1>User Onboarding</h1>
      <Form 
      values={formValues}
      inputChange={inputChange}
      submit={submit}
      disabled={disabled}
      errors={formErrors}
      post={postUser}
      />

      {
        users.map(user => {
          return (
            <User key={user.id} details={user} />
          )
        })
      }

    </div>
  )
}

export default App;
