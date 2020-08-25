import React, { useState, useEffect } from 'react';
import { Elevation, Button, SimpleDialog, TextField, Slider, Select } from 'rmwc';
import './RecordsAdd.css';
import RecordsLog from '../../services/records.js';
import { useHistory } from 'react-router-dom';

const RecordsAdd = () => {
    const [intensity, setIntensity] = useState('');
    const [medication, setMedication] = useState('');
    const [dosage, setDosage] = useState('');
    const [condition, setCondition] = useState('');
    const [date, setDate] = useState('');

    const history = useHistory();

    const handleClick = () => {
        const _records = JSON.parse(localStorage.getItem('records'));
        const item = {
            intensity: intensity,
            medication: medication,
            dosage: dosage,
            condition: condition,
            date: date
        }
        if (_records) {
            _records.push(item);
            localStorage.setItem('records', JSON.stringify(_records));
        } else {
            const arr = [];
            arr.push(item);
            localStorage.setItem('records', JSON.stringify(arr));
        }

        history.push('/records')
    }

    return (
        <div className="RecordsAdd">
            <h1>Your records</h1>
            <div className="Record">
                <h2>Pain intensity</h2>
                <Slider
                    className="Item"
                    value={intensity}
                    onChange={(evt) => setIntensity(evt.currentTarget.value)}
                />
                <Select
                    className="Item"
                    label="Medication"
                    enhanced
                    value={medication}
                    onChange={(evt) => setMedication(evt.currentTarget.value)}
                    options={['Ibuprufen', 'Paracetamol', 'Analgin']}
                />
                <TextField
                    className="Item"
                    fullwidth
                    label="Dosage"
                    value={dosage}
                    onChange={(evt) => setDosage(evt.currentTarget.value)} />
                <Select
                    className="Item"
                    label="Condition"
                    enhanced
                    value={condition}
                    onChange={(evt) => setCondition(evt.currentTarget.value)}
                    options={['Lower back pain', 'Shoulder pain', 'Headache', 'Arthritis']}
                />
                <TextField
                    className="Item"
                    label="Date"
                    type="date"
                    fullwidth
                    value={date}
                    onChange={(evt) => setDate(evt.currentTarget.value)} />

            </div>
            <Button raised onClick={handleClick}>
                Save
            </Button>
        </div>
    );
}

export default RecordsAdd;