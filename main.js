/*alert ('to aqui') == ALERTA PARA TESTAR*/
//char (caracteres) = string => 'string'
//number = 1234
//boolean: true or false 

/*COMENTÁRIOS*/ 
/*Testar o elemento primeiro no HTML e CSS e depois passar para o JS. Ou seja, colocar e depois remover o elemento para testar no JS*/

/*Abre e fecha o menu*/ 
const nav = document.querySelector ('#header nav')
const toggle = document.querySelectorAll ('nav .toggle')

for (const element  of toggle) {
  element.addEventListener ('click', function () {
    nav.classList.toggle ('show')
  })
}

/*Link direcionados*/

const links = document.querySelectorAll ('nav ul li a')

for (const link of links) {
  link.addEventListener ('click', function () {
    nav.classList.remove ('show') /*.REMOVE (VALOR) = vai remover o menu*/
  })
}

/*Colocar a sombra do header quando der o scroll*/
const header = document.querySelector ('#header')
const navHeight = header.offsetHeight /*deslocamento da altura*/

function changeHeaderWhenScroll () {

  if (window.scrollY >= navHeight) {
    //scroll é maior que a altura do header
    header.classList.add ('scroll')
  } else {
    //menor que a altura do header
   header.classList.remove ('scroll')
  }
}


/* Testimonials carousel, slide swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1, /*Quantos slides devem aparecer primeiro*/
  pagination: {
    el: '.swiper-pagination' /*Procura onde está a classe que será usada*/
  },
  mousewheel: true, /*Ativa rodar o slide quando rodar o mouse*/
  keyborard: true, /*Ativa o slide ao apertar as setas do teclado*/
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
});

/* ScrollReveal: Mostrar elementos ao rolar a página*/
/*const scrollReveal = scrollReveal ({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal (
  `#home .image, #home .text, 
   #about .image, #about .text, 
   #services header, #services .card, 
   #testimonials header, #testimonials .testimonials
   #contact .text, #contact .links,
   footer .brand, footer .social`, 
   {interval: 100}
   )

  
 /*Botão voltar para o topo*/
 function backToTop () {
  const backToTopButton = document.querySelector ('.back-to-top')
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Menu ativo conforme a seção visivel na página*/
const sections = document.querySelectorAll ('main section [id]')
function activateMenuAtCurrentSection() { 

  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section .offsetHeight
    const sectionId = section.getAttribute ('id')

    const checkpointStart = checkpoint >= sectionTop 
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
      .querySelector ('nav ul li a[href*=home' + sectionId + ']')
      .classList.add ('active')
    } else {

    }
  }

}


/*When Scroll*/
window.addEventListener ('scroll', function () {
  changeHeaderWhenScroll ()
  backToTop ()
  activateMenuAtCurrentSection()
})
