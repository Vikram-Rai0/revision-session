import React from 'react'
import { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0);
    const [index, setIndex] = useState(0);

    function counter() {
        setCount(count + 1);
        setIndex((index + 1) % color.length);

    }
    let color = ["text-red-500", "text-green-500", "text-blue-500", "text-yellow-500"];

    return (
        <>
            <h1 className={`font-extrabold text-4xl mb-10 ${color[index]}`}>{count}</h1>
            <button onClick={counter} className='border-2 bg-red-600 p-5 rounded-2xl '>click</button>
        </>
    )
}

export default UseState