import React from 'react';
import styles from './Teamspeak.module.scss';
import tsIcon from '../../assets/other/teamspeakIcon.png';


function Teamspeak(){
  return(
    <div className={styles.teamspeakContainer}>
      <img src={tsIcon} alt="Teamspeak"/>Zapraszamy na nasz serwer TeamSpeak:
      <a href="ts3server://afera.net-speak.pl?channel=%7C%20%E2%88%9A%CE%B9%D7%A7%20%7C%20%20Quintin%2FRekrutacja%5C%5C%2FOtwarta">afera.net-speak.pl</a>
    </div>
  );
}

export default Teamspeak;