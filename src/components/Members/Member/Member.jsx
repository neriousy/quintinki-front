import React from 'react';
import styles from './Member.module.scss';
import archerIcon from '../../../assets/classIcons/archerIcon.png';
import mageIcon from '../../../assets/classIcons/mageIcon.png';
import warriorIcon from '../../../assets/classIcons/warriorIcon.png';
import martialIcon from '../../../assets/classIcons/martialIcon.png';
//import {archerIcon, mageIcon, warriorIcon, martialIcon} from '../../../assets/classIcons';

const icons = [warriorIcon, archerIcon, mageIcon, martialIcon];

function Member({classType, nick, lvl, lvlaw}){
  return(
    <span className={styles.member}><img src={icons[classType - 1]} alt='classIcon'></img> {nick} {lvl}(+{lvlaw})</span>
  );
}

export default Member;


