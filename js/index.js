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

let aboutShow = false;
let socialsShow = false;

$(".left-bar-about").click(function() {
    if (socialsShow == true) {
        $("#socials").hide("fold", 318);
        socialsShow = false;
    }

    if (aboutShow == false) {
        $("#about").show("fold", 318);
        aboutShow = true;
    } else {
        $("#about").hide("fold", 318);
        aboutShow = false;
    }
})

$(".left-bar-socials").click(function() {
    if (aboutShow == true) {
        $("#about").hide("fold", 318);
        aboutShow = false;
    }

    if (socialsShow == false) {
        $("#socials").show("fold", 318);
        socialsShow = true;
    } else {
        $("#socials").hide("fold", 318);
        socialsShow = false;
    }
})

$(".about-closer").click(function() {
    $("#about").hide("fold", 318);
    aboutShow = false;
});

$(".socials-closer").click(function() {
    $("#socials").hide("fold", 318);
    socialsShow = false;
});

const btnBlog = document.querySelectorAll(".blog-btn"),
      blog = document.querySelector(".blog-pu"),
      btnPortfolio = document.querySelectorAll(".portfolio-btn"),
      portfolio = document.querySelector(".portfolio-pu"),
      btnAmbient = document.querySelectorAll(".ambient-btn"),
      ambient = document.querySelector(".ambient-pu");

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