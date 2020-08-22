import React, { useState, useEffect } from 'react';
// import { Typography } from '@rmwc/typography';
// import { Icon } from '@rmwc/icon';
import { Button, Icon, Typography, TextField } from 'rmwc';
import './Home.css'

const Home = () => {

    return (
        <div className="Home">
            <div className="Search-Bar">
                <TextField icon="person_outline" label="Physiotherapist" />
                <TextField icon="location_on" label="Edinburgh" />
                <Button icon="search" label="Search" raised />
                <div className="Background"></div>
            </div>
        </div>
    )
}

export default Home;