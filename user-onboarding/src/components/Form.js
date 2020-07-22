import React from 'react'


function Form (props) {

    const {
        values,
        submit,
        inputChange,
        errors,
        post
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }

      const onInputChange = evt => {
        const { name, value } = evt.target
        inputChange(name, value)
      }

    return (
    <form className='form container' onSubmit={onSubmit}>
    <div>
        <h2>Welcome to User Registration</h2>

        <div>
            <h3>Please complete this form to continue:</h3>
        </div>

        <div className='register-form inputs'>
            <label>Name:&nbsp;
                <input
                    value={values.name}
                    onChange={onInputChange}
                    name='name'
                    type='text'
                />
            </label>
            <button >Submit</button>
        </div>

        <div className='errors'>
            <p id='user-error'>{errors.name}</p>
        </div>

    </div>
    </form>
    )
}
export default Form