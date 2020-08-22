import React from 'react';
// import { Typography } from '@rmwc/typography';
// import { Icon } from '@rmwc/icon';
import { Button, TextField } from 'rmwc';
import './Home.css'
import Card from '../Card';
import doctors from '../../services/doctors';

const Home = () => {

    // const Results = () => {
    //     doctors.forEach((el, i) => {

    //     });
    // }

    return (
        <div className="Home">
            <div className="Search-Bar">
                <TextField icon="person_outline" label="Physiotherapist" />
                <TextField icon="location_on" label="Edinburgh" />
                <Button icon="search" label="Search" raised />
                <div className="Background"></div>
            </div>
            <div className="Results">
                {/* <Results /> */}
                {doctors.map((d, i) => <Card key={i} name={d.name} specialty={d.specialty} location={d.location} description={d.description} avatarUrl={d.avatarUrl} />)}
            </div>
        </div>
    )
}

export default Home;