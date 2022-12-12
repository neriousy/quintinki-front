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
      <main className={styles.main}>
        <div className={styles.leftContainer}>
          <Teamspeak/>
        </div>
        <div className={styles.rightContainer}>
          <Council/>
          <MiniMap/>
        </div>
      </main>
    </>
  );
}


export default Contact;

