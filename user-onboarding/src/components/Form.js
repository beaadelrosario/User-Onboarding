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

    select {
        width: 87.3%;
        padding: .5% 0;
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
        width: 140px;
        height: 45px;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 2.5px;
        font-weight: 800;
        color: #000;
        background-color: #fff;
        border: none;
        border-radius: 45px;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease 0s;
        cursor: pointer;
        outline: none;
    }

    button:hover {
        background:grey;
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
                <div id='inputBoxes'className='input-box'>
                <label>Role:&nbsp;
                    <select
                        onChange={onInputChange}
                        value={values.role}
                        name='role'
                    >
                        <option value=''>- Select an option -</option>
                        <option value='student'>Student</option>
                        <option value='alumni'>Alumni</option>
                        <option value='instructor'>Instructor</option>
                        <option value='tl'>Team Lead</option>
                    </select>
                </label>
                <p id='user-error'>{errors.role}</p>
                </div>
                <div id='termsBox'className='input-box'>
                    {/* <h3>Agree to Terms of Service?</h3> */}
                <label> Agree to Terms of Service? &nbsp;
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