import React from 'react';
import styles from './FameProgressRecord.module.scss';
import archerIcon from '../../../assets/classIcons/archerIcon.png';
import mageIcon from '../../../assets/classIcons/mageIcon.png';
import warriorIcon from '../../../assets/classIcons/warriorIcon.png';
import martialIcon from '../../../assets/classIcons/martialIcon.png';

const classIcons = [warriorIcon, archerIcon, mageIcon, martialIcon];



function FameProgressRecord({lp, nick, classType, famePrev, fameCurrent, diff}){
  return(
    <tr>
      <td>{lp}</td>
      <td><img src={classIcons[classType - 1]} alt='classIcon'/> {nick}</td>
      <td>{famePrev.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</td>
      <td>{fameCurrent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</td>
      <td>{diff.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</td>
    </tr>
  );
}

export default FameProgressRecord;