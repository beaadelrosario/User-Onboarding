import React from 'react'

export default function User({id, details}) {
    let string = JSON.stringify(details)
    return (
        <div className='user container'>
            <h2>Welcome, {details.name}!</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
            <p>Terms of Service: AGREED</p>
            <button className='logIn'>Log In</button>
            <p>API Post: {string}</p>
        </div>
    )
} 