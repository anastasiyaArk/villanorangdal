// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Stylesheets
import style from 'components/partials/SocialMediaLinks.module.scss';

class SocialMediaLinks extends Component {

  render() {
    return (
      <div className={style.socialMediaLinks}>
        <a href='https://www.facebook.com/norangdal/' title='Link to Facebook page' aria-label='Link to Facebook page' target='_blank' rel="noopener noreferrer" >
          <FontAwesomeIcon icon={['fab', 'facebook-f']} alt='Facebook logo' />
        </a>
        <a href='href="https://instagram.com/villanorangdal' title='Link to Instagram page' aria-label='Link to Instagram page' target='_blank' rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'instagram']} alt='Instagram logo' />
        </a>
        <a href='https://www.tripadvisor.com/Hotel_Review-g1509004-d1501470-Reviews-Villa_Norangdal-Hellesylt_Stranda_More_og_Romsdal_Western_Norway.html' title='Link to Tripadvisor' aria-label='Link to Youtube channel' target='_blank' rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'tripadvisor']} alt='Tripadvisor logo' />
        </a>
      </div>)
  }
}


export default SocialMediaLinks;
