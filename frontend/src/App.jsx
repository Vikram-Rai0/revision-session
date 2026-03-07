import './App.css'
import React from 'react'
import ParentComponent from './components/props/ParentComponent'
import UseState from './components/props/UseState'
import UseEffect from './components/props/UseEffect'


const App = () => {
  return (
    <div class="border-2 solid red h-[50vh] w-[50vw]">
      {/* <ParentComponent /> */}
      {/* <UseState /> */}
      <UseEffect />

    </div>
  )
}

export default App
