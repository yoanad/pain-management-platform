import React from 'react';
import { Typography } from '@rmwc/typography';
import { Icon } from '@rmwc/icon';
import { Link } from 'react-router-dom';
import Wave from '../Wave';
import manWithBall from '../../assets/manball.png';
import './OnboardingStepThree.css';

const OnboardingStepThree = () => {

    return (
        <div className="Onboarding__Step-Three">
            <Typography use="headline3" tag="h3">
                Looking for excercises or meditation to manage your condition?
            </Typography>
            <img className="Man-With-Ball" src={manWithBall} alt="crosses" />
            <div className="Info-Text">
                <Typography use="body">
                    Have a look at the Body and Mind sections! There you will find curated excercises and meditations.
                </Typography>
                {/* <Wave fillColor="#b086f6" /> */}
                <div className="Navigation">
                    <Link to="/StepTwo">
                        <Icon className="Nav-Icon Nav-Icon-Arrow" icon="keyboard_arrow_left" />
                    </Link>
                    <Link to="/StepOne">
                        <Icon className="Nav-Icon Nav-Icon-Circle" icon="brightness_1" />
                    </Link>
                    <Link to="/StepTwo">
                        <Icon className="Nav-Icon Nav-Icon-Circle" icon="brightness_1" />
                    </Link>
                    <Link to="/StepThree">
                        <Icon className="Nav-Icon Nav-Icon-Circle Nav-Icon--Active" icon="brightness_1" />
                    </Link>
                    <Link to="/StepFour">
                        <Icon className="Nav-Icon Nav-Icon-Circle" icon="brightness_1" />
                    </Link>
                    <Link to="/StepFour">
                        <Icon className="Nav-Icon Nav-Icon-Arrow" icon="keyboard_arrow_right" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default OnboardingStepThree;