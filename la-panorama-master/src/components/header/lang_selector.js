import './lang_selector.scss'

let selectorClass = '.custom-select.lang'
document.addEventListener('DOMContentLoaded', function () {
  let current = window.location.href
  let indexPage = current.lastIndexOf('/')
  let lang = current.substring(indexPage - 3, indexPage + 1)
  let page = current.substring(indexPage + 1)
  if (lang === '/en/') {
    setLinks(true, page)
  } else {
    setLinks(false, page)
  }
  setSelectFunction()
})

function setLinks (isCurrentEnglish, page) {
  let selector = document.querySelector(selectorClass)
  let options = Array.prototype.slice.call(selector.querySelector('ul').childNodes, 0).map(el => el.querySelector('a'))
  options.forEach(el => {
    let dataLink = el.getAttribute('data-link')
    if (dataLink === '../' && !isCurrentEnglish) {
      el.href = '#'
    } else {
      if (isCurrentEnglish) {
        if (dataLink === '../') {
          el.href = '../' + page
        } else {
          el.href = '#'
        }
      } else {
        el.href = dataLink + page
      }
    }
  })
}
function setSelectFunction () {
  let selector = document.querySelector(selectorClass)
  selector.addEventListener('click', function () {
    selector.classList.toggle('open')
  })
}
