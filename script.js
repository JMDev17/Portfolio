const menuItem = document.querySelectorAll('.nav-links')

function selectLink() {
    menuItem.forEach((item) =>
        item.classList.remove('active'))

    this.classList.add('active')
}

menuItem.forEach((item) =>
    item.addEventListener('click', selectLink)

)

const btnExp = document.querySelector('.toggle-menu')
const menuSide = document.querySelector('.container-menu')

btnExp.addEventListener('click', function () {
    menuSide.classList.toggle('expandir')
});

window.sr = ScrollReveal({ reset: true });

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

let sec = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('.nav-links')



window.onscroll = () => {
    sec.forEach(section => {
        let top = window.scrollY + 280;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight + 300;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.nav-links[href*=' + id + ']').classList.add('active');

            })
        }
    })
}