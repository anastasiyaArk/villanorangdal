// Dependencies
import React, { Component } from 'react';
import {connect} from 'react-redux';

// Actions
import {getLanguageSlug, updateMultilingualRoutes, updateSelectedLanguageKey} from 'actions/LanguageActions';

// Components
import Carousel from '../partials/Carousel';

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
            <div class="card col-md-6">
              <Carousel />
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

const mapStateToProps = state => ({selectedLanguageKey: state.selectedLanguageKey});

const mapDispatchToProps = {
  getLanguageSlug,
  updateMultilingualRoutes,
  updateSelectedLanguageKey
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
