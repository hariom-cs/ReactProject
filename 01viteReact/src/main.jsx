import React from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

//  function App() {                               //->here also define app() instead of seperate file pass='App()' in createRoot below

//   return (
//     <>
//       <h1>First react Learning</h1>
//       <p>this is paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem qui temporibus praesentium omnis? Voluptates rem perferendis ad voluptatibus nesciunt assumenda amet? Recusandae quos optio officiis nemo suscipit sunt, dolore deserunt, dolorem possimus earum accusamus!</p>
//     </>
//   )
// }




// const reactElement={                                       //this will not work
//     type:'a',
//     props:{
//         href:'https://www.google.com',
//         target:'_blank'
//     },
//     children:'Click me goole'
// }


// const anotherElement=(                                          //this will work pass 'anotherElement' in createRoot
//   <a href="https://www.google.com">Visit Google</a>
// )



// ========================================================================================================================
//************************** */ How  we can create Element in react\\******************************************\\|
// ========================================================================================================================
const reactElement= React.createElement(
    // 1.tag
    'a',

    // 2.define attributes in form of object
    {
      href:"https://www.google.com",
      target:'_blank'
    },

    // 3.text
    'click Here'

    // 4. we can use {evaluated expression} like variable 'anotherElement'
)

createRoot(document.getElementById('root')).render(
  // anotherElement
  // App()
  reactElement
)
