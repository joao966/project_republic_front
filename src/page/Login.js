import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import  { Redirect } from 'react-router-dom';
import pathImg from '../assets/prometheu.svg';

/* import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import StoreContext from '../Context/Context'; */
import '../style/Login.css';

function Login() {
  const [token, setToken] = useState('');
  const [redirect, setRedirect] = useState(false);
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
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('email', email);
      setRedirect((old) => !old);
    })
    .catch((_res) => toast.error('user or password invalid'));
  }

  if (redirect) {
    return <Redirect to="/dashboard" />
  }

  return (
    <div className="container">
      <img className="img" src={pathImg} />
      <div className="left">
      <div className="card">
        <div className="">
            <div className="">
              <input name="email" onChange={onChange} type="text" className="input-in input-ra" placeholder="Email" />
            </div>
            <div className="input-div">
              <input name="password" onChange={onChange} type="password" className="input-in input-ra" placeholder="Senha" />
            </div>
        </div>
          <div className="input-form">
            <button onClick={onSubmit} className="input-login">
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