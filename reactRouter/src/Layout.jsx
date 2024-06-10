import React from 'react'
import Header from "../src/Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
 <Header/>
 <Outlet/>
 <Footer/>
    </>
  )
}

export default Layout