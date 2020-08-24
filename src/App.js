import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Onboarding from './components/Onboarding';
import Search from './components/Search';
import Home from './components/Home';
import Assessment from './components/Assessment';
import AssessmentStep1 from './components/AssessmentStep1';
import AssessmentStep2 from './components/AssessmentStep2';
import CalculatingScreen from './components/CalculatingScreen';
import Recommendation from './components/Recommendation';
import BottomNavigation from './components/BottomNavigation';
import Body from './components/Body';
import Mind from './components/Mind';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Onboarding />
      <Route path="/assessment" component={Assessment} />
      <Route path={'/assessment/step1'} component={AssessmentStep1} />
      <Route path={'/assessment/step2'} component={AssessmentStep2} />
      <Route exact path={'/assessment/calculating'} component={CalculatingScreen} />
      <Route exact path={'/assessment/recommendation'} component={Recommendation} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/body" component={Body} />
      <Route exact path="/mind" component={Mind} />
      <BottomNavigation />
    </div>
  );
}

export default App;
