import { useState, useContext } from 'react'
import Nav from './nav'
import Home from './home'
import { AddContext } from "./context";
import Sidebar from './sidebar';

function App() {
  const {popUp, togglePopUp, isSideBarShown} = useContext(AddContext)


  return (
    <main className=' App container relative mx-auto pb-4 px-3 box-border'>
      {popUp && <div className='bg-black opacity-90 w-full h-full absolute z-20 '></div>}
      <Nav/>
      <Sidebar/>
      <Home/>
    </main>
  )
}

export default App
