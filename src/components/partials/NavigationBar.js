// Dependencies
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

// Assets
import { ReactComponent as NorangdalVillaLogo } from 'assets/images/logo.svg'

// Styles
import style from 'components/partials/NavigationBar.module.scss'

// Actions 
import { getLanguageSlug, updateMultilingualRoutes, updateSelectedLanguageKey } from '../../actions/LanguageActions';


class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.setLanguageSelectorListWrapperRef = this.setLanguageSelectorListWrapperRef.bind(this);
    }


    renderLanguageSelectorButton(availableLanguages, multilingualRoutes, selectedLanguageKey) {
        console.log(multilingualRoutes);
        const hasAvailableLanguages = availableLanguages && Object.keys(availableLanguages).length;
        const hasMultilingualRoutes = multilingualRoutes && Object.keys(multilingualRoutes).length;
        if (hasAvailableLanguages && hasMultilingualRoutes) {
            const languageElements = Object.keys(availableLanguages).map(languageKey => {
                const language = availableLanguages[languageKey];
                const isActive = languageKey === selectedLanguageKey;
                return (<li key={languageKey}>
                    <a href="#" title={language.name} className={isActive
                        ? style.activeLink
                        : ''}>{language.name}</a>
                </li>)
            });
            return (<ul>{languageElements}</ul>);
        } else {
            return '';
        }
    }

    setLanguageSelectorListWrapperRef(node) {
        this.languageSelectorListWrapperRef = node;
    }

    render() {
        return (
            <div className={style.navigationBar}>
                <Link to={`/home/`} aria-label='Link Villa Norangdal home page' title='Link Villa Noranngdal home page'>
                    <span className={style.appLogo}>
                        <NorangdalVillaLogo alt="Villa Norangdal logo" width="30" height="40" />
                    </span>
                </Link>
                <ul className={style.navigationBarLinks}>
                    <li>
                        <NavLink to={`/hotel/`} activeClassName={style.activeLink} title='Hotel'>
                            Hotellet
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/room/`} activeClassName={style.activeLink} title='Room'>
                            Rom
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/activities/`} activeClassName={style.activeLink} title='Activities'>
                            Aktiviteter
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/gallery/`} activeClassName={style.activeLink} title='Gallery'>
                            Galleri
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/booking/`} activeClassName={style.activeLink} title='Booking'>
                            Booking
                        </NavLink>
                    </li>
                </ul>
                <div className={style.languageSelectorListContainer}>
                    <div ref={this.setLanguageSelectorListWrapperRef} className={`${style.languageSelectorList}`}>
                        {this.renderLanguageSelectorButton(this.props.availableLanguages, this.props.multilingualRoutes, this.props.selectedLanguageKey)}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    availableLanguages: state.availableLanguages,
    multilingualRoutes: state.multilingualRoutes,
    selectedLanguageKey: state.selectedLanguageKey
});

const mapDispatchToProps = {
    getLanguageSlug
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);




