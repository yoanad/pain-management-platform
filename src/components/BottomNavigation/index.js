import React from 'react';
import { TabBar, Tab, Elevation } from 'rmwc';
import { Link } from 'react-router-dom';
import './BottomNavigation.css';

const BottomNavigation = () => {
    return (
        <Elevation z={2}>
            <div className="BottomNavigation">
                <TabBar className="BottomNavigation__List">
                    <Tab className="BottomNavigation__Item"><Link>Home</Link></Tab>
                    <Tab className="BottomNavigation__Item"><Link>Body</Link></Tab>
                    <Tab className="BottomNavigation__Item" ><Link>Mind</Link></Tab>
                    <Tab className="BottomNavigation__Item" ><Link>Records</Link></Tab>
                </TabBar>
            </div>
        </Elevation>
    )
}

export default BottomNavigation;