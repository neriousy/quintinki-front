import React from 'react';
import styles from './Login.module.scss';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useCookies } from 'react-cookie';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AdminPanel from '../../components/AdminPanel/AdminPanel';
import { useLayoutEffect } from 'react';

function Login(){
  document.body.style.backgroundColor = '#d5d6d8';
  const [cookies, setCookie, removeCookie] = useCookies();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [nick, setNick] = useState('');
  const [id, setId] = useState(0);

  useEffect(() =>{
    if(cookies['accessToken']){
      axios.post('http://localhost:3000/api/auth/logwithcookie',{headers:{
        'content-type': 'application/json'
      },
      }, {withCredentials: true})
        .then(res => {setId(res.data.id), setNick(res.data.nick);});
    }
  }, []);

  useLayoutEffect(() =>{
    console.log(nick);
    setIsAuthenticated(prev => !prev);
  }, [nick]);

  function logout(){
    try{
      console.log('logout');
      removeCookie('accessToken');
      removeCookie('refreshToken');
      setIsAuthenticated(prev => !prev);
      //window.location.reload();
      
    }catch(err){
      console.log(err);
    }
  }



  
  return(
    <>
      <main className={styles.main}>

        { !isAuthenticated ?
          <LoginForm/> :
          <> <AdminPanel/> <button onClick={logout}>Wyloguj</button></>
        }
        
      </main>
    </>
  );

}

export default Login;