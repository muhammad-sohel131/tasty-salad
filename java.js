// Show Menu ======================
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    menu = document.getElementById(navId)
    //validate that variable exist
    if(toggle && menu){
        toggle.addEventListener('click', ()=>{
            menu.classList.toggle('show-menu')
        })
    }
}
showMenu('nav_toggle','nav_menu')

// Remove Menu =====================
const navLinks = document.querySelectorAll('.nav_link')
function linkAction(){
    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show-menu')
}
navLinks.forEach(n=> n.addEventListener('click', linkAction))

// scroll active link
const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop-50
        sectionId = current.getAttribute('id')
       
        if(scrollY > sectionTop && scrollY <= (sectionTop + sectionHeight)){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
            
        }else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
            
        }
    })
    
}
window.addEventListener('scroll', scrollActive)


// Scroll Header

function scrollHeader(){
    const header = document.querySelector('header')
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')

}
window.addEventListener('scroll', scrollHeader)

// scroll Top
function scrollTop(){
    const scrollTop = document.getElementById('scrollTop')
    if(this.scrollY >= 500) scrollTop.classList.add('scroll-top-show'); else scrollTop.classList.remove('scroll-top-show')
}
window.addEventListener('scroll', scrollTop)

//Dark / Light Theme
const themeButton = document.getElementById('change_theme')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

if(selectedTheme){
    document.body.classList[selectedTheme==='dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', ()=> {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


// Scroll Reveal Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});
sr.reveal(`.home_data, .home_img, .about_data, .about_img, 
            .services_content, .menu_content, .app_data, .app_img,
            .contact_data, .contact_button, .footer_container`,{
                interval: 200
            })