import React, {useState, useEffect} from 'react';
import styles from './LoginForm.module.scss';
import axios from 'axios';

function LoginForm(){
  const[loginData, setLoginData] = useState('');
  const[passwordData, setPasswordData] = useState('');

  function refresh(){
    window.location.reload();
  }

  const handleSubmit = async(event) =>{
    event.preventDefault();

    const request = axios.post('http://localhost:3000/api/auth/login', {
      headers:{
        'content-type': 'application/json'
      },
      login: loginData,
      password: passwordData
    }, {withCredentials: true}).then(setTimeout(refresh, 1000));


  
  };

  return(
    <form className={styles.form} onSubmit={handleSubmit} method="POST">
      <fieldset>
        <input type="text" name="login" id="login" placeholder='Login' onChange={(e) => setLoginData(e.target.value)} />

        <input type="password" name="password" id="password" placeholder='Hasło' onChange={(e) => setPasswordData(e.target.value)}/>

        <button type="submit">Zaloguj</button>
      </fieldset>
    </form>
  );
}

export default LoginForm;