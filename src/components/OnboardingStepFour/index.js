import React from 'react';
import { Typography } from '@rmwc/typography';
import { Icon } from '@rmwc/icon';
import { Link } from 'react-router-dom';
import Wave from '../Wave';
import doctorpatient from '../../assets/doctorpatient.png';
import './OnboardingStepFour.css';

const OnboardingStepFour = () => {

    return (
        <div className="Onboarding__Step-Four">
            <Typography use="headline3" tag="h3">
                Do you have an ongoing treatment?
            </Typography>
            <img className="DoctorPatient" src={doctorpatient} alt="doctor and patient" />
            <div className="Info-Text">
                <Typography use="body">
                    You can conviniently log your symptoms and share them with your treating specialist.
                </Typography>
                <Wave fillColor="#ffc98e" />
                <div className="Navigation">
                    <Link to="/stepThree">
                        <Icon className="Nav-Icon Nav-Icon-Arrow" icon="keyboard_arrow_left" />
                    </Link>
                    <Link to="/stepOne">
                        <Icon className="Nav-Icon Nav-Icon-Circle" icon="brightness_1" />
                    </Link>
                    <Link to="/stepTwo">
                        <Icon className="Nav-Icon Nav-Icon-Circle" icon="brightness_1" />
                    </Link>
                    <Link to="/stepThree">
                        <Icon className="Nav-Icon Nav-Icon-Circle" icon="brightness_1" />
                    </Link>
                    <Link to="/stepFour">
                        <Icon className="Nav-Icon Nav-Icon-Circle Nav-Icon--Active" icon="brightness_1" />
                    </Link>
                    <Link to="/home">
                        <Icon className="Nav-Icon Nav-Icon-Arrow" icon="keyboard_arrow_right" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default OnboardingStepFour;