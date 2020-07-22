import React from 'react'

function Form () {
    return (
    <form className='form container'>

    <div>
        <h2>Welcome to User Registration</h2>
        <div>
            <h3>Please complete this form to continue:</h3>
        </div>
        <div className='register-form inputs'>
            <label>Name:&nbsp;
            {/* <input
                value={values.username}
                onChange={onInputChange}
                name='username'
                type='text'
            /> */}
            </label>
        </div>
    </div>
    
    </form>
    )
}
export default Form