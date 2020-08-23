import React from 'react';
import layla_outlined from '../../assets/Layla_outlined.png';
import { Typography } from '@rmwc/typography';
import { Icon } from '@rmwc/icon';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="Home">
            <img className="Layla-Avatar" src={layla_outlined} alt="Layla avatar" />
            <Typography use="headline3" tag="h3">
                Hi, I’m Layla, your adviser. <br />
                <b>How can I help?</b>
            </Typography>
            <Link to="/search">
                <div className="NavItem NavItem-Specialist">
                    <p>
                        I know what specialist
                        I’m looking for
                    </p>
                    <Icon icon="keyboard_arrow_right" />
                </div>
            </Link>
            <Link to="assessment-specialist">
                <div className="NavItem NavItem-NoSpecialist">
                    <p>
                        I don’t know what specialist
                        I’m looking for.
                    </p>
                    <Icon icon="keyboard_arrow_right" />
                </div>
            </Link>
            <Link to="assessment-body">
                <div className="NavItem NavItem-Exercises">
                    <p>
                        I’m looking for excercises
                        for pain.
                    </p>
                    <Icon icon="keyboard_arrow_right" />
                </div>
            </Link>
            <Link to="assessment-mind">
                <div className="NavItem NavItem-Meditation">
                    <p>
                        I’m looking for meditation for pain.
                    </p>
                    <Icon icon="keyboard_arrow_right" />
                </div>
            </Link>
            <Link to="log-symptoms">
                <div className="NavItem NavItem-Symptoms">
                    <p>
                        I want to log my symptoms.
                    </p>
                    <Icon icon="keyboard_arrow_right" />
                </div>
            </Link>
        </div>
    );
}

export default Home;