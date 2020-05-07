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
import hellesylt from '../../assets/images/hellesylt.jpg';


// Styles
import style from 'components/routes/HellesyltBar.module.scss'

class HellesyltBar extends Component {
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
                en: 'Hellesylt Boutique & Bar | Villa Norangdal',
                no: 'Hellesylt Boutique & Bar | Villa Norangdal'
            },
            heading: {
                en: 'Hellesylt Boutique & Bar',
                no: 'Hellesylt Boutique & Bar'
            },
            description: {
                en: 'Hellesylt Boutique & Bar',
                no: 'Hellesylt Boutique & Bar'
            }
        }

        let breadcrumbs = [
            {
                name: listGalleryPage.heading[this.props.selectedLanguageKey],
                path: `/${this.props.getLanguageSlug(this.props.selectedLanguageKey)}hellesylt/`
            }
        ];
        return (
            <div>
                <div className={style.container}>
                    <Breadcrumbs breadcrumbs={breadcrumbs} />
                    <div className={style.header}>
                        <h3>Hellesylt Boutique & Bar</h3>
                        <div><FontAwesomeIcon icon={['fas', 'coffee']} alt={this.props.selectedLanguageKey === 'en' ? 'Hellesylt Boutique & Bar' : 'Hellesylt Boutique & Bar'} /></div>
                        <p>{this.props.selectedLanguageKey === 'en' ? 'Hellesylt Boutique & Bar is a bar and cafe where you can buy Geiranger pastry, homemade cakes and chocolate, local wine and beer'
                            : 'Hellesylt Boutique & Bar er ein kaffebar, som sel bakst frå Geiranger, heimelaga kaker og sjokolade, lokalt øl og vin'}</p>
                    </div>
                    <Image src={hellesylt} className={style.hellesyltImage} />
                    <div className={style.mainText}>
                        <p>{this.props.selectedLanguageKey === 'en' ? 'Add some text' : 'Legg til tekst'}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HellesyltBar);