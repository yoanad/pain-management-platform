import React, { useEffect, useState, useCallback } from 'react';
import { Button, Typography, List, ListItem, Checkbox, ListItemMeta, Elevation } from 'rmwc';
import layla from '../../assets/Layla.svg';
import body from '../../assets/body.svg';
import './Assessment.css'
import serviceOptions from '../../services/serviceOptions.js';
import { useHistory } from 'react-router-dom';

const AssessmentStep2 = () => {
    const [checked, setChecked] = useState({});
    const [options, setOptions] = useState(serviceOptions);
    const [recommendedSpecialist, setRecommendedSpecialist] = useState('');
    const history = useHistory();

    useEffect(() => {
        if (recommendedSpecialist === 1) {
            localStorage.setItem('recommendedSpecialist', "Massage");
        } else if (recommendedSpecialist === 2) {
            localStorage.setItem('recommendedSpecialist', "Physiotherapy");
        } else {
            localStorage.setItem('recommendedSpecialist', "Unknown");
        }
    }, [recommendedSpecialist]);

    const onButtonClick = (e) => {
        calculateCategory();
        setTimeout(() => {
            history.push("/assessment/calculating");
        }, 500)
    }

    const calculateCategory = () => {
        const categories = [];

        //get categories of all selected items 
        for (let c in checked) {
            options.forEach((option) => {
                if (option.label === c) {
                    categories.push(option.category);
                }
            })
        }

        //calculate prediction
        //count how many are selected from each category
        const categoryCounts = new Map();
        categories.forEach((el) => {
            if (categoryCounts.has(el)) {
                let cnt = categoryCounts.get(el);
                categoryCounts.set(el, ++cnt);
            } else {
                categoryCounts.set(el, 1);
            }
        });

        console.log(categoryCounts)
        //find category with highest frequency
        let predictedCat, max = Number.MIN_SAFE_INTEGER;
        categoryCounts.forEach((value, key) => {
            if (value > max) {
                max = value;
                predictedCat = key;
            }
        });

        console.log("predicted cat", predictedCat);
        setRecommendedSpecialist(predictedCat);
    }

    return (
        <div className="Assessment">
            <div className="Assessment__Intro">
                <Typography use="headline5" tag="h5">
                    <b>Ok, can you describe the problem to me?</b><br />
                        Please choose any that apply.
                    </Typography>
                <img className="Layla-Outlined" src={layla} alt="avatar" />
            </div>
            <Elevation z={2}>
                <List className="List">
                    {serviceOptions.map(el => (
                        <ListItem
                            className="ListItem"
                            key={el.label}
                            category={el.category}
                            onClick={() =>
                                setChecked({ ...checked, [el.label]: !checked[el.label] })
                            }
                        >
                            {el.label}
                            <ListItemMeta>
                                <Checkbox checked={checked[el.label]} />
                            </ListItemMeta>
                        </ListItem>
                    ))}
                </List>
            </Elevation>
            <Button raised label="Next" onClick={onButtonClick} />
        </div >
    );
}

export default AssessmentStep2;