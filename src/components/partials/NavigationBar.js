// Dependencies
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';


// Assets
import { ReactComponent as NorangdalVillaLogo } from 'assets/images/logo.svg'

// Styles
import style from 'components/partials/NavigationBar.module.scss'

// Actions // Actions
import { getLanguageSlug } from 'actions/LanguageActions';


class NavigationBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    renderLanguageSelectorButton(availableLanguages, selectedLanguageKey) {
        const hasAvailableLanguages = availableLanguages && Object.keys(availableLanguages).length;
        if (hasAvailableLanguages) {
          const selectedLanguage = availableLanguages[selectedLanguageKey];
          return (
            <span className={style.languageSelectorButton}>
              <span className={style.languageName}>{selectedLanguage && selectedLanguage.name ? selectedLanguage.name : ''}</span>
            </span>);
        } else
          return '';
        }

        renderLanguageSelectorList(availableLanguages, multilingualRoutes, selectedLanguageKey) {
            const hasAvailableLanguages = availableLanguages && Object.keys(availableLanguages).length;
            const hasMultilingualRoutes = multilingualRoutes && Object.keys(multilingualRoutes).length;
            if (hasAvailableLanguages && hasMultilingualRoutes) {
              const languageElements = Object.keys(availableLanguages).map(languageKey => {
                const language = availableLanguages[languageKey];
                const path = multilingualRoutes[languageKey].path;
                const isActive = languageKey === selectedLanguageKey;
                return (<li key={languageKey}>
                  <a href={path} title={language.name} className={isActive
                      ? style.activeLink
                      : ''}>{language.name}</a>
                </li>)
              });
              return (<ul>{languageElements}</ul>);
            } else {
              return '';
            }
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
                    <div ref={this.setLanguageSelectorListWrapperRef} className={`${style.languageSelectorList} ${this.state.showLanguageSelectorList
                        ? style.active
                        : ''}`}>
                        {this.renderLanguageSelectorList(this.props.availableLanguages, this.props.multilingualRoutes, this.props.selectedLanguageKey)}
                    </div>
                </div>
            </div>
        )
    }
}

export default NavigationBar




