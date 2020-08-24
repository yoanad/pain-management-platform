import React from 'react';
import { Route } from 'react-router-dom';
import Onboarding from './components/Onboarding';
import Search from './components/Search';
import Home from './components/Home';
import AssessmentSpecialist from './components/AssessmentSpecialist';
import BottomNavigation from './components/BottomNavigation';
import CalculatingScreen from './components/CalculatingScreen';
import Recommendation from './components/Recommendation';
import './App.css';

const App = () => {

  return (
    <div className="App">
      <Onboarding />
      <Route path="/assessment-specialist" component={AssessmentSpecialist} />
      <Route path="/calculating" component={CalculatingScreen} />
      <Route path="/recommendation" component={Recommendation} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/search" component={Search} />
      <BottomNavigation />
    </div>
  );
}

export default App;
