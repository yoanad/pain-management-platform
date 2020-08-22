import React from 'react';
import StepOne from '../OnboardingStepOne';
import StepTwo from '../OnboardingStepTwo';
import StepThree from '../OnboardingStepThree';
import StepFour from '../OnboardingStepFour';
import { Route, Switch, Redirect } from 'react-router-dom';
import './Onboarding.css';

const Onboarding = () => {

    return (
        <div className="Onboarding">
            <Switch>
                <Route exact path="/StepOne" component={StepOne} />
                <Route exact path="/StepTwo" component={StepTwo} />
                <Route exact path="/StepThree" component={StepThree} />
                <Route exact path="/StepFour" component={StepFour} />
                <Route exact path="/">
                    <Redirect to="/App" />
                </Route>
            </Switch>

        </div>
    )
}

export default Onboarding;