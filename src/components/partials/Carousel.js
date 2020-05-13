import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

// Styles
import style from 'components/partials/Carousel.module.scss';



const images = [
  {
    original: '',
    thumbnail: '',
  },
  {
    original: '',
    thumbnail: '',
  },
  {
    original: '',
    thumbnail: '',
  },
];

export default class Carousel extends Component {
  render() {
    return (
      <div>
        <ImageGallery items={images} className = {style.ImageGallery}/>
      </div>
    )
  }
}
