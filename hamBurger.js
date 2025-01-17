let hamburger = document.getElementById("hamburger");
let navLinks = document.getElementById("navlinks");

let project_link = document.getElementById("project_link");
let skill_link = document.getElementById("skill_link");
let contact_link = document.getElementById("contact_link");

hamburger.addEventListener("click", () => {
    let isVisible = hamburger.getAttribute("aria-expanded") === "true";

    if(isVisible) {
        project_link.style.display = "none";
        skill_link.style.display = "none";
        contact_link.style.display = "none";
        hamburger.setAttribute("aria-expanded", "false");
    }
    else {
        project_link.style.display = "block";
        skill_link.style.display = "block";
        contact_link.style.display = "block";
        hamburger.setAttribute("aria-expanded", "true");
    }
});