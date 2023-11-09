const menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item) =>
    item.classList.remove('active'))

    this.classList.add('active')
}

menuItem.forEach((item)=>
 item.addEventListener('click', selectLink)

)

const btnExp = document.querySelector('.toggle-menu')
const menuSide = document.querySelector('.container-menu')

btnExp.addEventListener('click', function() {
    menuSide.classList.toggle('expandir') 
});

window.sr = ScrollReveal({ reset: true});

ScrollReveal().reveal('.area-1', {
    delay: 700,
  
 
             
});

ScrollReveal().reveal('.area-2', {
    delay: 800,
    rotate: {
        x: 0,
        y: 100,
        z: 0,
    }
             
});
