import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import User from './Components/User/User'
import Github from './Components/Github/Github'
import { githubInfo } from './Components/Github/Github'
// const router=createBrowserRouter(
//   [{
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }]
// )

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
<Route path='' element={<Home/>}/>
<Route path='about' element={<About/>}/>
<Route path='contact' element={<Contact/>}/>
<Route path='user/:userid' element={<User/>}/>
 <Route 
loader={githubInfo}
path='github' 
element={<Github/>} 
/>
      </Route>
  )
)

//this is more readable code so use this method for routing







ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router ={router}/>
  </React.StrictMode>,
)
