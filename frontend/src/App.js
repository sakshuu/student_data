import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddData, Details, Login, MyBooks, PageNotFound, Profile, Register } from './pages';
import { Myfooter, NavigationBar } from './components';
import "react-toastify/dist/ReactToastify.css";
import  "./assets/css/index.css";


export default function App() {
  return (<>
  <BrowserRouter>
  <NavigationBar/>
  <Routes>
    <Route path='/' element={<Profile/>}></Route>
    <Route path='/addData' element={<AddData/>}></Route>
    <Route path='/books' element={<MyBooks/>}></Route>
    <Route path='/details/:id' element={<Details/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='*' element={<PageNotFound/>}></Route>
  </Routes>
  <Myfooter/>
  </BrowserRouter>
  </>
  )
}
