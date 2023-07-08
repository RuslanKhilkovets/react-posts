import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import React, { useEffect, useState } from 'react';
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";
import Error from "./components/Error";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";


function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        if(localStorage.getItem('auth')){
            setIsAuth(true)
            setIsLoading(false)
        }
    }, [])
    return (
       <div className="App">
            <AuthContext.Provider value={{
                isAuth,
                setIsAuth,
                isLoading,
                setIsLoading
            }}>
                <BrowserRouter>
                    <Navbar/>
                    <AppRouter/>
                </BrowserRouter>
            </AuthContext.Provider>
       </div>
    );
}

export default App;
