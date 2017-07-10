import './index.scss'

let button = document.querySelector('.top_news button')

button.addEventListener('click', function () {
  button.parentNode.classList.add('hidden')
})
