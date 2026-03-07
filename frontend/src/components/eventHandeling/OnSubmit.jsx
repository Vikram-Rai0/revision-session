import React from 'react'
import { useState } from 'react';
const OnSubmit = () => {
    const [info, setInfo] = useState(" ");
    const [input, setInput] = useState(" ");

    function handleChange(e) {
        setInput(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault(); //preventDefault() stops page refresh.
        console.log("Form submitted")
        setInfo(input)
    }
    return (
        <div>
            <h1>{info}</h1>
            <form action="" onSubmit={handleSubmit}>
                <div>

                    <input type="text" className='p-2 h-10 w-50 border-2 rounded-2xl bg-blue-300' onChange={handleChange} />
                </div>
                <input type="submit" className='p-2 h-10 w-40 border-2 rounded-2xl bg-amber-600' />
            </form>
        </div>
    )
}

export default OnSubmit