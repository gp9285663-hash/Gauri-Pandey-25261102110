function toggleMenu() {
    document.getElementById("nav").classList.toggle("active");
}


// Close mobile menu after clicking

document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("nav").classList.remove("active");
    });
});


// Smooth reveal animation

const items = document.querySelectorAll(
    ".proof-card, .project, .skill, .certificate, .mini-card, .process > div, .note"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.12
});


items.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(25px)";
    item.style.transition =
        "opacity .7s ease, transform .7s ease";

    observer.observe(item);

});


// Developer console signature

console.log(
    "%c Gauri Pandey • Software Developer ",
    "background:#111;color:#a78bfa;padding:10px;font-size:14px;"
);