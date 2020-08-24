import React from 'react';
import { Button } from 'rmwc';
import { Link } from 'react-router-dom';
import layla from '../../assets/Layla.svg';
import './Recommendation.css'

const Recommendation = () => {
    return (
        <div className="Recommendation">
            <h1>
                Based on your answers, you likely need <b>physiotherapy</b>.
            </h1>
            <h2>
                Please bear in mind that I can
                only give a recommendation.
                For an accurate diagnosis,
                you need to consult a specialist.
            </h2>
            <img className="Layla-Avatar" src={layla} alt="Layla avatar" />
            <Link to="/search"><Button raised label="Look for physiotherapists nearby" /></Link>
        </div>
    );
}

export default Recommendation;