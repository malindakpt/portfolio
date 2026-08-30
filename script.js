/* =========================================================
MOBILE NAVIGATION
========================================================= */

const mobileMenuButton =
document.getElementById("mobileMenuButton");

const navLinks =
document.getElementById("navLinks");

mobileMenuButton.addEventListener("click", () => {

const isOpen =
    navLinks.classList.toggle("active");

mobileMenuButton.setAttribute(
    "aria-expanded",
    String(isOpen)
);

});

/* Close mobile menu when a navigation link is clicked */

document.querySelectorAll("#navLinks a").forEach((link) => {

link.addEventListener("click", () => {

    navLinks.classList.remove("active");

    mobileMenuButton.setAttribute(
        "aria-expanded",
        "false"
    );

});

});

/* =========================================================
CURRENT YEAR
========================================================= */

const currentYear =
document.getElementById("currentYear");

if (currentYear) {
currentYear.textContent =
new Date().getFullYear();
}

/* =========================================================
REVEAL ANIMATIONS
========================================================= */

const revealElements =
document.querySelectorAll(
".expertise-card, .case-study, .timeline-item, .principles-grid article"
);

const revealObserver =
new IntersectionObserver(
(entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add(
                    "is-visible"
                );

                revealObserver.unobserve(
                    entry.target
                );
            }

        });

    },
    {
        threshold: 0.08
    }
);

revealElements.forEach((element) => {

element.classList.add("reveal");

revealObserver.observe(element);

});

/* =========================================================
ACTIVE NAVIGATION
========================================================= */

const sections =
document.querySelectorAll("main section[id]");

const navigationLinks =
document.querySelectorAll(
'.nav-links a[href^="#"]'
);

const activeSectionObserver =
new IntersectionObserver(
(entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) {
                return;
            }

            navigationLinks.forEach((link) => {

                link.classList.remove(
                    "active"
                );

            });

            const activeLink =
                document.querySelector(
                    `.nav-links a[href="#${entry.target.id}"]`
                );

            if (activeLink) {

                activeLink.classList.add(
                    "active"
                );

            }

        });

    },
    {
        rootMargin: "-35% 0px -55% 0px"
    }
);

sections.forEach((section) => {

activeSectionObserver.observe(section);

});
