import React from 'react'
import { useState } from 'react';
const OnChange = () => {

    const [email, setEmail] = useState("");

    const handleChange = (e) => {
        setEmail(e.target.value); //e.target.value gets the input value.
    }
    return (
        <div>
            <h1>{email}</h1>
            <input type="text" onChange={handleChange} className='p-2 w-50 h-15 bg-amber-500' />
        </div>
    )
}

export default OnChange