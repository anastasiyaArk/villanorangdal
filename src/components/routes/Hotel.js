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
import hotelImage1 from '../../assets/images/room41.jpg';


// Styles
import style from 'components/routes/Hotel.module.scss'

class Hotel extends Component {
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
                en: 'Hotel | Villa Norangdal',
                no: 'Hotellet | Villa Norangdal'
            },
            heading: {
                en: 'Hotel',
                no: 'Hotellet'
            },
            description: {
                en: 'Villa Norangdal',
                no: 'Villa Norangdal'
            }
        }

        let breadcrumbs = [
            {
                name: listGalleryPage.heading[this.props.selectedLanguageKey],
                path: `/${this.props.getLanguageSlug(this.props.selectedLanguageKey)}hotel/`
            }
        ];
        return (
            <div>
                <div className={style.container}>
                    <Breadcrumbs breadcrumbs={breadcrumbs} />
                    <div className={style.header}>
                        <h3>Villa Norangdal</h3>
                        <div><FontAwesomeIcon icon={['fas', 'bed']} alt={this.props.selectedLanguageKey === 'en' ? 'Hotel logo' : 'Hotell logo'} /></div>
                        <p>{this.props.selectedLanguageKey === 'en' ? 'Villa Norangdal is a Boutique Hotel with unique interior and exciting history...'
                            : 'Villa Norangdal er et Boutique Hotell med unik innredning og spennende historie...'}</p>
                    </div>
                    <Image src={hotelImage1} className={style.hotelImage} />
                    <div className={style.mainText}>
                        <p>{this.props.selectedLanguageKey === 'en' ? 'Villa Norangdal was built in 1885, to accomodate tourists who came to explore the mountains. Amongst them ' +
                            'the british mountain pioneer William Cecil Slingsby.' : 'Tar man turen gjennom huset vil man få med seg designhistorien fra Jugendstilen i 1900 via ' +
                            'Art Deco i 1920/1930 til Scandinavian Design i 1950 og Space Age i 1960'}</p>
                        <p>{this.props.selectedLanguageKey === 'en' ? 'Another famous guest during the first years was Queen Wilhelmina of the Netherlands. Thousands of cruise passengers stopped for refreshments here during the 1920s and 1930s. As a result of new fire regulations for hotels, and the demand for modern bathroom facilities, the hotel was closed in 1965.' : 'Her er internasjonale designikon blandet med klassikere fra det sunnmørske møbeleventyret. ' +
                            'Slik tar vi opp både den internasjonale og den lokale tråden fra historien til ' +
                            'Villa Norangdal som spinner via kongelige gjester, britiske fjellpionerer, Ålesundsdamer på husmorferie, rallere og levemenn. Bygget med 40 kroner i støtte fra DNT i 1885, stengt i 1965 og ' +
                            'gjenåpnet i 2007 som distriktets eldste trehotell.'}</p>
                        <p>{this.props.selectedLanguageKey === 'en' ? 'In 2003-2007 Villa Norangdal had a total “make over” and was re-opened as a Boutique Hotel focused on design history. In May 2010 Villa Norangdal was rewarded the hallmark of Norwegian Heritage: “Olavsrosa”, the St Olav’s Rose. Certified Eco Lighthouse since 2014.' : 'Fra toppen av Slogen, surfing ved Stadt, kunstutstilling på Flø eller skiheisen på ' +
                            'Strandafjellet samles man til deilig mat, peiskos og gode senger med alpin utsikt i Norangdalen.'}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Hotel);