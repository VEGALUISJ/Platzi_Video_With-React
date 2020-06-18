import React from 'react';
import '../assets/styles/components/Carouselitem.scss';
//import plus from '../assets/icons8-mas-64.png';
//import play from '../assets/icons8-play-64.png';

const CarouselItem = () => (
  <div className='carousel-item'>
    <img
      className='carousel-item__img'
      src='https://images.pexels.com/photos/3378994/pexels-photo-3378994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      alt='pelicula'
    />
    <div className='carousel-item__details'>
      <div>
        <img src='https://img.icons8.com/flat_round/64/000000/play--v1.png' className='play__button' alt='play' />
        <img src='https://img.icons8.com/flat_round/64/000000/plus.png' className='mas__button' alt='mas' />
      </div>
      <p className='carousel-item__details--title'>Titulo descriptivo</p>
      <p className='carousel-item__details--subtitle'>2019 16+ 114 minutos</p>
    </div>
  </div>
);

export default CarouselItem;
