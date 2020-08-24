import React from 'react';
import { Button, Select, Typography, List, ListItem, Checkbox, ListItemMeta, Elevation } from 'rmwc';
import CalculatingScreen from '../CalculatingScreen';
import Recommendation from '..//Recommendation';
import { Link, Route, Redirect } from 'react-router-dom';
import layla from '../../assets/Layla.svg';
import body from '../../assets/body.svg';
import './Assessment.css'
import serviceOptions from '../../services/serviceOptions.js';
import { useHistory, withRouter } from 'react-router-dom';

const AssessmentStep1 = () => {
    const history = useHistory();

    const onButtonClick = () => {
        history.push('/assessment/step2')
    }

    return (
        <div className="Assessment">
            <div className="Assessment__Intro">
                <Typography use="headline5" tag="h5">
                    Sorry to hear you are in pain.<br />
                    <b>Don’t worry, I’m here to help.</b>
                </Typography>
                <img className="Layla-Outlined" src={layla} alt="avatar" />
            </div>
            <Select
                className="Select"
                enhanced
                placeholder="Where does it hurt?"
                options={['Headache', 'Neck pain', 'Shoulder pain', 'Lower back pain']}
            />
            <img className="Body" src={body} alt="avatar" />
            <Button raised label="Next" onClick={onButtonClick} />
        </div>

    );
}

export default withRouter(AssessmentStep1);