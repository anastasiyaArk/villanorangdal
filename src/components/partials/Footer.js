// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';

//Assests
import LogoOlavsRose from 'assets/images/logo_olavs_rose.png'

//Styles
import style from 'components/partials/Footer.module.scss';

class Footer extends Component {
    constructor(props) {
        super(props);
        console.log(this.props); // prints out whatever is inside props

    }
    render() {
        return (
            <div className={style.footer}>
                <div className={style.contentSection}>
                    <div className={style.grid}>
                        <div>
                            <h5>Kontakt</h5>
                            <div>Villa Norangdal</div>
                            <div>6218 Hellesylt</div>
                            <div>70 26 10 84</div>
                            <div>mail@norangdal.com</div>
                        </div>
                        <div>

                        </div>
                        <div>
                            <a href="http://www.olavsrosa.no" target="_blank">
                                <img src={LogoOlavsRose} height="30px;" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = null;

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Footer);




