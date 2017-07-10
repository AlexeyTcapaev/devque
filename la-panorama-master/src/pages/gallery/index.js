import '../template.js'
import './index.scss'
import '../../components/gallery/index.js'
import $ from 'jquery'

let albums = []
$('.observe a').each(function (index) {
  albums[index] = $(this).attr('href')
})

function checkStatus () {
  let current = window.location.href
  let hash = current.indexOf('#')
  if (hash === -1) mainView()
  else {
    let name = current.slice(hash)
    let index = albums.indexOf(name)
    view(index)
  }
}
let show = 'displaying'
function mainView () {
  if ($('.observe').hasClass(show)) return
  $('.gallery > div').removeClass(show)
  $('.observe').addClass(show)
}

function view (index) {
  let album = $('.gallery > div').eq(index)
  if (album.hasClass(show)) return
  $('.observe').removeClass(show)
  $('.gallery > div').removeClass(show)
  album.addClass(show)
}

window.addEventListener('hashchange', function () {
  checkStatus()
})
checkStatus()
