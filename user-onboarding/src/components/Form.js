import React from 'react'
import styled from 'styled-components'

const StyledApp = styled.form`
    border:1px solid red;
    padding-bottom:2.5%;
    display:flex;
    flex-direction:row;
    justify-content: center;
    margin-left: 30%;
    margin-right: 30%;
    
    #inputBoxes {
        padding: 1% 0;
        text-align:start;
        width:100%;
    }

    input {
        width: 97.6%;
        margin: 1% 0;
    }

    #user-error {
        background:red;
        color:white;
        text-transform: uppercase;
        font-weight:800;
        letter-spacing:1px;
    }

    #termsBox {
        display:flex;
        flex-direction:column;
    }

    /* #formheader {
        border:1px solid yellow;
    } */

    button {
        padding: 2% 7%;
        font-weight:700;
        letter-spacing:1.1px;
    }

    button:hover {
        background:pink;
        color:red;
    }
`
function Form (props) {

    const {
        values,
        submit,
        inputChange,
        checkboxChange,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }

      const onCheckboxChange = evt => {
        const { name, checked } = evt.target
        checkboxChange(name, checked)
      }

      const onInputChange = evt => {
        const { name, value } = evt.target
        inputChange(name, value)
      }

    return (
    <StyledApp className='form container' onSubmit={onSubmit}>
        <div id='formheader'>
            <h2>Getting Started</h2>

            <div>
                <h3>Please complete this form to continue:</h3>
            </div>

            <div className='register-form inputs'>
                <div id='inputBoxes'className='input-box'>
                <label>Name:&nbsp;
                    <input
                        value={values.name}
                        onChange={onInputChange}
                        name='name'
                        type='text'
                    />
                </label>
                <p id='user-error'>{errors.name}</p>
                </div>

                <div id='inputBoxes'className='input-box'>
                <label>Email:&nbsp;
                    <input
                        value={values.email}
                        onChange={onInputChange}
                        name='email'
                        type='email'
                    />
                </label>
                <p id='user-error'>{errors.email}</p>
                </div>

                <div id='inputBoxes'className='input-box'>
                <label>Password:&nbsp;
                    <input
                        value={values.password}
                        onChange={onInputChange}
                        name='password'
                        type='password'
                    />
                </label>
                <p id='user-error'>{errors.password}</p>
                </div>

                <div id='termsBox'className='input-box'>
                    <h3>Agree to Terms of Service?</h3>
                <label>&nbsp;
                    <input
                        type="checkbox"
                        name='terms'
                        checked={values.terms === true}
                        onChange={onCheckboxChange}
                    />
                </label>
                <p id='user-error'>{errors.terms}</p>
                </div>

                <div>
                    <button>REGISTER</button>
                </div>
            </div>
        </div>
    </StyledApp>
    )
}
export default Form