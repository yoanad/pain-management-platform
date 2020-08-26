import React from 'react';
import StepOne from '../OnboardingStepOne';
import StepTwo from '../OnboardingStepTwo';
import StepThree from '../OnboardingStepThree';
import StepFour from '../OnboardingStepFour';
import { Route, Redirect } from 'react-router-dom';
import './Onboarding.css';

const Onboarding = () => {
    return (
        <div className="Onboarding">
            <Redirect to="/onboarding/stepOne"></Redirect>
            <Route path="/onboarding/stepOne" component={StepOne} />
            <Route exact path="/onboarding/stepTwo" component={StepTwo} />
            <Route exact path="/onboarding/stepThree" component={StepThree} />
            <Route exact path="/onboarding/stepFour" component={StepFour} />
        </div>
    )
}

export default Onboarding;