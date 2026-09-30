/* =========================
   MOBILE MENU
========================= */

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");


menuButton.addEventListener("click", function () {

    mobileMenu.classList.toggle("active");

});


/* Tutup menu setelah memilih halaman */

const mobileLinks =
    mobileMenu.querySelectorAll("a");


mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mobileMenu.classList.remove("active");

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    const windowHeight =
        window.innerHeight;


    revealElements.forEach(function (element) {

        const elementTop =
            element.getBoundingClientRect().top;


        if (elementTop < windowHeight - 80) {

            element.classList.add("show");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


/* Jalankan sekali saat halaman dibuka */

revealOnScroll();


/* =========================
   PROJECT BUTTON
========================= */

const projectButtons =
    document.querySelectorAll(".project-button");


projectButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        if (
            button.textContent.includes(
                "View Project"
            )
        ) {

            alert(
                "Halaman project akan dibuat nanti."
            );

        } else {

            alert(
                "Project ini masih dalam tahap pengembangan."
            );

        }

    });

});


/* =========================
   ESC UNTUK TUTUP MENU
========================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            mobileMenu.classList.remove(
                "active"
            );

        }

    }
);