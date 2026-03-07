// 🧠 What is useEffect?

// Definition:
// useEffect lets you run side effects in a React component.

// Side effects = things that happen outside rendering UI.

// Examples:

// Fetch API data

// Set timers

// Add event listeners

// Update document title


// The empty array [] tells React:

// ➡ Run this effect only once when the component mounts.
import React from 'react'
import { useEffect, useState } from 'react'
const UseEffect = () => {
    // const [game, setGame] = useState("rock");
    const [index, setIndex] = useState(0);
    const option = ["rock", "sissor", "Paper"];

    function startGame() {

        setIndex((index + 1) % option.length)
    }

    useEffect(() => {
        console.log("Component mounted");

        function handleResize() {
            console.log("Window Resize");
            window.addEventListener("resize", handleResize)
        }
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])
    return (

        <>
            <h1></h1>
            <h1 className={``}>{option[index]}</h1>
            <button onClick={startGame}>click</button></>
    )
}

export default UseEffect