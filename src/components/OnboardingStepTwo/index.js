import React from 'react';
import { Typography } from '@rmwc/typography';
import { Icon } from '@rmwc/icon';
import { Link } from 'react-router-dom';
import Wave from '../Wave';
import crosses from '../../assets/crosses.svg';
import './OnboardingStepTwo.css';

const OnboardingStepTwo = () => {

    return (
        <div className="Onboarding__Step-Two">
            <Typography use="headline3" tag="h3">
                You already know what you are looking for?
            </Typography>

            <div className="Info-Text">
                <img className="Crosses" src={crosses} alt="crosses" />
                <Typography use="body">
                    You can directly search for services like massage, physiotherapy, chiropractic, etc and book.
                </Typography>
                <Wave fillColor="#60c4a0" />
                <div className="Navigation">
                    <Link to="/StepOne">
                        <Icon className="Nav-Icon Nav-Icon-Arrow" icon="keyboard_arrow_left" />
                    </Link>
                    <Link to="/StepOne">
                        <Icon className="Nav-Icon Nav-Icon-Circle" icon="brightness_1" />
                    </Link>
                    <Link to="/StepTwo">
                        <Icon className="Nav-Icon Nav-Icon-Circle Nav-Icon--Active" icon="brightness_1" />
                    </Link>
                    <Link to="/StepThree">
                        <Icon className="Nav-Icon Nav-Icon-Circle" icon="brightness_1" />
                    </Link>
                    <Link to="/StepFour">
                        <Icon className="Nav-Icon Nav-Icon-Circle" icon="brightness_1" />
                    </Link>
                    <Link to="/StepThree">
                        <Icon className="Nav-Icon Nav-Icon-Arrow" icon="keyboard_arrow_right" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default OnboardingStepTwo;