import React from 'react';

const Wave = (props) => {

    return (
        <div className="Wave">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 414 315">
                <path fill={props.fillColor} fill-rule="evenodd" d="M414 315H0V.32c57.315 73.993 193.695 124.031 287.855 60.951C338.518 27.47 381.76 16.29 414 14.427V315z" />
            </svg>
        </div>
    );
}

export default Wave;