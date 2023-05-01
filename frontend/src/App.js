import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddData, Details, PageNotFound, Profile } from './pages';
import { NavigationBar } from './components';



export default function App() {
  return (<>
  <BrowserRouter>
  <NavigationBar/>
  <Routes>
    <Route path='/' element={<Profile/>}></Route>
    <Route path='/addData' element={<AddData/>}></Route>
    <Route path='/details/:id' element={<Details/>}></Route>
    <Route path='*' element={<PageNotFound/>}></Route>
  </Routes>
  </BrowserRouter>
  </>
  )
}
