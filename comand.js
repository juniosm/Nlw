//menu//

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//change Header-shadow(Sombra no header ao descer)//

const header = document.querySelector('#header')
const navheight = header.offsetHeight

function changeHeader() {
  if (window.scrollY >= navheight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

// Swiper carousel Slide//

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

//ScrollReaveal//

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #about .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .swiper-wrapper,
  #contact .text, #contact .contacts,
  footer .brand, footer .social`,

  { interval: 100 }
)

//back to home//

const backToHomeButton = document.querySelector('.back-home')

function backToHome() {
  if (window.scrollY >= 560) {
    backToHomeButton.classList.add('show')
  } else {
    backToHomeButton.classList.remove('show')
  }
}

const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStarted = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStarted && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

window.addEventListener('scroll', function () {
  changeHeader()
  backToHome()
  activateMenuAtCurrentSection()
})
