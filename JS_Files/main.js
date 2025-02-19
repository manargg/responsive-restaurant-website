const navMenu = document.getElementById("nav_menu");
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelectorAll(".nav_link");

//Toggle the menu on hamburger icon click
navToggle.addEventListener("click", function(){
    navMenu.classList.toggle("show-menu");
});

//Close the menu when any link is clicked
navLinks.forEach(link =>{
    link.addEventListener("click", function(){
        navMenu.classList.remove("show-menu");
    });
});

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*========================================*/ 

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset; 

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50; 
        let sectionId = current.getAttribute('id'); 

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
           k
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive);


/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    
    // When the scroll position is higher than 560px, show the button
    if (window.scrollY >= 560) {
        scrollTop.classList.add('show-scroll'); 
    } else {
        scrollTop.classList.remove('show-scroll');
    }
}
// Listen for the scroll event
window.addEventListener('scroll', scrollTop);



/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1500,
    reset: true
});

sr.reveal(`.home_data, .home_img,
            .about_data, .about_img,
            .services_content, .menu_content,
            .app_data, .app_img,
            .contact_data, .contact_button,
            .footer_content`, {
    interval: 200
})

/*==================== DARK LIGHT THEME ====================*/ 

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconMoon = "bx-moon";
const iconSun = "bx-sun";

//Retrieve the previously selected theme from localStorage
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");


if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
    themeButton.classList[selectedIcon === "bx-sun" ? "add" : "remove"](iconSun);
    themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](iconMoon);
}

themeButton.addEventListener("click", function () {
    document.body.classList.toggle(darkTheme);
    if (document.body.classList.contains(darkTheme)) {
        themeButton.classList.replace(iconMoon, iconSun);
        localStorage.setItem("selected-theme", "dark");
        localStorage.setItem("selected-icon", "bx-sun");
    } else {
        themeButton.classList.replace(iconSun, iconMoon);
        localStorage.setItem("selected-theme", "light");
        localStorage.setItem("selected-icon", "bx-moon");
    }
});

   