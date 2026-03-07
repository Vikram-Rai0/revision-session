import './App.css'
import React from 'react'
import ParentComponent from './components/props/ParentComponent'
import UseState from './components/props/UseState'
import UseEffect from './components/props/UseEffect'
import Onclick from './components/eventHandeling/Onclick'
import OnChange from './components/eventHandeling/OnChange'
import OnSubmit from './components/eventHandeling/OnSubmit'
import OnMoustOver from './components/eventHandeling/OnMoustOver'
const App = () => {
  return (
    <div class="border-2 solid red h-[50vh] w-[50vw] flex justify-center items-center">
      {/* <ParentComponent /> */}
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <Onclick/> */}
      {/* <OnChange /> */}
      {/* <OnSubmit/> */}
      <OnMoustOver />

    </div>
  )
}

export default App
