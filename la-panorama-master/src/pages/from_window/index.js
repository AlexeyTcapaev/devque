import '../template.js'
import './index.scss'

let sobor = document.querySelector('.front')

sobor.addEventListener('mouseover', (e) => {
  sobor.addEventListener('mousemove', move)
})
sobor.addEventListener('mouseout', () => {
  sobor.removeEventListener('mousemove', move)
})

function move (e) {
  let height = sobor.clientHeight
  let width = sobor.clientWidth
  const rect = sobor.getBoundingClientRect()
  let pHeight = (e.clientY - rect.top) / height
  let pWidth = (e.clientX - rect.height) / width
  console.log('move', height, width, pHeight, pWidth)

  if (pHeight > 0.23 && pHeight < 0.58 && pWidth > 0.023 && pWidth < 0.26) {
    document.querySelector('.paragraph').classList.add('sobor-hover')
  } else {
    document.querySelector('.paragraph').classList.remove('sobor-hover')
  }
}
