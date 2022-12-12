import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Famlist from './Famlist/Famlist';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Contact from './Contact/Contact';
import Fame from './Fame/Fame';

function App(){
  const date = new Date();
  
  const fromMonth = date.getMonth() + 1;
  const fromYear = date.getFullYear();


  return(
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/famlist' element={<Famlist/>} />
        <Route path='/fame'>
          <Route path="" element={<Fame fromMonth={fromMonth} fromYear={fromYear}/>} />
          <Route path=":year/:month" element={<Fame useRanking={false} fromMonth={fromMonth} fromYear={fromYear}/>} />
          <Route path="ranking" element={<Fame useRanking={true}/>} />
        </Route>
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </>
  );
  
}
export default App;