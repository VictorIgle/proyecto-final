'use strictt'

const button = document.querySelector('.Header-btn')
const barNav = document.querySelector('.Header-nav')

/*Declaradas las constantes button y barNAv para que cuando se realice la funcion `click` en el button, el barNAV (barra de navegacion del menú) 
añada o quite (toggle) la clase isActive para hacer visible y ocultar el menu movil*/

button.addEventListener(`click` , ()=>{
    barNav.classList.toggle('isActive')
    
})


//

/* Constantes para acceder las secciones con la clase "isHidden" y declaracion de la constante oberver para que detecte la entrada de las secciones en el viewport */

const hiddenSections = document.querySelectorAll('.isHidden')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        entry.target.classList.toggle('isVisible', entry.isIntersecting)
               
    })
}

)



hiddenSections.forEach((eachSecction)=>observer.observe(eachSecction))

//

/* Constantes declaradas para que cuando se haga la funcion click en Projects-img
la imagen del lightbox Projects-imgs se haga visible y se pueda abrir y cerrar con el boton de Projects-btn
añadiendo y quitando (toogle) la clase isActive e indicandole con src la posicion de la propia imagen*/ 

const gridImg     = document.querySelector('.Projects-img')
const lightbox    = document.querySelector('.Projects-lightbox')
const lightboxBtn = lightbox.querySelector('.Projects-btn')
const lightboxImg = document.querySelector('.Projects-imgs')

gridImg.addEventListener(`click` , ()=>{
    lightbox.classList.add('isActive')
    lightboxImg.src = gridImg.src
})

lightboxBtn.addEventListener(`click` , ()=>
    lightbox.classList.toggle('isActive')
)


