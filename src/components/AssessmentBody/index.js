import React, { useEffect, useState } from 'react';
import { Button, Select, Typography } from 'rmwc';
import layla from '../../assets/Layla.svg';
import body from '../../assets/body.svg';
import './Assessment.css'
import { useHistory } from 'react-router-dom';

const AssessmentBody = (props) => {
    const history = useHistory();
    const [mainProblem, setMainProblem] = useState('');
    const [invalid, setInvalid] = useState(false);

    const onButtonClick = (e) => {
        if (mainProblem.length === 0) {
            setInvalid(true);
        }
        else {
            history.push('/body');
        }
    }

    useEffect(() => {
        localStorage.setItem('mainProblem', mainProblem);
    }, [mainProblem]);

    return (
        <div className="Assessment">
            <div className="Assessment__Intro">
                <Typography use="headline5" tag="h5">
                    Sorry to hear you are in pain.<br />
                    <b>Don’t worry, I’m here to help.</b>
                </Typography>
                <img className="Layla-Outlined" src={layla} alt="avatar" />
            </div>
            <form>
                <Select
                    className="Select"
                    enhanced
                    required
                    invalid={invalid}
                    placeholder="Where does it hurt?"
                    onChange={(evt) => setMainProblem(evt.currentTarget.value)}
                    options={['Headache', 'Neck pain', 'Shoulder pain', 'Lower back pain', 'Other']}
                />
                <img className="Body" src={body} alt="avatar" />
                <Button raised label="Next" onClick={onButtonClick} />
            </form>
        </div>

    );
}

export default AssessmentBody;