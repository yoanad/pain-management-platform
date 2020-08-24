import React from 'react';
import { Button } from 'rmwc';
import { Link } from 'react-router-dom';
import layla from '../../assets/Layla.svg';
import './Recommendation.css'

const Recommendation = () => {
    const [specialist, setSpecialist] = React.useState(
        localStorage.getItem('recommendedSpecialist') || ''
    );
    const [problem, setProblem] = React.useState(
        localStorage.getItem('mainProblem') || ''
    );

    return (
        <div className="Recommendation">
            <h1>
                Based on your answers, you likely need a <b>{specialist}</b> for <b>{problem}</b>.
            </h1>
            <h2>
                Please bear in mind that I can
                only give a recommendation.
                For an accurate diagnosis,
                you need to consult a specialist.
            </h2>
            <img className="Layla-Avatar" src={layla} alt="Layla avatar" />
            <Link to="/search"><Button raised label="Look for specialists nearby" /></Link>
        </div>
    );
}

export default Recommendation;