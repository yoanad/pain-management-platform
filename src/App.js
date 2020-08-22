import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, IndexRoute } from 'react-router-dom';
import Onboarding from './components/Onboarding';
import Home from './components/Home';
import './App.css';
import Cookies from 'universal-cookie';

const App = () => {
  const [onboarded, setOnboarded] = useState(false);
  const cookies = new Cookies();

  return (
    <div className="App">
      <Onboarding />
      <Route exact path="/home" component={Home} />
    </div>
  );
}

export default App;
