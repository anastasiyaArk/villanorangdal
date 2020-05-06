// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from 'react-bootstrap';

// Actions
import { getLanguageSlug, updateMultilingualRoutes, updateSelectedLanguageKey } from 'actions/LanguageActions';

// Assets
import villaNorangdal from '../../assets/images/villaNorangdalMain.jpg';

// Styles
import style from 'components/routes/Home.module.scss'


class Home extends Component {
  initLanguage() {
    this.props.updateMultilingualRoutes('');
    const selectedLanguageKey = this.props.match && this.props.match.params && this.props.match.params.selectedLanguage
      ? this.props.match.params.selectedLanguage
      : 'no';
    if (selectedLanguageKey !== this.props.selectedLanguageKey) {
      this.props.updateSelectedLanguageKey(selectedLanguageKey);
    }
  }

  componentDidMount() {
    this.initLanguage();
  }

  render() {
    return (
      <div className={style.container}>
        <Card>
          <Card.Img src={villaNorangdal}  className={style.backgroundImage} alt="Villa Norangdal" />
          <Card.ImgOverlay className={style.imageOverlay}>
            <Card.Title className={style.imageOverlayText}> {this.props.selectedLanguageKey === 'en' ? 'Welcome to Villa Norangdal!' : 'Velkommen til Villa Norangdal!'}
            <br/>
            _______________</Card.Title>
          </Card.ImgOverlay>
        </Card>
        <div className={style.welcomeText}>
          <h5>{this.props.selectedLanguageKey === 'en' ? 'In the very heart of Sunnmørsalpene!' : 'Midt i hjertet av Sunnmørsalpene!'}</h5>
          <div><FontAwesomeIcon icon={['far', 'heart']} alt='Tripadvisor logo' /></div>
          <p class="card-text">{this.props.selectedLanguageKey === 'en' ? 'Book now a lovely stay at our hotel in the heart of Sunnmørsalpene. ' +
            'Villa Norangdal is a perfect place to stay if you want to visit Ålesund, Geiranger, Trollstigen, Hjørundfjorden, Indre Nordfjord og Stryn. ' :
            'Book et herlig opphold hos oss midt i Sunnmørsalpene. Villa Norangdal er perfekt som utgangspunkt for å oppleve Ålesund, Geiranger, Trollstigen, Hjørundfjorden, Indre' +
            'Nordfjord og Stryn.'}
          </p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ selectedLanguageKey: state.selectedLanguageKey });

const mapDispatchToProps = {
  getLanguageSlug,
  updateMultilingualRoutes,
  updateSelectedLanguageKey
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
