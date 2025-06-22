import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
     <div className='w-full h-screen bg-red-500'
     style={{backgroundColor:color}}
     >
      <div className='fixed flex flex-wrap justify-center items-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className="text-white px-4 py-2 rounded-3xl hover:bg-red-600 transition"
          style={{backgroundColor:'red'}}
          onClick={()=>setColor('red')}>
            Red
          </button>
          <button className=" text-white px-4 py-2 rounded-3xl hover:bg-red-600 transition" 
          style={{backgroundColor:'blue'}}onClick={()=>setColor('blue')}>
            blue
          </button>
          <button className=" text-white px-4 py-2 rounded-3xl hover:bg-red-600 transition" 
          style={{backgroundColor:'green'}}onClick={()=>setColor('green')}>
            green
          </button>
          <button className="text-white px-4 py-2 rounded-3xl hover:bg-red-600 transition" 
          style={{backgroundColor:'grey'}}onClick={()=>setColor('grey')}>
            grey
          </button>
          <button className=" text-white px-4 py-2 rounded-3xl hover:bg-red-600 transition" 
          style={{backgroundColor:'indigo'}}onClick={()=>setColor('indigo')}>
            indigo
          </button>
          <button className=" text-white px-4 py-2 rounded-3xl hover:bg-red-600 transition" 
          style={{backgroundColor:'black'}}onClick={()=>setColor('black')}>
            Black
          </button>
        </div>
      </div>
     </div>
  )
}

export default App
