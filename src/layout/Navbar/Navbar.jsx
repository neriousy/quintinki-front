import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/other/Quintin-logo.png';
import styles from './Navbar.module.scss';


function Navbar(){
  return(
    <header className={styles.header}>
      <ul className={styles.navUl}>
        <li className={styles.listItem}> <img src={logo} alt='Quintin-logo'/> </li>

        <li className={styles.listItem}>
          <NavLink to='/' className={(navData) => (navData.isActive ? styles.active : '')}> Strona główna </NavLink>
        </li>

        <li className={styles.listItem}>
          <NavLink to='/famlist' className={(navData) => (navData.isActive ? styles.active : '')}> Lista Członków </NavLink>
        </li>

        <li className={styles.listItem}>
          <NavLink to='/repa' className={(navData) => (navData.isActive ? styles.active : '')}> Reputacja </NavLink> 
        </li>

        <li className={styles.listItem}>
          <NavLink to='/panel' className={(navData) => (navData.isActive ? styles.active : '')}> Licznik </NavLink> 
        </li>
        
        <li className={styles.listItem}>
          <NavLink to='/kontakt' className={(navData) => (navData.isActive ? styles.active : '')}> Kontakt w grze </NavLink> 
        </li>
      </ul>
    </header>
  );
}

export default Navbar;