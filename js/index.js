const inlineWordContainer = document.querySelectorAll(".inline-word-container"),
inlineWordChildren = document.querySelectorAll(".inline-word > div");

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

const inlineWordContainerJp = document.querySelectorAll(".inline-word-container"),
inlineWordChildrenJp = document.querySelectorAll(".inline-word-jp > div");

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

const btnBlog = document.querySelectorAll(".blog-btn"), 
    blog = document.querySelector(".blog-pu"),
    btnPortfolio = document.querySelectorAll(".portfolio-btn"),
    portfolio = document.querySelector(".portfolio-pu"),
    btnAmbient = document.querySelectorAll(".ambient-btn"),
    ambient = document.querySelector(".ambient-pu"),
    btnMixtorrents = document.querySelectorAll(".mixtorrents-btn"),
    mixtorrents = document.querySelector(".mixtorrents-pu");

const socialsOpen = document.querySelector(".left-bar-socials"),
    socialsClose = document.querySelector(".socials-closer"),
    socials = document.querySelector(".socials-container"),
    aboutOpen = document.querySelector(".left-bar-about"),
    aboutClose = document.querySelector(".about-closer"),
    about = document.querySelector(".about-container");

let socialsShow = false,
    aboutShow = false;

btnBlog.forEach(btn => {
    btn.addEventListener("click", () => {
        blog.classList.toggle("blog-pu--active");
    });
});

btnPortfolio.forEach(btn => {
    btn.addEventListener("click", () => {
        portfolio.classList.toggle("portfolio-pu--active");
    });
});

btnAmbient.forEach(btn => {
    btn.addEventListener("click", () => {
        ambient.classList.toggle("ambient-pu--active");
    });
});

btnMixtorrents.forEach(btn => {
    btn.addEventListener("click", () => {
        mixtorrents.classList.toggle("mixtorrents-pu--active");
    });
});

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

aboutClose.addEventListener("click", () => {
    about.classList.remove("about-pu--active");
    aboutShow = false;
});

socialsClose.addEventListener("click", () => {
    socials.classList.remove("socials-pu--active");
    socialsShow = false;
});