import '../template.js'
import './index.scss'

import 'slick-carousel/slick/slick.scss'
import 'slick-carousel/slick/slick-theme.scss'

import $ from 'jquery'
import 'slick-carousel'

$('.carousel').slick({
  autoplay: true,
  dots: true,
  arrows: false
})

