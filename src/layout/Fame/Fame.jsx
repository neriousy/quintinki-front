import React, { useState, useEffect } from 'react';
import FameProgressTable from '../../components/Fame/FameProgressTable/FameProgressTable';
import FameRankingTable from '../../components/Fame/FameRankingTable/FameRankingTable';
import styles from './Fame.module.scss';
import fameBgc from '../../assets/backgrounds/fame.jpg';
import axios from 'axios';


function Fame(){
  const date = new Date();
  document.body.style.backgroundImage = `url(${fameBgc})`;
  const [showRanking, setShowRanking] = useState(false);
  const [buttonText, setButtonText] = useState(window.location.pathname === '/fame' ? 'Pokaż ranking reputacji' : 'Pokaż miesięczny ranking');
  const [selectContent, setSelectContent] = useState([]);
  const [tableName, setTableName] = useState(`fame_${(date.getMonth() + 1).toString()}_${date.getFullYear().toString()}`);
  const [fromMonth, setFromMonth] = useState((date.getMonth() + 1).toString());
  const [fromYear, setFromYear] = useState(date.getFullYear().toString());
  const [disableSelect, setDisableSelect] = useState(false);
  
  useEffect(() =>{
    getTables();
  }, []);

  function getTables(){
    axios.get('http://localhost:3000/api/fame/list').then(res => {setSelectContent(res.data), setTableName(res.data[0].table_name);});
  }

  useEffect(() =>{
    let split = tableName.split('_');
    setFromMonth(split[1]);
    setFromYear(split[2]);  

  }, [tableName]);


  function switchTable(){
    setShowRanking(ranking => !ranking);
    setButtonText(buttonText === 'Pokaż ranking reputacji' ? 'Pokaż miesięczny ranking' : 'Pokaż ranking reputacji');
    setDisableSelect(dis => !dis);
  }


  return(
    <>
      <main className={styles.main}>
        {!showRanking
          ? <FameProgressTable fromMonth={fromMonth} fromYear={fromYear}/>
          : <FameRankingTable/>
        } 

        <div className={styles.buttonWrapper}>
          <button className={styles.button} onClick={switchTable}>{buttonText}</button>
          <select className={styles.select} value={tableName} onChange={e => setTableName(e.target.value)} disabled={disableSelect}>
            {selectContent.map(content => <option key={content.id} value={content.table_name}>{content.month_year}</option>)}
          </select>
        </div>
      </main>
    </>
  );
}

export default Fame;