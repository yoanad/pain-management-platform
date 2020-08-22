import React from 'react';
import { Typography } from '@rmwc/typography';
import { Icon } from '@rmwc/icon';
import { Link } from 'react-router-dom';
import Wave from '../Wave';
import layla from '../../assets/Layla.svg';
import './OnboardingStepOne.css';

const OnboardingStepOne = () => {

    return (
        <div className="Onboarding__Step-One">
            <Typography use="headline4" tag="h4"> Don’t know what you are looking for?</Typography>
            <Typography use="headline5" tag="h5">No worries!<br />
            I’m Layla,<br />
            your advisor.<br />
            I’m here to help.</Typography>
            <div className="Info-Text">
                <img src={layla} className="Layla" alt="Layla" />
                <Typography use="body">
                    On this app, you can <b>book different pain management services</b> like massage, physiotherapy or chiropracitc, <b>log your symptoms or do physical and meditation excercises.</b>
                    <br /><b>I can assist you, if you need help.</b>
                </Typography>
                <Wave fillColor="#69B8E9" />
                <div className="Navigation">
                    <Link to="/StepOne">
                        <Icon className="Nav-Icon Nav-Icon-Circle Nav-Icon--Active" icon="brightness_1" />
                    </Link>
                    <Link to="/StepTwo">
                        <Icon className="Nav-Icon Nav-Icon-Circle" icon="brightness_1" />
                    </Link>
                    <Link to="/StepThree">
                        <Icon className="Nav-Icon Nav-Icon-Circle" icon="brightness_1" />
                    </Link>
                    <Link to="/StepFour">
                        <Icon className="Nav-Icon Nav-Icon-Circle" icon="brightness_1" />
                    </Link>
                    <Link to="/StepTwo">
                        <Icon className="Nav-Icon Nav-Icon-Arrow" icon="keyboard_arrow_right" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default OnboardingStepOne;