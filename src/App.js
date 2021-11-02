import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MultiStepForm } from "./components/MultiStepForm";
import Login from './page/Login';
import Register from './page/Register';
import { ToastContainer } from 'react-toastify';
import './style/globalStyle.css'

function App() {
  return (
    <div className="content-app">
      <div className="App">
        <h1>Phometheu Tintas</h1>
      </div>
          <ToastContainer autoClose={3000} />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />   
          <Route exact path="/dashboard" component={MultiStepForm} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
