// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Image } from 'react-bootstrap';


// Components
import Breadcrumbs from 'components/partials/Breadcrumbs';

// Actions
import { getLanguageSlug, updateMultilingualRoutes, updateSelectedLanguageKey } from 'actions/LanguageActions';

// Assets
import activity from '../../assets/images/activity.jpg';

// Styles
import style from 'components/routes/Activities.module.scss'

class Activities extends Component {

  initLanguage() {
    this.props.updateMultilingualRoutes('activities/');
    const selectedLanguageKey = this.props.match && this.props.match.params && this.props.match.params.selectedLanguage ? this.props.match.params.selectedLanguage : 'no';
    if (selectedLanguageKey !== this.props.selectedLanguageKey) {
      this.props.updateSelectedLanguageKey(selectedLanguageKey);
    }
  }

  componentDidMount() {
    this.initLanguage();
  }

  render() {
    const listGalleryPage = {
      title: {
        en: 'Activities | Villa Norangdal',
        no: 'Aktiviteter | Villa Norangdal'
      },
      heading: {
        en: 'Activities',
        no: 'Aktiviteter'
      },
      description: {
        en: 'Activities at Villa Norangdal',
        no: 'Villa Norangdal aktiviteter'
      }
    }

    let breadcrumbs = [
      {
        name: listGalleryPage.heading[this.props.selectedLanguageKey],
        path: `/${this.props.getLanguageSlug(this.props.selectedLanguageKey)}activities/`
      }
    ];
    return (
      <div className={style.container}>
        <div>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </div>
        <div className={style.header}>
          <h4>{this.props.selectedLanguageKey === 'en' ? 'Activities in the Sunnmøre Alps' : 'Aktiviteter i Sunnmørsalpene'}</h4>
          <div><FontAwesomeIcon icon={['fas', 'skiing-nordic']} alt={this.props.selectedLanguageKey === 'en' ? 'Activities logo' : 'Aktiviteter logo'} /></div>
          <p>{this.props.selectedLanguageKey === 'en' ? 'Our location in the Sunnmøre Alps is a fantastic starting point for walks or sightseeing in the Ålesund, ' +
          'Geiranger/Trollstigen, Hjørundfjorden and Indre Nordfjord/Stryn areas.' : 'Villa Norangdal er perfekt som utgangspunkt for å oppleve Ålesund, Geiranger, Trollstigen, Hjørundfjorden, ' +
          'Indre Nordfjord og Stryn.'}</p>
        </div>
        <div><Image src={activity} className={style.activityImage} alt={this.props.selectedLanguageKey === 'en' ? 'Activities' : 'Aktiviteter'} /></div>
        <div className={style.mainText}>
        <p>{this.props.selectedLanguageKey === 'en' ? 'For outings we help you connect with professional guides for hiking, skiing, biking, ' +
          'kayaking, climbing, diving – any kind of outdoor activity you can think of. If you are not tempted by mountains and fjords, we will provide you the best tips for ' +
          'a “Rural Norway Revisited” experience, with the best coffee bars, exhibitions, shopping and architecture. In other words, at Villa Norangdal you can have a holiday ' +
          'in Mountainpolitan Style.' : 'Sunnmøre og Sunnmørsalpene har fascinert generasjoner. Hos oss kan du nyte et Mountainpolitan opphold; kombiner magiske naturopplevelser ' +
          'med shopping og kafeliv, vi tipser deg om perlene!'}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ selectedLanguageKey: state.selectedLanguageKey, location: state.router.location });

const mapDispatchToProps = {
  getLanguageSlug,
  updateMultilingualRoutes,
  updateSelectedLanguageKey
};

export default connect(mapStateToProps, mapDispatchToProps)(Activities);