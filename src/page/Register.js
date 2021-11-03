import React, { useContext, useState } from 'react';
import axios from 'axios';
import context from '../context/context';
import  { Redirect } from 'react-router-dom'
import '../style/Login.css';

function Cadastrar() {
  const {setUser} = useContext(context);
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
 
    try {
      const {name, email, password} = register;
  
      const user = {
        name,
        email,
        password,
      };
  
      const result = await axios.post('https://project-republic.herokuapp.com/user', user)
   
      setUser(user)
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
      <h2 className="title">PROMETEU TINTAS</h2>
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
          data-testid="password"
        />
      </div>
      <button data-testid="button-register" className="input-login" onClick={onSubmit} type="submit">
        Criar conta
      </button>
      </div>
    </div>
    </div>
  )
}

export default Cadastrar;