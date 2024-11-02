import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import {data} from './data/module-data';
import RootLayout from './layouts/RootLayout';
import { Routes, Route, Outlet} from 'react-router-dom';
import Lab1Page from './pages/Lab1Page';
import Lab2Page from './pages/Lab2Page';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
    <RootLayout>
        <Routes>
            <Route path="/lab1" element={<Lab1Page names= {data}/>}/>
            <Route path="/lab2/:id" element={<Lab2Page names={data} />}/>
            <Route path="/home" element={<Home/>}/>
            <Route path='/*' element={<NotFound/>}/>
        </Routes>
    </RootLayout>
  </>
  )
}

export default App
