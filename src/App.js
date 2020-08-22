import React from 'react';
import { Route } from 'react-router-dom';
import Onboarding from './components/Onboarding';
import Home from './components/Home';
import './App.css';

const App = () => {

  return (
    <div className="App">
      <Onboarding />
      <Route exact path="/home" component={Home} />
    </div>
  );
}

export default App;
