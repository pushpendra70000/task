//1.import area
import React, { createContext, useContext, useState } from 'react'
import  {BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/signup'
import Login from './pages/login'
import Userdata from './pages/userdata'

//2. defination area
export const authContext = createContext()
export default function App() {
  //2.1 hooks are
  const [userdata, setUserdata] = useState()
  //2.2 defination area 

  //2.3 return area

  return (
    <>
    <BrowserRouter>
      <authContext.Provider value={{userdata,setUserdata}} >
        <Routes>
          <Route path="/" element={<Signup/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/userdata' element={<Userdata/>}></Route>
        </Routes>
      </authContext.Provider>
    </BrowserRouter>
   </>
  )
}

//3. export area