import axios from 'axios';
import {React, useEffect, useState} from 'react';
import styles from './FameProgressTable.module.scss';
import FameProgressRecord from '../FameProgressRecord/FameProgressRecord';

function FameTable({fromYear, fromMonth}){
  const date = new Date();
  const [fameResults, setFameResults] = useState([]);

  let lp = 1;
  let sum = 0;
  let secondDate;

  
  useEffect(() =>{
    getFame();
  });

  const getFame = async() =>{
    await axios.get(`http://localhost:3000/api/fame/progress/${fromYear}/${fromMonth}`)
      .then(res => setFameResults(res.data))
      .catch(function (error) {
        // window.location.replace('/fame'); //awkward redirecting
        return;
      });
  };




  function checkDate(fromMonth, fromYear){
    if(fromYear != date.getFullYear() || fromMonth != date.getMonth() + 1){
      secondDate = '1.'+(parseInt(fromMonth)+ 1) + '.' + fromYear;
    }else{
      secondDate = date.toLocaleDateString();
    }
  }

  checkDate(fromMonth, fromYear);

  {fameResults.map(fame => sum += fame.diff);} // how to reduce only 1 property of json array and get its value??

  

  return(
    <table className={styles.table}> 
      <tbody>
        <tr>
          <th>Lp.</th>
          <th>Nazwa postaci</th>
          <th>Reputacja z dnia 01.{fromMonth}.{fromYear}</th>
          <th>Reputacja z dnia {secondDate}</th>
          <th>Wynik</th>
        </tr>


        {// need to find a better way to increment lp
        }
        {fameResults.map((fame) => <FameProgressRecord key={fame.id} lp={`${lp++}.`} nick={fame.nick} classType={fame.class} famePrev={fame.prevFame} fameCurrent={fame.currentFame} diff={fame.diff}/>)}
          
        <tr>
          <td colSpan={4}>Ogolnie wbite: </td>
          <td>{sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</td>
        </tr>
      </tbody>
    </table>

  );
  
 
}

export default FameTable;