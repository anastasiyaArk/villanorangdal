import React, { Component } from 'react'
import SocialMediaLinks from '../partials/SocialMediaLinks'

export default class Home extends Component {
    render() {
        return (
            <div class="card col-md-6">
                <SocialMediaLinks/>
                <img class="card-img-top" src="../assets/images/villa.jpg" alt="Villa Norangdal" />
                <div class="card-body text-center">
                    <h5 class="card-title">Velkommen til Villa Norangdal</h5>
                    <p class="card-text">Book et herlig opphold hos oss midt i Sunnmørsalpene. Villa Norangdal er perfekt som utgangspunkt for å oppleve Ålesund, Geiranger, Trollstigen, Hjørundfjorden, Indre
        Nordfjord og Stryn.</p>
                    <button class="btn btn-primary float-right">Book opphold</button>
                </div>
            </div>
        )
    }
}
