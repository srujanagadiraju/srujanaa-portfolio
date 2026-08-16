/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const navbar = document.querySelector(".custom-nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(
    ".section-label, .section-title, .skill-card, .project-card, .timeline-item, .certificate-card, .contact-box, .highlight-box"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {
    observer.observe(element);
});


/* =========================================
   STAGGER SKILL ANIMATION
========================================= */

const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach((card, index) => {

    card.style.transitionDelay = `${index * 80}ms`;

});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active-link");
        }

    });

});


/* =========================================
   PROJECT CARD TILT EFFECT
========================================= */

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mousemove", (event) => {

        if (window.innerWidth < 992) return;

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -1.5;
        const rotateY = ((x - centerX) / centerX) * 1.5;

        card.style.transform =
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg)";

    });

});


/* =========================================
   HERO PARALLAX
========================================= */

const heroVisual = document.querySelector(".hero-visual");

window.addEventListener("mousemove", (event) => {

    if (!heroVisual || window.innerWidth < 992) return;

    const x = (window.innerWidth / 2 - event.clientX) / 70;
    const y = (window.innerHeight / 2 - event.clientY) / 70;

    heroVisual.style.transform =
        `translate(${x}px, ${y}px)`;

});


/* =========================================
   MOBILE NAV CLOSE
========================================= */

const navLinksMobile = document.querySelectorAll(".navbar-nav .nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navLinksMobile.forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth < 992) {

            const collapse =
                bootstrap.Collapse.getInstance(navbarCollapse);

            if (collapse) {
                collapse.hide();
            }

        }

    });

});


/* =========================================
   CURRENT YEAR
========================================= */

console.log(
    "Portfolio loaded successfully 🚀"
);