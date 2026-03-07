import React from 'react'

const Onclick = () => {
    function alertMessage() {
        alert("Are you Sure you understand EventHandling");
    }
    return (
        <div><button onClick={alertMessage} className='border-2 border-blue-500 p-5 rounded-2xl'>Click!</button></div>
    )
}

export default Onclick