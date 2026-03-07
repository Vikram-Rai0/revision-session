import React from 'react'

const OnMoustOver = () => {
    function handleMouse(){
        console.log("i have hover!");
    }
    return (
        <div>
            <div onMouseOver={handleMouse} className='p-2 h-30 w-60 rounded-2xl border-2 bg-red-400'> 

            <h1>OverMe</h1>
            </div>
    </div >
  )
}

export default OnMoustOver