import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)
// ek new COMPONENT bnayeg jo card return krega--- har card apne aap me new infor. lega uska intejam krege 'PROPS' se
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
    {/* <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4"> */}
      
    {/* </div> */}
    <Card username='Hariom'/>
    <Card username='celsius' course ='B. Tech'/>
    </>
  )
}

export default App
