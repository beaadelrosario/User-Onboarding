import React from 'react'

export default function User({id, details}) {
    return (
        <div className='user container'>
            <h2>Welcome, {details.name}!</h2>
            <p>Email: {details.email}</p>
            <p>Terms of Service: AGREED</p>
        </div>

    )
} 