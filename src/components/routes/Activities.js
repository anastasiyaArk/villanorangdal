// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Container, Row } from 'react-bootstrap';


// Components
import Breadcrumbs from 'components/partials/Breadcrumbs';


// Actions
import { getLanguageSlug, updateMultilingualRoutes, updateSelectedLanguageKey } from 'actions/LanguageActions';


// Styles
import style from 'components/routes/Activities.module.scss'


const ActivityCard = (props) => {
  return (
    <Card className={style.activityCard}>
      <Card.Img variant="top" src={props.image} className={style.activityImage} />
      <Card.Body>
        <Card.Title className={style.activityCardTitle}>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <a variant="primary" href={props.link} target='_blank' rel="noopener noreferrer">{props.languageKey === 'en' ? 'Visit    ' : 'Besøk    '}
        <FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} alt='Visit' /></a>
      </Card.Body>
    </Card>
  );
}

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
        <Container>
          <Row className={style.activityCardContainer}>
            <ActivityCard image={require('assets/images_partners/breogfjell.png')} title='Bre og Fjell' description={this.props.selectedLanguageKey === 'en' ? 'Guided tours' : 'Guided turer'}
              link='https://breogfjell.no/' languageKey = {this.props.selectedLanguageKey}/>
            <ActivityCard image={require('assets/images_partners/explore_north.png')} title='Explore North' description={this.props.selectedLanguageKey === 'en' ? 'Guided tours' : 'Guided turer'}
              link='http://explorenorth.no/'  languageKey = {this.props.selectedLanguageKey}/>
            <ActivityCard image={require('assets/images_partners/did_adventure.png')} title='Did Adventure' description={this.props.selectedLanguageKey === 'en' ? 'Guided tours' : 'Guided turer'}
              link='http://www.didadventure.no/'  languageKey = {this.props.selectedLanguageKey}/>
            <ActivityCard image={require('assets/images_partners/hjorundfjord.png')} title='Hjorundfjord Mountain Guide' description={this.props.selectedLanguageKey === 'en' ? 'Guided tours' : 'Guided turer'}
              link='https://hjorundfjordmountainguide.no/'  languageKey = {this.props.selectedLanguageKey}/>
            <ActivityCard image={require('assets/images_partners/hjorunfjord_portalen.png')} title='Hjorunfjord Portalen' description={this.props.selectedLanguageKey === 'en' ? 'Guided tours' : 'Guided turer'}
              link='https://www.hjorundfjord.no/'  languageKey = {this.props.selectedLanguageKey}/>
            <ActivityCard image={require('assets/images_partners/hvitserk.png')} title='Hvitserk' description={this.props.selectedLanguageKey === 'en' ? 'Guided tours' : 'Guided turer'}
              link='https://www.hvitserk.no/'  languageKey = {this.props.selectedLanguageKey}/>
            <ActivityCard image={require('assets/images_partners/norgesguidene.png')} title='Norgesguidene' description={this.props.selectedLanguageKey === 'en' ? 'Guided tours' : 'Guided turer'}
              link='http://www.norgesguidene.no/'  languageKey = {this.props.selectedLanguageKey}/>
            <ActivityCard image={require('assets/images_partners/norwegian_adventures.png')} title='Norwegian Adventures' description={this.props.selectedLanguageKey === 'en' ? 'Guided tours' : 'Guided turer'}
              link='https://www.norway-adventures.com/'  languageKey = {this.props.selectedLanguageKey}/>
            <ActivityCard image={require('assets/images_partners/ute_guiden.png')} title='Uteguiden' description={this.props.selectedLanguageKey === 'en' ? 'Guided tours' : 'Guided turer'}
              link='https://uteguiden.com/'  languageKey = {this.props.selectedLanguageKey}/>
            <ActivityCard image={require('assets/images_partners/your_way.png')} title='Your Way' description={this.props.selectedLanguageKey === 'en' ? 'Guided tours' : 'Guided turer'}
              link='http://yourway.no/'  languageKey = {this.props.selectedLanguageKey}/>
            <ActivityCard image={require('assets/images_partners/stranda.png')} title='Strandafjellet' description={this.props.selectedLanguageKey === 'en' ? 'In our vicinity' : 'Tilbud i nærheten'}
              link='https://www.strandafjellet.no/'  languageKey = {this.props.selectedLanguageKey}/>
            <ActivityCard image={require('assets/images_partners/stryn.png')} title='Stryn' description={this.props.selectedLanguageKey === 'en' ? 'In our vicinity' : 'Tilbud i nærheten'}
              link='http://www.strynguiden.no/'  languageKey = {this.props.selectedLanguageKey}/>

          </Row>
        </Container>

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