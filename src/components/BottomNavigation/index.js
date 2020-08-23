/* eslint-disable no-duplicate-case */
import React from 'react';
import { TabBar, Tab, Elevation } from 'rmwc';
import { Link, Redirect, useHistory } from 'react-router-dom';
import './BottomNavigation.css';
import layla_outlined from '../../assets/Layla_outlined_white_bg.png';

const BottomNavigation = () => {
    const history = useHistory();

    const onActivate = (e) => {
        console.log(e.target.index);
        const val = e.target.index;
        switch (val) {
            case 0:
                history.push("/search");
                break;
            case 1:
                history.push("/body");
                break;
            case 2:
                history.push("/home");
                break;
            case 3:
                history.push("/mind");
                break;
            case 4:
                history.push("/records");
                break;
            default:
            // code block
        }

    }
    return (
        <Elevation z={2}>
            <div className="BottomNavigation">
                <TabBar className="BottomNavigation__List" activeTabIndex={0} onActivate={onActivate}>
                    <Tab className="BottomNavigation__Item">Search</Tab>
                    <Tab className="BottomNavigation__Item">Body</Tab>
                    <Tab className="BottomNavigation__Item-Layla">
                        <img src={layla_outlined} alt="Layla" />
                    </Tab>
                    <Tab className="BottomNavigation__Item" >Mind</Tab>
                    <Tab className="BottomNavigation__Item" >Records</Tab>
                </TabBar>
            </div>
        </Elevation>
    )
}

export default BottomNavigation;