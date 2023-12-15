import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = ({ images }: any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  };

  return (
    <Slider {...settings}>
      {images.map((image: any, index: any) => (
        <div key={index}>
          <img src={image} alt={`slide-${index}`} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;