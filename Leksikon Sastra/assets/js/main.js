// /=============== CHANGE BACKGROUND HEADER ===============/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    //When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header')
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// /=============== SHOW SCROLL UP & down ===============/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// /=============== SCROLL SECTIONS ACTIVE LINK ===============/
const sections = document.querySelectorAll('section[id]')

const scrollActive= () =>{
    const scrollY = window.pageYOffest

sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 58,
    sectionId = current.getAttribute('id'),
    sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId +']')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link')
    }else{
        sectionsClass.classList.remove('active-link')
    }
})
}


// /=============== SCROLL REVEAL ANIMATION ===============/
const sr = scrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true //Animation repeat
})

sr.reveal('.home_data, .productsdata, .stepscontent, .footer_container')
sr.reveal('.home__tag', {origin: 'bottom'})
sr.reveal('.products__card', {interval: 100})
sr.reveal('.about_img, .testimonial_img', {origin: 'right'})
sr.reveal('.about_data, .testimonial_data', {origin: 'left'})