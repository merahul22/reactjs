
import { useEffect, useState } from 'react'
import {useDispatch} from "react-redux"
import { authservice } from './appwrite/auth'
import './App.css'
import Header from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
function App() {
   const [loading,setloading]=useState(true)
   const dispatch=useDispatch()
   useEffect(()=>{
    authservice.currentUser()
    .then((userData)=>{
       if(userData) dispatch(login({userData}))
       else dispatch(logout())

      })
    .finally(()=>{
      setloading(false)
    })
   },[])

 return !loading?(
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        
        <Header />
        <main>
        TODO:  <Outlet />
        </main>
        <Footer />
      </div>
    </div>
 ):null
}

export default App
