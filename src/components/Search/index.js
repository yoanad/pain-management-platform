import React, { useState, useCallback } from 'react';
import { Button, TextField, CircularProgress, Typography } from 'rmwc';
import './Search.css'
import Card from '../Card';
import doctors from '../../services/doctors';
import layla_outlined from '../../assets/Layla_outlined.png';

const Search = () => {
    const [specialtyFilter, setSpecialtyFilter] = useState("");
    const [locationFilter, setLocationFilter] = useState("");
    const [loading, setLoading] = useState(false);
    const [filteredItems, setFilteredItems] = useState([]);
    const [searched, setSearched] = useState(false);

    const handleClick = useCallback(() => {
        setFilteredItems(
            doctors.filter((doctor) =>
                doctor.speciality.toLowerCase().includes(specialtyFilter.toLowerCase())
                && doctor.location.toLowerCase().includes(locationFilter.toLowerCase())
            )
        );
        // (specialtyFilter.toLowerCase().length !== 0 && locationFilter.toLowerCase().length !== 0)
        setSearched(true);

    }, [specialtyFilter, locationFilter]);

    const NoResultsInitial = () => {
        return (
            <div className="No-Results">
                <img className="Layla-Outlined" src={layla_outlined} alt="avatar" />
                <Typography use="headline3" tag="h3">
                    Welcome!
                </Typography>
                <Typography use="headline4" tag="h4">
                    Try searching for specialist area and location.
                    </Typography>
            </div>
        )
    }

    const NoResults = () => {
        return (
            <div className="No-Results">
                <img className="Layla-Outlined" src={layla_outlined} alt="avatar" />
                <Typography use="headline3" tag="h3">
                    Sorry!
                    </Typography>
                <Typography use="headline4" tag="h4">
                    I couldn’t find anything. < br />
                    Try searching for something else.
                    </Typography>
            </div>
        )
    }

    const Results = () => {

        if (loading) {
            return <CircularProgress size={72} />;
        }

        if (!searched) {
            return <NoResultsInitial />;
        }

        if (filteredItems.length === 0) {
            return <NoResults />;
        } else {
            return filteredItems.map((d, i) =>
                <Card key={i} {...d} />);
        }
    }


    return (
        <div className="Search">
            <div className="Search-Bar">
                <TextField icon="person_outline" label="Specialty" onChange={e => setSpecialtyFilter(e.target.value)} />
                <TextField icon="location_on" label="Location" onChange={(e) => setLocationFilter(e.target.value)} />
                <Button icon="search" label="Search" raised onClick={handleClick} />
                <div className="Background"></div>
            </div>
            <div className="Results">
                <Results />
            </div>
        </div>
    )
}

export default Search;