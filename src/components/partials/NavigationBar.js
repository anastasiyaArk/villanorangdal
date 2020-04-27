// Dependencies
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import loadable from "@loadable/component";

// Assets
import NorangdalVillaLogo from 'assets/images/Logo.png'

// Actions // Actions
import { getLanguageSlug } from 'actions/LanguageActions';



class NavigationBar extends Component {

    render() {
        return (
            <div>
                <span>
                    <img src={NorangdalVillaLogo} alt="Norangdal Villa logo" />
                </span>
                <ul>
                    <li>
                        <NavLink to={`/home/`} title='Home'>
                            Home
                </NavLink>
                </li>
                <li>
                <NavLink to={`/hotel/`} title='Hotel'>
                            HOTELLET
                </NavLink>
                </li>
                <li>
                <NavLink to={`/room/`} title='Room'>
                            ROM
                </NavLink>
                </li>
                <li>
                <NavLink to={`/activities/`} title='Activities'>
                            AKTIVITETER
                </NavLink>
                </li>
                <li>
                <NavLink to={`/gallery/`} title='Gallery'>
                            GALERI
                </NavLink>
                </li>
                <li>
                <NavLink to={`/booking/`} title='Booking'>
                            BOOKING
                </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavigationBar




