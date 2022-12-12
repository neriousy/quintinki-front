import {useEffect, useState, React} from 'react';
import Member from '../Member/Member';
import styles from './MemberList.module.scss';
import archerIcon from '../../../assets/classIcons/archerIcon.png';
import mageIcon from '../../../assets/classIcons/mageIcon.png';
import warriorIcon from '../../../assets/classIcons/warriorIcon.png';
import martialIcon from '../../../assets/classIcons/martialIcon.png';
import axios from 'axios';

function MemberList(){
  const [memberList, setMembersList] = useState([]);

  useEffect(() =>{  // api calls going through twice??? 
    members();
  }, []);
  


  const members = async() =>{
    axios.get('http://localhost:3000/api/famlist/').then(res => setMembersList(res.data));
  };

  return(
    <section className={styles.famlistContainer}>

      <div className={styles.classWrapper}>
        <h3><img src={warriorIcon}/> Wojownicy: {memberList.filter(member => member.class == 1).length}</h3>
        <div className={styles.classContainer}>
          {memberList.filter(member => member.class == 1).map(filteredMember =>
            <Member key={filteredMember.id} classType={filteredMember.class} nick={filteredMember.nick} lvl={filteredMember.lvl} lvlaw={filteredMember.lvlaw}> </Member>)}
        </div>
      </div>

      <div className={styles.classWrapper}>
        <h3><img src={archerIcon}/> Łucznicy: {memberList.filter(member => member.class == 2).length}</h3>
        <div className={styles.classContainer}>
          {memberList.filter(member => member.class == 2).map(filteredMember =>
            <Member key={filteredMember.id} classType={filteredMember.class} nick={filteredMember.nick} lvl={filteredMember.lvl} lvlaw={filteredMember.lvlaw}> </Member>)}
        </div>
      </div>

      <div className={styles.classWrapper}>
        <h3><img src={mageIcon}/> Magowie: {memberList.filter(member => member.class == 3).length}</h3>
        <div className={styles.classContainer}>
          {memberList.filter(member => member.class == 3).map(filteredMember =>
            <Member key={filteredMember.id} classType={filteredMember.class} nick={filteredMember.nick} lvl={filteredMember.lvl} lvlaw={filteredMember.lvlaw}> </Member>)}
        </div>
      </div>
      <div className={styles.classWrapper}>
        <h3><img src={martialIcon}/> Mistrzowie sztuk walki: {memberList.filter(member => member.class == 4).length}</h3>
        <div className={styles.classContainer}>
          {memberList.filter(member => member.class == 4).map(filteredMember =>
            <Member key={filteredMember.id} classType={filteredMember.class} nick={filteredMember.nick} lvl={filteredMember.lvl} lvlaw={filteredMember.lvlaw}> </Member>)}
        </div>
      </div>
    </section>
  );
}


export default MemberList;