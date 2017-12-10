jQuery(document).ready(function () {
    let sobor = document.querySelector('.front')
    
    let mobile = false
    let touched = false
    if (window.ontouchstart) {
      mobile = true
      sobor.addEventListener('touchstart', move)
    }
    document.querySelector('.front').addEventListener("mouseover", function( event ) { 
        document.querySelector('.front').addEventListener('mousemove', move)
    })
    sobor.addEventListener('mouseout', () => {
      sobor.removeEventListener('mousemove', move)
    })
    const hoverClass = 'sobor-hover'
    const elementClass = 'paragraph'
    function hover () {
      document.querySelector('.' + elementClass).classList.add(hoverClass)
    }
    function unhover () {
      document.querySelector('.' + elementClass).classList.remove(hoverClass)
    }
    function move (e) {
      let height = sobor.clientHeight
      let width = sobor.clientWidth
      const rect = sobor.getBoundingClientRect()
      let pHeight = (e.clientY - rect.top) / height
      let pWidth = (e.clientX - rect.height) / width
      console.log('move', height, width, pHeight, pWidth)
    
      if (pHeight > 0.23 && pHeight < 0.58 && pWidth > 0.023 && pWidth < 0.26) {
        if (mobile) {
          if (!touched) {
            hover()
            touched = true
          } else {
            unhover()
            touched = false
          }
        } else {
          hover()
        }
      } else {
        unhover()
      }
    }
    })