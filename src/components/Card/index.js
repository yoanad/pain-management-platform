import React from 'react';
import { Elevation, Icon, Button } from 'rmwc';
import './Card.css'

const Card = (props) => {
    return (
        <div className="Card">
            <Elevation className="Elevation" z="2">
                <div className="Card__Content">
                    <div className="Row-1">
                        <p className="Name">{props.name}</p>
                        <p className="Specialty">{props.speciality}</p>
                    </div>
                    <div className="Row-2">
                        <img src={props.avatarUrl} alt="avatar" />
                        <div className="Content__Right">
                            <p className="Description">
                                {props.description}
                            </p>
                            <p className="Location">
                                <Icon icon="location_on" />{props.location}
                            </p>
                            <Button label="View profile" dense ripple={false} />
                            <Button outlined label="Book" dense ripple={false} />
                        </div>
                    </div>
                </div>
            </Elevation>
        </div>
    );
}

export default Card;