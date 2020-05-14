// Dependencies
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


// Assets
import NorangdalVillaLogo from 'assets/images/logo.png';
import { ReactComponent as MenuIcon } from 'assets/images/menuIcon.svg';
import GlobalFonts from '../../fonts/fonts';


// Styles
import style from 'components/partials/NavigationBar.module.scss'

// Actions 
import { getLanguageSlug } from '../../actions/LanguageActions';




class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSidebar: false,
            hidingSidebar: false,
            showLanguageSelectorList: false
        };
        this.setLanguageSelectorListWrapperRef = this.setLanguageSelectorListWrapperRef.bind(this);
        this.setSidebarWrapperRef = this.setSidebarWrapperRef.bind(this);
        this.handleClickOutsideSidebar = this.handleClickOutsideSidebar.bind(this);
        this.handleClickOutsideLanguageSelectorList = this.handleClickOutsideLanguageSelectorList.bind(this);
    }


    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutsideSidebar);
        document.addEventListener('mousedown', this.handleClickOutsideLanguageSelectorList);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutsideSidebar);
        document.removeEventListener('mousedown', this.handleClickOutsideLanguageSelectorList);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            if (this.state.showSidebar) {
                this.hideSidebar();
            }
        }
    }

    handleShowSidebarClick() {
        this.setState({ showSidebar: true });
    }

    handleClickOutsideSidebar(event) {
        if (this.sidebarWrapperRef && !this.sidebarWrapperRef.contains(event.target) && this.state.showSidebar) {
            this.hideSidebar();
        }
    }

    handleClickOutsideLanguageSelectorList(event) {
        if (this.languageSelectorListWrapperRef && !this.languageSelectorListWrapperRef.contains(event.target) && this.state.showLanguageSelectorList) {
            this.hideLanguageSelectorList();
        }
    }

    hideSidebar() {
        this.setState({ hidingSidebar: true });
        setTimeout(function () {
            this.setState({ showSidebar: false, hidingSidebar: false });
        }.bind(this), 225);
    }

    setSidebarWrapperRef(node) {
        this.sidebarWrapperRef = node;
    }

    renderLanguageSelectorButton(availableLanguages, multilingualRoutes, selectedLanguageKey) {
        const hasAvailableLanguages = availableLanguages && Object.keys(availableLanguages).length;
        const hasMultilingualRoutes = multilingualRoutes && Object.keys(multilingualRoutes).length;
        if (hasAvailableLanguages && hasMultilingualRoutes) {
            const languageElements = Object.keys(availableLanguages).map(languageKey => {
                const language = availableLanguages[languageKey];
                const isActive = languageKey === selectedLanguageKey;
                const path = multilingualRoutes[languageKey].path;
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

    setLanguageSelectorListWrapperRef(node) {
        this.languageSelectorListWrapperRef = node;
    }

    render() {

        return (
            <div className={style.navigationBar}>
                <GlobalFonts/>
                <Link to={`/${this.props.getLanguageSlug(this.props.selectedLanguageKey)}`} className={style.homeLink} aria-label='Link Villa Norangdal home page' title='Link Villa Noranngdal home page'>
                    <img src={NorangdalVillaLogo} alt="Villa Norangdal logo" />
                </Link>
                <span onClick={() => this.handleShowSidebarClick()} className={style.menuButton}>
                    <MenuIcon className={style.menuIcon} />
                </span>
                <div className={`${style.sidebarOverlay} ${this.state.showSidebar
                    ? style.active
                    : ''} ${this.state.hidingSidebar
                        ? style.hidingSidebar
                        : ''} `}>
                    <div ref={this.setSidebarWrapperRef} className={style.sidebarContent}>
                        <div className={style.sidebarContentHeader}>
                            <ul className={style.sidebarContent}>
                                <li>
                                    <NavLink to={`/${this.props.getLanguageSlug(this.props.selectedLanguageKey)}hotel/`} activeClassName={style.activeLink} title={this.props.selectedLanguageKey === 'en' ? 'Hotellet' : 'Hotellet'}>
                                        {this.props.selectedLanguageKey === 'en' ? 'Hotel' : 'Hotellet'}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={`/${this.props.getLanguageSlug(this.props.selectedLanguageKey)}activities/`} activeClassName={style.activeLink} title='Activities'>
                                        {this.props.selectedLanguageKey === 'en' ? 'Activities' : 'Aktiviteter'}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={`/${this.props.getLanguageSlug(this.props.selectedLanguageKey)}gallery/`} activeClassName={style.activeLink} title='Gallery'>
                                        {this.props.selectedLanguageKey === 'en' ? 'Gallery' : 'Galleri'}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={`/${this.props.getLanguageSlug(this.props.selectedLanguageKey)}booking/`} activeClassName={style.activeLink} title='Booking'>
                                        {this.props.selectedLanguageKey === 'en' ? 'Booking' : 'Booking'}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={`/${this.props.getLanguageSlug(this.props.selectedLanguageKey)}hellesylt/`} activeClassName={style.activeLink} title='Hellesylt Boutique Bar'>
                                        {this.props.selectedLanguageKey === 'en' ? 'Hellesylt Boutique & Bar' : 'Hellesylt Boutique & Bar'}
                                    </NavLink>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className={style.navigationBar}>
                    <ul className={style.navigationBarLinks}>
                        <li>
                            <NavLink to={`/${this.props.getLanguageSlug(this.props.selectedLanguageKey)}hotel/`} activeClassName={style.activeLink} title={this.props.selectedLanguageKey === 'en' ? 'Hotellet' : 'Hotellet'}>
                                {this.props.selectedLanguageKey === 'en' ? 'Hotel' : 'Hotellet'}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`/${this.props.getLanguageSlug(this.props.selectedLanguageKey)}activities/`} activeClassName={style.activeLink} title='Activities'>
                                {this.props.selectedLanguageKey === 'en' ? 'Activities' : 'Aktiviteter'}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`/${this.props.getLanguageSlug(this.props.selectedLanguageKey)}gallery/`} activeClassName={style.activeLink} title='Gallery'>
                                {this.props.selectedLanguageKey === 'en' ? 'Gallery' : 'Galleri'}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`/${this.props.getLanguageSlug(this.props.selectedLanguageKey)}booking/`} activeClassName={style.activeLink} title='Booking'>
                                {this.props.selectedLanguageKey === 'en' ? 'Booking' : 'Booking'}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`/${this.props.getLanguageSlug(this.props.selectedLanguageKey)}hellesylt/`} activeClassName={style.activeLink} title='Hellesylt Boutique Bar'>
                                {this.props.selectedLanguageKey === 'en' ? 'Hellesylt Boutique & Bar' : 'Hellesylt Boutique & Bar'}
                            </NavLink>
                        </li>
                    </ul>

                </div>
                <div ref={this.setLanguageSelectorListWrapperRef} className={`${style.languageSelectorListContainer}`}>
                    {this.renderLanguageSelectorButton(this.props.availableLanguages, this.props.multilingualRoutes, this.props.selectedLanguageKey)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    availableLanguages: state.availableLanguages,
    multilingualRoutes: state.multilingualRoutes,
    selectedLanguageKey: state.selectedLanguageKey,
    location: state.router.location
});

const mapDispatchToProps = {
    getLanguageSlug
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);




