import React from 'react';
import styles from './Contact.module.scss';
import background from './../../assets/backgrounds/contact.jpg';
import Council from '../../components/Coucil/Council';
import MiniMap from '../../components/MiniMap/MiniMap';
import Teamspeak from '../../components/Teamspeak/Teamspeak';

function Contact(){
  document.body.style.backgroundImage = 'url(' + background + ')';
  
  return(
    <>
      <main>
        <Council/>
        <MiniMap/>
        <Teamspeak/>
      </main>
    </>
  );
}


export default Contact;

