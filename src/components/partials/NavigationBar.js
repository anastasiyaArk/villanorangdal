// Dependencies
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

// Assets
import NorangdalVillaLogo from 'assets/images/Logo.png'

// Actions // Actions
import {getLanguageSlug} from 'actions/LanguageActions';

// Routes
import Activities from '../routes/Activities';
import Booking from '../routes/Booking';
import Gallery from '../routes/Gallery';
import Hotel from '../routes/Hotel';
import Room from '../routes/Room';

class NavigationBar extends Component {

    render() {
        return (
            <div>
                <span>
                    <img src={NorangdalVillaLogo} alt="Norangdal Villa logo" />
                </span>
         
            <ul>
                <Hotel/>
                <Room/>
                <Activities/>
                <Gallery/>
                <Booking/>
            </ul>
            </div>
        )
    }
}

export default NavigationBar




