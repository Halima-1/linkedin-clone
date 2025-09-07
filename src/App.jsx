import { useState } from 'react'
import './App.css'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Landing from './pages/landing'
import Signup from './pages/signup'
import Login from './pages/login'
import ProfilePage from './pages/profilePage'
import Header from './components/header'
import Footer from './components/footer'

function App() {
const Layout =()=>{
  return(
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}
  return (
    <>
     <BrowserRouter>
     
     <Routes>
      <Route path='/' element ={<Layout />}>
      <Route path='/' element={<Landing/>}/>
      <Route path='signup' element={<Signup />}/>
      <Route path='login' element={<Login/>} />
      </Route>
      <Route path='/' element={<Landing/>}/>
      <Route path='signup' element={<Signup />}/>
      <Route path='login' element={<Login/>} />
      <Route path='profilePage' element={<ProfilePage />}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
