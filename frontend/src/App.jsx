import './App.css'
import React from 'react'
import ParentComponent from './components/props/ParentComponent'


const App = () => {
  return (
    <div class = "border-2 solid red h-[50vh] w-[50vw]">
      <ParentComponent />
    </div>
  )
}

export default App
