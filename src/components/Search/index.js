import React, { useState, useCallback } from 'react';
import {
    Button, TextField, CircularProgress, Typography, Drawer, DrawerHeader,
    DrawerTitle, DrawerSubtitle, DrawerContent, ListItem, List, ChipSet, Switch,
    Chip, Slider
} from 'rmwc';
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
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = React.useState({});
    const toggleSelected = key =>
        setSelected({
            ...selected,
            [key]: !selected[key]
        });

    const handleClick = useCallback(() => {
        setFilteredItems(
            doctors.filter((doctor) =>
                doctor.speciality.toLowerCase().includes(specialtyFilter.toLowerCase())
                && doctor.location.toLowerCase().includes(locationFilter.toLowerCase())
            )
        );
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
            <div className="Filters-Button">
                <Button label="more filters" icon="add" onClick={() => setOpen(!open)} />
            </div>
            <div className="Results">
                <Results />
            </div>
            <Drawer className="Drawer" modal open={open} onClose={() => setOpen(false)}>
                <DrawerHeader>
                    <DrawerTitle>More filters</DrawerTitle>
                </DrawerHeader>
                <DrawerContent>
                    <h2>Specialty</h2>
                    <div className="Specialty">
                        <ChipSet filter>
                            <Chip
                                selected={selected.physiotherapy}
                                checkmark
                                onInteraction={(e) => toggleSelected('physiotherapy')}
                                label="Physiotherapy"
                            />
                            <Chip
                                selected={selected.massage}
                                checkmark
                                onInteraction={() => toggleSelected('massage')}
                                label="Massage"
                            />
                            <Chip
                                selected={selected.chiropractic}
                                checkmark
                                onInteraction={() => toggleSelected('chiropractic')}
                                label="Chiropractic"
                            />
                            <Chip
                                selected={selected.lbp}
                                checkmark
                                onInteraction={() => toggleSelected('lbp')}
                                label="Lower back pain"
                            />
                            <Chip
                                selected={selected.musclePain}
                                checkmark
                                onInteraction={() => toggleSelected('musclePain')}
                                label="Muscle pain"
                            />
                            <Chip
                                selected={selected.migraine}
                                checkmark
                                onInteraction={() => toggleSelected('migraine')}
                                label="Migraine"
                            />
                        </ChipSet>
                        <h2>Health insurance</h2>
                        <Switch defaultChecked label="NHS" />
                        <Switch defaultChecked label="Private" />
                        <h2>Online booking</h2>
                        <Switch defaultChecked label="With online booking" />
                        <h2>Video consultation</h2>
                        <Switch defaultChecked label="With video consultation" />
                        <h2>Experience (years)</h2>
                        <Slider discrete displayMarkers min={1} max={20} step={1} />
                    </div>
                    <Button label="Done" raised onClick={() => setOpen(false)} />
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default Search;