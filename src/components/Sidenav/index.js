import React from 'react';
import './sidenav.css';
import UserCard from './UserCard';
import {Avatar} from "../Avatar";

const Sidenav = () => {
    return (
        <div className="sidenav">
            <div className='user-section'>
                <Avatar/>
                <div>
                    <div className='username'>Amoine Daiki</div>
                    <a className='settings'>settings <span>	&#129171;</span></a>
                </div>
            </div>

            <ul>
                <li>Dashboard</li>
                <li className='active'>Portfolio</li>
                <li>Programs</li>
                <li>Projects</li>
                <li>Metrics</li>
            </ul>

        </div>
    );
};

export default Sidenav;
