import React from 'react';
import { Redirect } from 'react-router-dom';
import './Assessment.css'

const Assessment = () => {
    return (
        <div className="Assessment">
            <Redirect to="/assessment/step1" />
        </div>
    );
};

export default Assessment;