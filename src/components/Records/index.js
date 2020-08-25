import React, { useState, useEffect } from 'react';
import { Elevation, Button, SimpleDialog } from 'rmwc';
import './Records.css';
import RecordsLog from '../../services/records.js';
import { useHistory } from 'react-router-dom';

const Records = () => {
    const [records, setRecords] = useState(RecordsLog);
    const [savedRecords, setSavedRecords] = useState(JSON.parse(localStorage.getItem("records")));
    const history = useHistory();

    const handleClick = () => {
        history.push('/records/add')
    }

    return (
        <div className="Records">
            <h1>Your records</h1>
            <div className="Record">
                {records.map((el, i) => (
                    <Elevation className="Elevation" z="1" key={i}>
                        <h2>{el.name}</h2>
                        <h3><b>{el.date} </b> | {el.location}</h3>
                    </Elevation>
                ))}
                <h1>Symptoms log</h1>
                {savedRecords.map((el, i) => (
                    <Elevation className="Elevation" z="1" key={i}>
                        <h2>Condition: {el.condition}</h2>
                        <h3><b>Medication: {el.medication} </b> | Dosage: {el.dosage} | Pain intensity:

                        {(Math.floor(el.intensity).toFixed(2))}%</h3>
                        <h4>Date: {el.date}</h4>
                    </Elevation>
                ))}
            </div>
            <Button raised onClick={handleClick}>
                Add new record
            </Button>
        </div>
    );
}

export default Records;