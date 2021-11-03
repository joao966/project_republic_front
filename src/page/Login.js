import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import  { Redirect } from 'react-router-dom';
import imgGif from '../assets/loading.gif';
import img from '../assets/lata.svg';
import '../style/Login.css';

function Login() {
  const [loading, setLoading] = useState(false);
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
    setLoading(true);

    const user = {
      email,
      password,
    }

    axios.post('https://project-republic.herokuapp.com/login', user)
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('email', email);
      setLoading(false);
      setRedirect((old) => !old);
    })
    .catch((_res) => toast.error('user or password invalid'));
  }

  if (redirect) {
    return <Redirect to="/dashboard" />
  }

  if(loading) {
    return (
      <div className="loading">
        <img src={imgGif} />
      </div>
    )
  }

  return (
    <div className="container">
      <img className="img" src={img} />
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