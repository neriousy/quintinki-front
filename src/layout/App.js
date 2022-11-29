import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Famlist from './Famlist/Famlist';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Contact from './Contact/Contact';

function App(){
  return(
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/famlist' element={<Famlist/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </>
  );
  
}
export default App;