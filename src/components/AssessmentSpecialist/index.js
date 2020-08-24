import React from 'react';
import { Button, Select, Typography, List, ListItem, Checkbox, ListItemMeta, Elevation } from 'rmwc';
import { Link } from 'react-router-dom';
import layla from '../../assets/Layla.svg';
import body from '../../assets/body.svg';
import './AssessmentSpecialist.css'
import serviceOptions from '../../services/serviceOptions.js';
import { useHistory } from 'react-router-dom';

const AssessmentStep1 = () => {
    const onButtonClick = () => {
    };
    return (
        <div>
            <div className="Assessment-Specialist__Intro">
                <Typography use="headline5" tag="h5">
                    Sorry to hear you are in pain.<br />
                    <b>Don’t worry, I’m here to help.</b>
                </Typography>
                <img className="Layla-Outlined" src={layla} alt="avatar" />
            </div>
            <Select
                className="Select"
                enhanced
                placeholder="Where does it hurt?"
                options={['Cookies', 'Pizza', 'Icecream']}
            />
            <img className="Body" src={body} alt="avatar" />
            <Link to="step2">
                <Button raised label="Next" onClick={onButtonClick} />
            </Link>
        </div>

    );
}

const AssessmentStep2 = () => {
    const [checked, setChecked] = React.useState({});
    const [options, setOptions] = React.useState(serviceOptions);
    const history = useHistory();

    const onButtonClick = (e) => {

        history.push("/calculating");

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
    }

    return (
        <div>
            <div className="Assessment-Specialist__Intro">
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

const AssessmentSpecialist = () => {

    return (
        <div className="Assessment-Specialist">
            {/* <AssessmentStep1 /> */}
            <AssessmentStep2 />
        </div>
    );
};

export default AssessmentSpecialist;