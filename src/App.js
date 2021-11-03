import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MultiStepForm } from "./components/MultiStepForm";
import Login from './page/Login';
import Register from './page/Register';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import './style/globalStyle.css'

function App() {
  return (
    <div className="content-app">
      <ToastContainer autoClose={3000} />
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />   
          <Route exact path="/dashboard" component={ () => {
            const resultToken = localStorage.getItem('token');
            if(resultToken) {
              return <MultiStepForm />
            } else {
              return <p>Não atorizado</p>
            }
          }} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
