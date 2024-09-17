import { useEffect, useState } from 'react'
import './App.css'





function App() {
  
  
  const [bgColor, setBgColor] = useState('')
  const handler = (e)=>{
    const  body = document.querySelector('body')
    body.style.background =  bgColor
  }

console.log(bgColor);


  return (
    <>
    <h1 className='font-semibold font-sans text-black'>Select the background color</h1>
      <div
    
      className=' flex flex-col p-4 gap-5 justify-around'>
        <button
        value={'red'}
        onClick={(e)=>{handler();setBgColor(e.target.value)}}
        className='bg-red-800'>RED</button>

        <button 
        value={'green'}
        onClick={(e)=>{handler();setBgColor(e.target.value)}}
        className='bg-green-700'>GREEN</button>

        <button 
        value={'blue'}
        onClick={(e)=>{handler();setBgColor(e.target.value)}}
        className='bg-blue-800'>BLUE</button>

        <button 
        value={'orange'}
        onClick={(e)=>{handler();setBgColor(e.target.value)}}
        className='bg-orange-400'>ORANGE</button>

        <button 
        value={'yellow'}
        onClick={(e)=>{handler();setBgColor(e.target.value)}}
        className='bg-yellow-300'>YELLOW</button>

        <button 
        value={'purple'}
        onClick={(e)=>{handler();setBgColor(e.target.value)}}
        className='bg-purple-500'>PURPLE</button>

      </div>
    </>
  )
}

export default App
