import React from 'react';
import { Route, Redirect } from 'react-router-dom';
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
import OnboardingStepOne from './components/OnboardingStepOne';
import Mind from './components/Mind';
import Records from './components/Records';
import RecordsAdd from './components/RecordsAdd';
import AssessmentMind from './components/AssessmentMind';
import './App.css';
import AssessmentBody from './components/AssessmentBody';
import { useCookies } from 'react-cookie';

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['onboarded']);
  const showOnboarding = !Object.keys(cookies).length;

  return (
    <div className="App">
      <Route exact path="/" >
        {showOnboarding ? <Redirect to="/onboarding" /> : <Redirect to="/home" />}
      </Route>
      <Route path="/onboarding" component={Onboarding} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/assessment" component={Assessment} />
      <Route exact path={'/assessment/step1'} component={AssessmentStep1} />
      <Route exact path={'/assessment/step2'} component={AssessmentStep2} />
      <Route exact path={'/assessment/calculating'} component={CalculatingScreen} />
      <Route exact path={'/assessment/recommendation'} component={Recommendation} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/body" component={Body} />
      <Route exact path="/mind" component={Mind} />
      <Route exact path="/records" component={Records} />
      <Route exact path="/records/add" component={RecordsAdd} />
      <Route exact path="/assessment-mind" component={AssessmentMind} />
      <Route exact path="/assessment-body" component={AssessmentBody} />
      <BottomNavigation />
    </div>
  );
}

export default App;
