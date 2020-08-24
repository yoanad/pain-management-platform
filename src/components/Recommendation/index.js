import React from 'react';
import layla from '../../assets/Layla.svg';
import './Recommendation.css'

const Recommendation = () => {
    return (
        <div className="Recommendation">
            <h1>
                Based on your answers, you likely need physiotherapy.
            </h1>
            <h2>
                Please bear in mind that I can
                only give a recommendation.
                For an accurate diagnosis,
                you need to consult a specialist.
            </h2>
            <img className="Layla-Avatar" src={layla} alt="Layla avatar" />
        </div>
    );
}

export default Recommendation;