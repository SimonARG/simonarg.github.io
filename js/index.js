// Get index subtitles and their replacements from DOM
const inlineWordContainer = document.querySelectorAll(".inline-word-container");
const inlineWordChildren = document.querySelectorAll(".inline-word > div");

// Replace the index subtitles on hover
inlineWordContainer.forEach(function(container) {
    container.addEventListener("mouseenter", function() {
        container.classList.add("inline-word-container--active");

        inlineWordChildren.forEach(function(children) {
            setTimeout(function() {
                container.classList.remove("inline-word-container--active");
            }, 1600);
        });
    });
});

// Get index japanese subtitle and its replacement from DOM
const inlineWordContainerJp = document.querySelectorAll(".inline-word-container");
const inlineWordChildrenJp = document.querySelectorAll(".inline-word-jp > div");

// Replace the japanese index subtitle on hover
inlineWordContainerJp.forEach(function(container) {
    container.addEventListener("mouseenter", function() {
        container.classList.add("inline-word-container--active");

        inlineWordChildrenJp.forEach(function(children) {
            setTimeout(function() {
                container.classList.remove("inline-word-container--active");
            }, 1600);
        });
    });
});

// Get project popups
const blog = document.querySelector(".blog-pu");
const portfolio = document.querySelector(".portfolio-pu");
const ambient = document.querySelector(".ambient-pu");
const mixtorrents = document.querySelector(".mixtorrents-pu");

// Get projects buttons
const btnBlog = document.querySelectorAll(".blog-btn");
const btnPortfolio = document.querySelectorAll(".portfolio-btn");
const btnAmbient = document.querySelectorAll(".ambient-btn");
const btnMixtorrents = document.querySelectorAll(".mixtorrents-btn");

// Get project videos
const portfolioVid = document.querySelector(".portfolio-vid");
const blogVid = document.querySelector(".blog-vid");
const ambientVid = document.querySelector(".ambient-vid");
const mixtorrentsVid = document.querySelector(".mixtorrents-vid");

// Get socials and about popups and buttons
const socials = document.querySelector(".socials-container");
const socialsOpen = document.querySelector(".left-bar-socials");
const socialsClose = document.querySelector(".socials-closer");
const about = document.querySelector(".about-container");
const aboutOpen = document.querySelector(".left-bar-about");
const aboutClose = document.querySelector(".about-closer");

// Set initial socials and about popups statuses
let socialsShow = false;
let aboutShow = false;

// For the open and close buttons, open or close the project popup
btnBlog.forEach(btn => {
    btn.addEventListener("click", () => {
        blog.classList.toggle("blog-pu--active");
        if (blogVid.paused) {
            blogVid.play();
        } else {
            blogVid.pause();
        }
    });
});

btnPortfolio.forEach(btn => {
    btn.addEventListener("click", () => {
        portfolio.classList.toggle("portfolio-pu--active");
        if (portfolioVid.paused) {
            portfolioVid.play();
        } else {
            portfolioVid.pause();
        }
    });
});

btnAmbient.forEach(btn => {
    btn.addEventListener("click", () => {
        ambient.classList.toggle("ambient-pu--active");
        if (ambientVid.paused) {
            ambientVid.play();
        } else {
            ambientVid.pause();
        }
    });
});

btnMixtorrents.forEach(btn => {
    btn.addEventListener("click", () => {
        mixtorrents.classList.toggle("mixtorrents-pu--active");
        if (mixtorrentsVid.paused) {
            mixtorrentsVid.play();
        } else {
            mixtorrentsVid.pause();
        }
    });
});

// Open about popup
aboutOpen.addEventListener("click", () => {
    if (socialsShow == true) {
        socials.classList.remove("socials-pu--active");
        socialsShow = false;
    }

    if (aboutShow == false) {
        about.classList.add("about-pu--active");
        aboutShow = true;
    } else {
        about.classList.remove("about-pu--active");
        aboutShow = false;
    }
});

// Open socials popup
socialsOpen.addEventListener("click", () => {
    if (aboutShow == true) {
        about.classList.remove("about-pu--active");
        aboutShow = false;
    }

    if (socialsShow == false) {
        socials.classList.add("socials-pu--active");
        socialsShow = true;
    } else {
        socials.classList.remove("socials-pu--active");
        socialsShow = false;
    }
});

// Close about popup
aboutClose.addEventListener("click", () => {
    about.classList.remove("about-pu--active");
    aboutShow = false;
});

// Close socials popup
socialsClose.addEventListener("click", () => {
    socials.classList.remove("socials-pu--active");
    socialsShow = false;
});

// Close any open popup on click of the window
window.addEventListener('click', function (event) {
    if (!(event.target.closest(".socials-container")) && !(event.target.closest(".left-bar-socials")) && !(event.target.closest(".socials-closer"))) {
        if (socials.classList.contains("socials-pu--active")) {
            socials.classList.remove("socials-pu--active");
            socialsShow = false;
        }
    }

    if (!(event.target.closest(".about-container")) && !(event.target.closest(".left-bar-about")) && !(event.target.closest(".about-closer"))) {
        if (about.classList.contains("about-pu--active")) {
            about.classList.remove("about-pu--active");
            aboutShow = false;
        }
    }

    if (!(event.target.closest(".portfolio-btn")) && !(event.target.closest(".portfolio-pu"))) {
        if (portfolio.classList.contains("portfolio-pu--active")) {
            portfolio.classList.toggle("portfolio-pu--active");
            portfolioVid.pause();
        }
    }

    if (!(event.target.closest(".ambient-btn")) && !(event.target.closest(".ambient-pu"))) {
        if (ambient.classList.contains("ambient-pu--active")) {
            ambient.classList.toggle("ambient-pu--active");
            ambientVid.pause();
        }
    }

    if (!(event.target.closest(".blog-btn")) && !(event.target.closest(".blog-pu"))) {
        if (blog.classList.contains("blog-pu--active")) {
            blog.classList.toggle("blog-pu--active");
            blodVid.pause();
        }
    }

    if (!(event.target.closest(".mixtorrents-btn")) && !(event.target.closest(".mixtorrents-pu"))) {
        if (mixtorrents.classList.contains("mixtorrents-pu--active")) {
            mixtorrents.classList.toggle("mixtorrents-pu--active");
            mixtorrentsVid.pause();
        }
    }
});