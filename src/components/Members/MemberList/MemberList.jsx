import {useEffect, useState, React} from 'react';
import Member from '../Member/Member';
import styles from './MemberList.module.scss';
import archerIcon from '../../../assets/classIcons/archerIcon.png';
import mageIcon from '../../../assets/classIcons/mageIcon.png';
import warriorIcon from '../../../assets/classIcons/warriorIcon.png';
import martialIcon from '../../../assets/classIcons/martialIcon.png';

function MemberList(){
  const [warriorList, setWarriors] = useState([]);
  const [archersList, setArchers] = useState([]);
  const [magesList, setMages] = useState([]);
  const [martialArtistsList, setMartialArtists] = useState([]);

  useEffect(() =>{  // api calls going through twice??? 
    warriors();
    archers();
    mages();
    martialArtists();
  }, []);
  
  const warriors = async() =>{
    const response = await fetch('http://localhost:3000/famlistApi/warriors');
    setWarriors(await response.json());
  };

  const archers = async() =>{
    const response = await fetch('http://localhost:3000/famlistApi/archers');
    setArchers(await response.json());
  };

  const mages = async() =>{
    const response = await fetch('http://localhost:3000/famlistApi/mages');
    setMages(await response.json());
  };

  const martialArtists = async() =>{
    const response = await fetch('http://localhost:3000/famlistApi/martialartists');
    setMartialArtists(await response.json());
  };


  return(
    <section className={styles.famlistContainer}>

      <div className={styles.classWrapper}>
        <h3><img src={warriorIcon}/> Wojownicy: {warriorList.length}</h3>
        <div className={styles.classContainer}>
          {warriorList.map(warrior => <Member key={warrior.id} classType={warrior.class} nick={warrior.nick} lvl={warrior.lvl} lvlaw={warrior.lvlaw}> </Member>)}
        </div>
      </div>

      <div className={styles.classWrapper}>
        <h3><img src={archerIcon}/> Łucznicy: {archersList.length}</h3>
        <div className={styles.classContainer}>
          {archersList.map(archer => <Member key={archer.id} classType={archer.class} nick={archer.nick} lvl={archer.lvl} lvlaw={archer.lvlaw}> </Member>)}
        </div>
      </div>

      <div className={styles.classWrapper}>
        <h3><img src={mageIcon}/> Magowie: {magesList.length}</h3>
        <div className={styles.classContainer}>
          {magesList.map(mage => <Member key={mage.id} classType={mage.class} nick={mage.nick} lvl={mage.lvl} lvlaw={mage.lvlaw}> </Member>)}
        </div>
      </div>
      <div className={styles.classWrapper}>
        <h3><img src={martialIcon}/> Mistrzowie sztuk walki: {martialArtistsList.length}</h3>
        <div className={styles.classContainer}>
          {martialArtistsList.map(martial => <Member key={martial.id} classType={martial.class} nick={martial.nick} lvl={martial.lvl} lvlaw={martial.lvlaw}> </Member>)}
        </div>
      </div>
    </section>
  );
}


export default MemberList;