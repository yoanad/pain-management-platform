import React from 'react';
import layla from '../../assets/Layla.svg';
import { useHistory } from 'react-router-dom';
import { CircularProgress } from 'rmwc';
import './CalculatingScreen.css'

const CalculatingScreen = () => {
    const history = useHistory();

    setTimeout(() => {
        history.push("/recommendation");
    }, 3000);

    return (
        <div className="CalculatingScreen">
            <CircularProgress size={72} />
            <h1>Calculating your recommendation...</h1>
            <img className="Layla-Avatar" src={layla} alt="Layla avatar" />
        </div>
    );
}

export default CalculatingScreen;