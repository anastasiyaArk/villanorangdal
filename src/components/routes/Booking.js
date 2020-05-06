// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CardDeck, Card, Row, Col } from 'react-bootstrap';


// Components
import Breadcrumbs from 'components/partials/Breadcrumbs';
import BookingForm from 'components/partials/BookingForm';

// Styles
import style from 'components/routes/Booking.module.scss'

// Actions
import { getLanguageSlug, updateMultilingualRoutes, updateSelectedLanguageKey } from 'actions/LanguageActions';

class Booking extends Component {
  initLanguage() {
    this.props.updateMultilingualRoutes('booking/');
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
        en: 'Booking | Villa Norangdal',
        no: 'Booking | Villa Norangdal'
      },
      heading: {
        en: 'Booking',
        no: 'Booking'
      },
      description: {
        en: 'Booking for Villa Norangdal',
        no: 'Villa Norangdal booking'
      }
    }

    let breadcrumbs = [
      {
        name: listGalleryPage.heading[this.props.selectedLanguageKey],
        path: `/${this.props.getLanguageSlug(this.props.selectedLanguageKey)}booking/`
      }
    ];
    return (
      <div className={style.container}>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <div className={style.header}>
          <h4>{this.props.selectedLanguageKey === 'en' ? 'Booking' : 'Booking'}</h4>
          <div><FontAwesomeIcon icon={['fas', 'hotel']} alt={this.props.selectedLanguageKey === 'en' ? 'Hotel logo' : 'Hotell logo'} /></div>
          <p></p>
        </div>
        <CardDeck>
          <Row>
            <Col>
              <Card>
                <BookingForm />
              </Card>
            </Col>
            <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>OBS: Dette er kun eksempeltekst/forslag </Card.Title>
                <Card.Text>Når du har fått svar på din forespørsel ber vi om at du bekrefter bestillingen.</Card.Text>
                <Card.Title>Betaling</Card.Title>
                <Card.Text>Ved bestilling mer enn 30 dager før ankomst fakturerer vi 25% av beløpet som depositum. Dette skal betales innen en uke. Det resterende beløpet betales 30 dager før ankomst.
                      Ved bestilling nærmere enn 30 dager til ankomst forfaller hele leiebeløpet til betaling ved bestilling.</Card.Text>
                <Card.Title>Avbestilling</Card.Title>
                <Card.Text>Ved avbestilling mer enn 30 dager før ankomst vil innbetalt depositum, minus ett avbestillingsgebyr på kr 300, bli tilbakebetalt.
                  Ved avbestilling senere refunderes ikke det innbetalte beløpet.<br /><br />
                  Vil tilbyr ingen avbestillingsforsikring og ber om at gjestene ordner dette med sitt eget forsikringsselskap.</Card.Text>
              </Card.Body>
            </Card>
            </Col>
          </Row>
        </CardDeck>
      </div >
    )
  }
}

const mapStateToProps = state => ({ selectedLanguageKey: state.selectedLanguageKey, location: state.router.location });

const mapDispatchToProps = {
  getLanguageSlug,
  updateMultilingualRoutes,
  updateSelectedLanguageKey
};

export default connect(mapStateToProps, mapDispatchToProps)(Booking);