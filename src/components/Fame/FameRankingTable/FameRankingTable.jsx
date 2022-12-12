import React, { useState, useEffect } from 'react';
import styles from './FameRankingTable.module.scss';
import FameRankingRecord from '../FameRankingRecord/FameRankingRecord';
import axios from 'axios';

function FameRankingTable(){
  const [fameData, setFameData] = useState([]);
  let lp = 1;
  const date = new Date();
  useEffect(() =>{
    getFame();

  }, []);

  const getFame = async() =>{
    await axios.get('http://localhost:3000/api/fame/')
      .then(res => setFameData(res.data))
      .catch(function (error) {
        window.location.replace('/fame'); //awkward redirecting
        return;
      });
  };


  return(
    <table className={styles.table}> 
      <tbody>
        <tr>
          <th>Lp.</th>
          <th>Nazwa postaci</th>
          <th>Reputacja z dnia {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}</th>
        </tr>


        {// need to find a better way to increment lp
        }
        {fameData.map((fame) => <FameRankingRecord key={fame.id} lp={`${lp++}.`} nick={fame.nick} classType={fame.class} fame={fame.fame}/>)}
        
      </tbody>
    </table>
  );
}

export default FameRankingTable;