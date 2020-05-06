// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Assests
import LogoOlavsRose from 'assets/images/logo_olavs_rose.png'

// Actions 
import { getLanguageSlug } from 'actions/LanguageActions';

//Styles
import style from 'components/partials/Footer.module.scss';

class Footer extends Component {
    render() {
        return (
            <div className={style.footer}>
                <div className={style.contentSection}>
                    <div className={style.grid}>
                        <div className={style.textSection}>
                            <h5>{
                                this.props.selectedLanguageKey === 'en'
                                    ? 'Contact'
                                    : 'Kontakt oss'
                            }</h5>
                            <div>Villa Norangdal</div>
                            <div>6218 Hellesylt</div>
                            <div>70 26 10 84</div>
                            <div>mail@norangdal.com</div>
                        </div>
                        <div className={style.grid}>
                            <div className={style.socialMediaLinks}>
                                <h5>{
                                    this.props.selectedLanguageKey === 'en'
                                        ? 'Follow'
                                        : 'Følg oss'
                                }</h5>
                                <a href='https://www.facebook.com/norangdal/' title='Link to Facebook page' aria-label='Link to Facebook page' target='_blank' rel="noopener noreferrer" >
                                    <FontAwesomeIcon icon={['fab', 'facebook-f']} alt='Facebook logo' />
                                </a>
                                <a href='href="https://instagram.com/villanorangdal' title='Link to Instagram page' aria-label='Link to Instagram page' target='_blank' rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={['fab', 'instagram']} alt='Instagram logo' />
                                </a>
                                <a href='https://www.tripadvisor.com/Hotel_Review-g1509004-d1501470-Reviews-Villa_Norangdal-Hellesylt_Stranda_More_og_Romsdal_Western_Norway.html' title='Link to Tripadvisor' aria-label='Link to Youtube channel' target='_blank' rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={['fab', 'tripadvisor']} alt='Tripadvisor logo' />
                                </a>
                            </div>
                        </div>
                        <div className={style.grid}>
                            <a href="http://www.olavsrosa.no" target="_blank" rel="noopener noreferrer">
                                <img src={LogoOlavsRose} height="30px;" alt='Olavs rose'/>
                            </a>
                        </div>
                        <div className={style.grid}>
                            <div className={style.textSection}>
                                <a href="#" target="_blank">
                                    Administrasjon
                            </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ selectedLanguageKey: state.selectedLanguageKey });

const mapDispatchToProps = {
    getLanguageSlug,
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);




