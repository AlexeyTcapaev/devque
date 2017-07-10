import 'material-photo-gallery/dist/css/material-photo-gallery.css'
import './index.scss'
import MaterialPhotoGallery from './material'
var elements = Array.prototype.slice.call(document.querySelectorAll('.m-p-g'))

document.addEventListener('DOMContentLoaded', function () {
  elements.forEach(elem => {
    // eslint-disable-next-line
        var gallery = new MaterialPhotoGallery(elem);
  })
})
