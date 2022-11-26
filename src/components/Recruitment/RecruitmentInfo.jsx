import React from 'react';
import styles from './RecruitmentInfo.module.scss';
import blueNos from '../../assets/other/blue_nos.png';
import { Link } from 'react-router-dom';
function RecruitmentInfo(){
  return(
    <div className={styles.recruitmentInfoContainer}>
      <span className={styles.recruitmentState}>Rekrutujemy!</span>
      <dl className={styles.detailList}>
        <dt className={styles.descriptionTerm}>Poziom:</dt>
        <dd className={styles.descriptionDetails}>99</dd>

        <dt className={styles.descriptionTerm}>Poziom bohatera:</dt>
        <dd className={styles.descriptionDetails}>60+</dd>

        <dt className={styles.descriptionTerm}>Reputacja:</dt>
        <dd className={styles.descriptionDetails}>Blue nos <img src={blueNos} alt="Blue nos"/> </dd>

        <dt className={styles.descriptionTerm}>Teamspeak:</dt>
        <dd className={styles.descriptionDetails}>Obowiazkowy</dd>

      </dl>

      <Link to='/kontakt' className={styles.contactButton}> Kontakt </Link>
    </div>
  );
}

export default RecruitmentInfo;