import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Famlist from './Famlist/Famlist';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';


function App(){

  return(
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/famlist' element={<Famlist/>} />
      </Routes>
    </>
  );
  
}
export default App;