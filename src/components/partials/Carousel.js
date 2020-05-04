// Dependencies
import React, { Component } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselCaption, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
    "mdbreact";
import { connect } from 'react-redux';

// Actions
import { getLanguageSlug, updateMultilingualRoutes, updateSelectedLanguageKey } from 'actions/LanguageActions';

// Assets
import villaNorangdal from '../../assets/images/villa.jpg';
import activity from '../../assets/images/activity.jpg';
import boutikBar from '../../assets/images/boutikBar.jpg';

//Styles
import style from 'components/partials/Carousel.module.scss';

class Carousel extends Component {
    render() {
        return (
            <MDBContainer>
                <MDBCarousel
                    activeItem={1}
                    length={3}
                    showControls={true}
                    showIndicators={true}
                    className="z-depth-1"
                    slide
                >
                    <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                            <MDBView>
                                <img
                                    className="d-block w-100"
                                    src={villaNorangdal}
                                    alt="Villa Norangdal"
                                />
                            </MDBView>
                            <MDBCarouselCaption className={style.captionArea}>
                                <h3 className={style.textContainer}>{this.props.selectedLanguageKey === 'en' ? 'Welcome to Villa Norangdal' : 'Velkommen til Villa Norangdal'}</h3>
                                <p className={style.textContainer}>_________</p>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                            <MDBView>
                                <img
                                    className="d-block w-100"
                                    src={activity}
                                    alt={this.props.selectedLanguageKey === 'en' ? 'Activity' : 'Aktivitet'}
                                />
                            </MDBView>
                            <MDBCarouselCaption className={style.captionArea}>
                                <h3 className={style.textContainer}>{this.props.selectedLanguageKey === 'en' ? 'Rough Luxe: Some roughness and some luxury' : 'Rough Luxe - Litt røft og litt liksus'}</h3>
                                <p className={style.textContainer}>__________</p>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                            <MDBView>
                                <img
                                    className="d-block w-100"
                                    src={boutikBar}
                                    alt="Hellesylt Boutik and Bar"
                                />
                            </MDBView>
                            <MDBCarouselCaption className={style.captionArea}>
                                <h3 className={style.textContainer}>{this.props.selectedLanguageKey === 'en' ? 'Visit Hellesylt Boutique & Bar' : 'Besøk Hellesylt Boutique & Bar'}</h3>
                                <p className={style.textContainer}>__________</p>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
            </MDBContainer>
        );
    }
}

const mapStateToProps = state => ({ selectedLanguageKey: state.selectedLanguageKey });

const mapDispatchToProps = {
  getLanguageSlug,
  updateMultilingualRoutes,
  updateSelectedLanguageKey
};

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);