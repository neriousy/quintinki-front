import React, {useState, useEffect} from 'react';
import styles from './Council.module.scss';


function Council(){
  const [councilList, setCouncil] = useState([]);

  useEffect(() =>{
    getCouncil();
  }, []);

  const getCouncil = async() =>{
    const response = await fetch('http://localhost:3000/api/contact/');
    setCouncil(await response.json());
  };


  return(
    <div className={styles.councilContainer}>
      <h3>
        Kontakt w grze
      </h3>

      <dl className={styles.councilList}>
        <dt className={styles.descriptionTerm}>Szef:</dt>
        {councilList.filter(councilMember => councilMember.pos == 1).map(filteredCouncil =>
          <dd key= {filteredCouncil.id} className={styles.descriptionDetails}>{filteredCouncil.nick}</dd>)}

        <dt className={styles.descriptionTerm}>Zastępcy:</dt>
        {councilList.filter(councilMember => councilMember.pos == 2).map(filteredCouncil =>
          <dd key= {filteredCouncil.id} className={styles.descriptionDetails}>{filteredCouncil.nick}</dd>)}
        
        <dt className={styles.descriptionTerm}>Zarządcy:</dt>
        {councilList.filter(councilMember => councilMember.pos == 3).map(filteredCouncil =>
          <dd key= {filteredCouncil.id} className={styles.descriptionDetails}>{filteredCouncil.nick}</dd>)}
      </dl>
    </div>
  );
}

export default Council;