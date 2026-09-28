/* =========================================================
   ABDULBARI ISMAIL PORTFOLIO
   JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navigation = document.getElementById("navigation");

menuBtn.addEventListener("click", function () {

    navigation.classList.toggle("active");

});


/* Close mobile menu when clicking a link */

const navigationLinks =
    document.querySelectorAll(".navigation a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("active");

    });

});


/* =========================================================
   IMAGE LIGHTBOX
========================================================= */

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxTitle =
    document.getElementById("lightboxTitle");

const closeLightbox =
    document.getElementById("closeLightbox");


/* Find all clickable project images */

const imageButtons =
    document.querySelectorAll(".open-image");


imageButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const image =
            button.getAttribute("data-image");

        const title =
            button.getAttribute("data-title");


        lightboxImage.src = image;

        lightboxImage.alt = title;

        lightboxTitle.textContent = title;


        lightbox.classList.add("active");

        document.body.classList.add("no-scroll");

    });

});


/* Close button */

closeLightbox.addEventListener(
    "click",
    function () {

        closeImageViewer();

    }
);


/* Close when clicking outside the image */

lightbox.addEventListener(
    "click",
    function (event) {

        if (event.target === lightbox) {

            closeImageViewer();

        }

    }
);


/* Close with ESC key */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeImageViewer();

        }

    }
);


/* Close function */

function closeImageViewer() {

    lightbox.classList.remove("active");

    document.body.classList.remove("no-scroll");

    lightboxImage.src = "";

}