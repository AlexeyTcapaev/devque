import '../template.js'
import './index.scss'
import '../../components/menu/index.js'

import 'slick-carousel/slick/slick.scss'
import 'slick-carousel/slick/slick-theme.scss'

import $ from 'jquery'
import 'slick-carousel'

$('.slick-menu').slick({
  autoplay: false,
  dots: false,
  arrows: false,
  infinite: false
})
var categories = []
var links = []
function checkStatus () {
  // fix bug when page url don't changed in current moment

  var current = window.location.href
  var hash = current.indexOf('#')
  if (hash === -1) return
  var category = current.slice(hash)
  var index = categories.indexOf(category)
  $('.slick-menu').slick('slickGoTo', index)
  links.forEach(el => $(el).removeClass('selected'))
  $(links[index]).addClass('selected')
}
$('.category-navigation a').each(function (index) {
  categories[index] = $(this).attr('href')
  links[index] = this
})
window.addEventListener('hashchange', function () {
  checkStatus()
})
checkStatus()
