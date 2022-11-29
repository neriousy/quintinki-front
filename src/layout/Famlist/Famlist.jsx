import React from 'react';
import background from '../../assets/backgrounds/famlist.jpg'; 
import MemberList from '../../components/Members/MemberList/MemberList';

function Famlist(){
  document.body.style.backgroundImage = 'url(' + background + ')'; // ??? no idea how to make different bgc on each layout
  return(
    <>
      <main>
        <MemberList/>
      </main>
    </>
  );
}

export default Famlist;