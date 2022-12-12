import React, { useState } from 'react';
import FameProgressTable from '../../components/Fame/FameProgressTable/FameProgressTable';
import FameRankingTable from '../../components/Fame/FameRankingTable/FameRankingTable';
import styles from './Fame.module.scss';
import fameBgc from '../../assets/backgrounds/fame.jpg';
import { useParams } from 'react-router-dom';


function Fame({fromMonth, fromYear, useRanking}){
  
  document.body.style.backgroundImage = `url(${fameBgc})`;
  const[showRanking, setShowRanking] = useState(useRanking);
  const[buttonText, setButtonText] = useState(window.location.pathname === '/fame' ? 'Pokaż ranking reputacji' : 'Pokaż miesięczny ranking');

  let parameters;
  let useArgs = true;

  try{
    parameters = useParams();
    if(parameters.month == undefined || parameters.year == undefined){ throw new Error('No params');}
  }catch{
    useArgs = false;
  }

  if(useArgs){
    fromMonth = parameters.month;
    fromYear = parameters.year;
  }

  function SwitchTable(){
    setShowRanking(ranking => !ranking);
    setButtonText(buttonText === 'Pokaż ranking reputacji' ? 'Pokaż miesięczny ranking' : 'Pokaż ranking reputacji');
  }


  return(
    <>
      <main className={styles.main}>
        {!showRanking
          ? <FameProgressTable fromMonth={fromMonth} fromYear={fromYear}/>
          : <FameRankingTable/>
        } 
        <button className={styles.button} onClick={SwitchTable}>{buttonText}</button>


      </main>
    </>
  );
}

export default Fame;