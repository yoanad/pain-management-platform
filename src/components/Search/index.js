import React, { useState, useCallback } from 'react';
import { Button, TextField } from 'rmwc';
import './Search.css'
import Card from '../Card';
import doctors from '../../services/doctors';

const Search = () => {
    const [specialtyFilter, setSpecialtyFilter] = useState("");
    const [locationFilter, setLocationFilter] = useState("");
    const [loading, setLoading] = useState(false);
    const [filteredItems, setFilteredItems] = useState([]);

    const handleClick = useCallback(() => {
        console.log(doctors)
        setFilteredItems(
            doctors.filter((doctor) =>
                doctor.speciality.toLowerCase().includes(specialtyFilter.toLowerCase())
                && doctor.location.toLowerCase().includes(locationFilter.toLowerCase())
            )
        );
        console.log(specialtyFilter.toLowerCase(), doctors[0].speciality.toLowerCase());

    }, [specialtyFilter, locationFilter]);

    if (loading) {
        return <p>Loading countries...</p>;
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
                {filteredItems.map((d, i) => <Card key={i} name={d.name} speciality={d.speciality} location={d.location} description={d.description} avatarUrl={d.avatarUrl} />)}
            </div>
        </div>
    )
}

export default Search;