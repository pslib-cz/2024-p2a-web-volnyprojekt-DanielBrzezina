

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
//import Swiper and modules styles;
import '/src/styles/swiper.css';


const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
    loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar

});
