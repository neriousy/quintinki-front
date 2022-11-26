import React from 'react';
import background from '../../assets/backgrounds/Quintin-famlist.jpg'; 
import MemberList from '../../components/Members/MemberList/MemberList';

function Famlist(){
  document.body.style.backgroundImage = 'url(' + background + ')';
  return(
    <MemberList/>
  );
}

export default Famlist;