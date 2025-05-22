import '../styles/style.css'
import './hamburger.js'
import './swiper.js'
import '@fortawesome/fontawesome-free/css/all.min.css';



import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';

import myGallery from 'lightgallery';

// Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
myGallery(document.querySelector(".gallery"), {
  plugins: [lgZoom, lgThumbnail],
  selector: '.picturelink', thumbnail: true,

});
