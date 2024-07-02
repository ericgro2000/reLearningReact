import React, {useEffect, useState} from 'react';
import { BrowserRouter } from "react-router-dom"
import "./styles/App.css"
import Navbar from "./components/UI/NavBar/MyNavbar"
import AppRouter from "./components/AppRouter"
import {AuthContext} from "./content/context";

const App = () => {

  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
        setIsAuth(true)
    }
    setLoading(false);
}, [])

  return (

    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
  }}>
    <BrowserRouter>
      <Navbar />
      <AppRouter/>
    </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App

