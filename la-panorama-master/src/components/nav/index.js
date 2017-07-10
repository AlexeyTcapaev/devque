import './index.scss'

import $ from 'jquery'
import Sticky from 'sticky-js'

// eslint-disable-next-line
let nav = new Sticky('nav')
function addClickListners () {
  $('.menu-button').click(function () {
    $('.navigation-menu').addClass('opened')
  })
  $('.close-button').click(function () {
    $('.navigation-menu').removeClass('opened')
  })
}

let mq
if (matchMedia) {
  mq = window.matchMedia('(min-width: 1200px)')
  mq.addListener(relocateNav)
  relocateNav(mq)
}
function relocateNav (media) {
  if (!media.matches) {
    $('body').append($('nav .navigation-menu').remove())
  } else {
    $('nav').append($('.navigation-menu').remove())
  }
  addClickListners()
}
