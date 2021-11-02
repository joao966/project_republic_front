import React, { useState } from 'react';
import axios from 'axios';
import  { Redirect } from 'react-router-dom';

/* import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import StoreContext from '../Context/Context'; */
import '../style/Login.css';

function Login() {
  // const [redirect, setRedirect] = useState(false);
  const [token, setToken] = useState(false);
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  function onChange(event) {
    const { value, name } = event.target;
    setLogin({
      ...login,
      [name]: value,
    })
  }

  function onSubmit () {
    const { email, password } = login;

    const user = {
      email,
      password,
    }

    axios.post('https://project-republic.herokuapp.com/login', user)
    .then((res) => {
      console.log('res :', res.data);
      localStorage.setItem('token', res.data.token);
    })
    .catch((_res) => console.log('error login'));

    const token = localStorage.getItem('token');
    console.log(token)
    
    setToken(token);
    // setRedirect(true);
  }

  if (token) {
    return <Redirect to="/dashboard" />
  }

  return (
    <div className="container">
      <div className="left">
      <div className="card">
        <div className="input-form">
            <div className="input-div">
              <input name="email" onChange={onChange} type="text" className="input-in input-ra" placeholder="Email" />
            </div>
            <div className="input-div">
              <input name="password" onChange={onChange} type="password" className="input-in input-ra" placeholder="Senha" />
            </div>
          </div>
          <div className="input-form">
            <button onClick={onSubmit} className="input-login input-ra">
              Entrar
            </button>
          </div>
          <hr className="hr2" />
          <div className="footer">
            <div className="links">
              Não tem uma conta?<a href="/register">
              Inscrever-se</a>
            </div>
            <div className="">
              <a href="#">Esqueceu sua senha?</a>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Login;