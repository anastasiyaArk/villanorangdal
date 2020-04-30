// Dependencies
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';

// Actions
import {getLanguageSlug} from 'actions/LanguageActions';

// Stylesheets
import style from 'components/partials/Breadcrumbs.module.scss';

class Breadcrumbs extends Component {

  renderBreadcrumbJsonLd(breadcrumbs) {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@id": `https://www.villa.no/${this.props.getLanguageSlug(this.props.selectedLanguageKey)}`,
            "name": "Villa Norangdal"
          }
        }
      ]
    }
    breadcrumbs.forEach((breadcrumb, index) => {
      jsonLd.itemListElement.push({
        "@type": "ListItem",
        "position": index + 2,
        "item": {
          "@id": window.location.origin + breadcrumb.path,
          "name": breadcrumb.name
        }
      })
    })
    return (<Helmet>
      <script type="application/ld+json">{`${JSON.stringify(jsonLd)}`}</script>
    </Helmet>)
  }

  renderBreadcrumbListElements(breadcrumbs) {
    return breadcrumbs.map((breadcrumb, key) => {
      return key === breadcrumbs.length - 1
        ? (<li key={key}>
          <span>{breadcrumb.name}</span>
        </li>)
        : (<li key={key}>
          <Link to={breadcrumb.path} title={breadcrumb.name}>{breadcrumb.name}</Link>
        </li>);
    })
  }

  renderBreadcrumb() {
    return (<div className={style.breadcrumbs}>
      {this.renderBreadcrumbJsonLd(this.props.breadcrumbs)}
      <ul>
        <li>
          <Link to={`/${this.props.getLanguageSlug(this.props.selectedLanguageKey)}`} title='Villa Norangdal'>Villa Norangdal</Link>
        </li>
        {this.renderBreadcrumbListElements(this.props.breadcrumbs)}
      </ul>
    </div>)
  }

  render() {
    return this.renderBreadcrumb()
  }
}

Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.array
};

Breadcrumbs.defaultProps = {
  breadcrumbs: []
};

const mapStateToProps = state => ({selectedLanguageKey: state.selectedLanguageKey});

const mapDispatchToProps = {
  getLanguageSlug
};

export default connect(mapStateToProps, mapDispatchToProps)(Breadcrumbs);
