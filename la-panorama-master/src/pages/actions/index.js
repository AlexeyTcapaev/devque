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

$('.menu-button').click(function () {
  if ($(this).hasClass('pressed')) {
    $(this).removeClass('pressed')
    $('.menu').removeClass('opened')
  } else {
    $(this).addClass('pressed')
    $('.menu').addClass('opened')
  }
})
