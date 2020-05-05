// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// Components
import Breadcrumbs from 'components/partials/Breadcrumbs';
import BookingForm from 'components/partials/BookingForm';


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
      <div><div>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
    <h4>{this.props.selectedLanguageKey === 'en' ? 'Booking' : 'Booking'}</h4>
    <div><FontAwesomeIcon icon={['fas', 'hotel']} alt={this.props.selectedLanguageKey === 'en' ? 'Hotel logo' : 'Hotell logo'} /></div>
      </div>
        <div class="card-deck">
          <div class="card col-md-8">
            <div class="card-body">
              <p class="card-text">Her kan du gjøre en forespørsel om booking av hele hotellet for en periode. Vi vil svare på din
              forespørsel så raskt som mulig.
          <p>Vi tilbyr for tiden kun utleie av hele hotellet til en døgnpris på XXXX kr. </p>
              </p>
            <BookingForm/>
            </div>
          </div>
          <div class="card col-md-4 payment-info">
            <div class="card-body">
              <p class="card-text">
                <span>OBS: Dette er kun eksempeltekst/forslag </span><br /><br />
          Når du har fått svar på din forespørsel ber vi om at du bekrefter bestillingen.<br />

                <h6>Betaling</h6>
                <span>Ved bestilling mer enn 30 dager før ankomst fakturerer vi 25% av beløpet som depositum. Dette skal betales innen en uke. Det resterende beløpet betales 30 dager før ankomst.
            <br /><br />
            Ved bestilling nærmere enn 30 dager til ankomst forfaller hele leiebeløpet til betaling ved bestilling.</span>

                <h6>Avbestilling</h6>
                <span>Ved avbestilling mer enn 30 dager før ankomst vil innbetalt depositum, minus ett avbestillingsgebyr på kr 300, bli tilbakebetalt.
            Ved avbestilling senere refunderes ikke det innbetalte beløpet.<br /><br />
            Vil tilbyr ingen avbestillingsforsikring og ber om at gjestene ordner dette med sitt eget forsikringsselskap.</span>
              </p>
            </div>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Booking);