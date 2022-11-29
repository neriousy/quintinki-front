import React from 'react';
import map from '../../assets/other/contactMap.png';
import styles from './MiniMap.module.scss';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';


function MiniMap(){
  return(
    <div className={styles.mapContainer}>
      <div className={styles.header}><FontAwesomeIcon icon={faArrowDown}/> Tu nas znajdziesz <FontAwesomeIcon icon={faArrowDown}/></div>
      <img src={map} alt="miniMapa"/>
    </div>
  );
}

export default MiniMap;
