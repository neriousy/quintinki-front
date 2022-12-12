import React from 'react';
import styles from './FameRankingRecord.module.scss';
import archerIcon from '../../../assets/classIcons/archerIcon.png';
import mageIcon from '../../../assets/classIcons/mageIcon.png';
import warriorIcon from '../../../assets/classIcons/warriorIcon.png';
import martialIcon from '../../../assets/classIcons/martialIcon.png';

const classIcons = [warriorIcon, archerIcon, mageIcon, martialIcon];



function FameRankingRecord({lp, nick, classType, fame}){
  return(
    <tr>
      <td>{lp}</td>
      <td><img src={classIcons[classType - 1]} alt='classIcon'/> {nick}</td>
      <td>{fame.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</td>
    </tr>
  );
}

export default FameRankingRecord;