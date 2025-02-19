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

const sections = document.querySelectorAll('section[id]') // Select all <section> elements that have an 'id' attribute

function scrollActive() {
    const scrollY = window.pageYOffset // Get the number of pixels the document is currently scrolled vertically

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight // Get the height of the current section
        const sectionTop = current.offsetTop - 50; // Get the top position of the section, adjusting by 50px
        sectionId = current.getAttribute('id') // Get the 'id' attribute of the current section

        // Check if the current scroll position is within the current section's range
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            // If the scroll position is within the section, add 'active-link' class to the corresponding navigation link
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            // Otherwise, remove the 'active-link' class
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
// Add an event listener for the 'scroll' event
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
const iconTheme = "bx-sun";

// Previously selected theme/icon
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Get current theme and icon
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () => themeButton.classList.contains("bx-moon") ? "bx-sun" : "bx-moon";

// Apply previously saved theme
if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
    themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"]("bx-moon");
}

// Add event listener only if themeButton exists
if (themeButton) {
    themeButton.addEventListener("click", () => {
        document.body.classList.toggle(darkTheme);
        themeButton.classList.toggle("bx-moon");
        themeButton.classList.toggle("bx-sun");

        // Save user preference
        localStorage.setItem("selected-theme", getCurrentTheme());
        localStorage.setItem("selected-icon", getCurrentIcon());
    });
}