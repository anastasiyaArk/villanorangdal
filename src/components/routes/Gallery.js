// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { getLanguageSlug, updateMultilingualRoutes, updateSelectedLanguageKey } from 'actions/LanguageActions';

// Components
import Breadcrumbs from 'components/partials/Breadcrumbs';
import Carousel from 'components/partials/Carousel';


class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: null
        };
    }

    initLanguage(){
        this.props.updateMultilingualRoutes('gallery/');
        const selectedLanguageKey = this.props.match && this.props.match.params && this.props.match.params.selectedLanguage ? this.props.match.params.selectedLanguage : 'no';
        if (selectedLanguageKey !== this.props.selectedLanguageKey){
          this.props.updateSelectedLanguageKey(selectedLanguageKey);
        }
      }
    
      componentDidMount() {
        this.initLanguage();
      }

    render() {

        const listGalleryPage = {
            title: {
                en: 'Gallery | Villa Norangdal',
                no: 'Galleri | Villa Norangdal'
            },
            heading: {
                en: 'Gallery',
                no: 'Galleri'
            },
            description: {
                en: 'Picture of Villa Norangdal',
                no: 'Villa Norangdal bilder'
            }
        }

        let breadcrumbs = [
            {
                name: listGalleryPage.heading[this.props.selectedLanguageKey],
                path: `/${this.props.getLanguageSlug(this.props.selectedLanguageKey)}gallery/`
            }
        ];
        return (
            <div>
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                <Carousel />
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

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);