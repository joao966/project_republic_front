import React, { useState } from 'react';
import axios from 'axios';
import  { Redirect } from 'react-router-dom'
import '../style/Login.css';

function Cadastrar() {
  const [redirect, setRedirect] = useState(false);
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: ''
  });


  const onChange = (event) => {
    
    setRegister({
      ...register,
      [event.target.name]: event.target.value,
    })
  }
  
  const onSubmit = async () => {
    console.log('clicou')
    try {
      const {name, email, password} = register;
  
      const user = {
        name,
        email,
        password,
      };
  
      const result = await axios.post('https://project-republic.herokuapp.com/user', user)
      console.log(result);
      localStorage.setItem('user', JSON.stringify(result.data));
      setRedirect(true);
    } catch (error) { 
      window.alert('algo deu errado')
    }
  }
  
  if (redirect) {
    return <Redirect to="/" />
  }

  return (
    <div className="container">
    <div className="card">
      <div className="input-form">
      <div className="input-div">
       
        <input
          className="input-in input-ra"
          placeholder="name"
          id="name-login"
          type="text"
          name="name"
          onChange={onChange}
        />
      </div>
      <div className="input-div">
        
        <input
          className="input-in input-ra"
          placeholder="email"
          id="email-login"
          type="email"
          name="email"
          onChange={onChange}
        />
      </div>
      <div className="input-div">
        
        <input
          className="input-in input-ra"
          placeholder="password"
          type="password"
          id="password-login"
          name="password"
          onChange={onChange}
        />
      </div>
      <button className="input-login input-ra left" onClick={onSubmit} type="submit">
        Criar conta
      </button>
      </div>
    </div>
    </div>
  )
}

export default Cadastrar;