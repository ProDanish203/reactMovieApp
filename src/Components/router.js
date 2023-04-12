import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 
import { Header } from "./Header/Header";
import { HomePage } from "./Home/HomePage";
import { Footer } from "./Footer/Footer";
import { SinglePage } from "./Watch/SinglePage";

export const Router = () => {
  return (
    <>

    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/singlePage/:id' element={<SinglePage/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>

    </>
  )
}
