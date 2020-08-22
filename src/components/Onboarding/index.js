import React, { useEffect } from 'react';
import StepOne from '../OnboardingStepOne';
import StepTwo from '../OnboardingStepTwo';
import StepThree from '../OnboardingStepThree';
import StepFour from '../OnboardingStepFour';

import { Route, Switch, Redirect } from 'react-router-dom';
import './Onboarding.css';
import Cookies from 'universal-cookie';

const Onboarding = () => {

    useEffect(() => {
        const cookies = new Cookies();
        let d = new Date();
        d.setTime(d.getTime() + (30 * 60 * 1000));
        cookies.set("onboarded", true, { path: "/", expires: d });
    }, []);

    return (
        <div className="Onboarding">
            <Switch>
                <Route exact path="/">
                    <Redirect to="/stepOne" />
                </Route>
                <Route exact path="/stepOne" component={StepOne} />
                <Route exact path="/stepTwo" component={StepTwo} />
                <Route exact path="/stepThree" component={StepThree} />
                <Route exact path="/stepFour" component={StepFour} />
            </Switch>
        </div>
    )
}

export default Onboarding;