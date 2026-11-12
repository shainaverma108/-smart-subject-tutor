
// 1. Welcome Message
window.addEventListener("load", function () {
    console.log("Welcome to Ishika Portfolio! ");
});


// 2. Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId.length > 1) {
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });

});


// 3. Button Click Message
const projectButton = document.querySelector(".home-content .btn");

projectButton.addEventListener("click", function () {
    console.log("Welcome to my projects section!");
});


// 4. Contact Button
const contactButton = document.querySelector("#contact .btn");

contactButton.addEventListener("click", function () {
    console.log("Thank you for visiting my portfolio!");
});


const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navigationLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


// 6. Dynamic Footer Year
const footer = document.querySelector("footer");

if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = `
        <p>&copy; ${year} Ishika
        All Rights Reserved.</p>
    `;
}
