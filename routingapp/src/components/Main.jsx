import React from 'react'
import App from './App';
import  {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';

const Main = () => {
  return (
    <div>
    <p>This is Main Page</p>
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home/>}>

      </Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Main
