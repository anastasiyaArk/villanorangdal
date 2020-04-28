// Dependencies
import React, { Component } from 'react';

//Assests
import LogoOlavsRose from 'assets/images/logo_olavs_rose.png'

export default class Footer extends Component {
    constructor(props){
        super(props);
        console.log(this.props); // prints out whatever is inside props

    }
    render() {
        return (
            <div class="container-fluid text-center text-md-left">
                <div class="row">
                    <div class="col-md-6 my-3 contact-info">
                        <h5>Kontakt</h5>
                        <div>Villa Norangdal</div>
                        <div>6218 Hellesylt</div>
                        <div>70 26 10 84</div>
                        <div>mail@norangdal.com</div>
                    </div>
                    <div class="col-md-3 my-3 follow-footer">
                      
                    </div>
                    <div class="col-md-3 pt-3">
                        <a class="float-right" href="http://www.olavsrosa.no" target="_blank">
                            <img src={LogoOlavsRose} height="30px;" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}




