import React, {useState , useEffect}from 'react'
import Form from './components/Form'
import axios from 'axios'
import * as yup from 'yup'
import './App.css'
import formSchema from './validation/formSchema'
import User from './components/User'
import styled from 'styled-components'

const StyledApp = styled.div`
  background: black;
  color:white;
  text-align:center;
  padding: 10% 0;
  font-family:Arial, Helvetica, sans-serif;
  letter-spacing:.5px;

  h1 {
    color:crimson;
    text-transform: uppercase;
  }

`

const initialFormValues = {
  name: '',
  email: '',
  role: '',
  password: '',
  terms: false,
}

const initialFormErrors = {
  name: '',
  email: '',
  role:'',
  password: ''
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

  const checkboxChange = (name, isChecked) => {
    setFormValues({
      ...formValues,
        [name]: isChecked // not an array
      })
  }

  const submit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms
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
    <StyledApp className='container'>
      <h1>User Registration</h1>
      <Form 
      values={formValues}
      inputChange={inputChange}
      checkboxChange={checkboxChange}
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

    </StyledApp>
  )
}

export default App;
