const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");
const toggleIcon = menuBtn.querySelector("img");
const mainBody = document.querySelector(".main")

menuBtn.addEventListener("click", () => {
    const isOpen = sidebar.classList.toggle("open");

    toggleIcon.src = isOpen 
        ? "./assets/images/icon-close.svg" 
        : "./assets/images/icon-menu.svg";
});

/* Close the sidebar after selecting a link on mobile */
document.querySelectorAll(".sidebar nav a").forEach((link) => {
        link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
           sidebar.classList.remove("open");
           toggleIcon.src = "./assets/images/icon-menu.svg";
        }
    });
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        sidebar.classList.remove("open");
        toggleIcon.src = "./assets/images/icon-menu.svg";
    }
});

mainBody.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
        sidebar.classList.remove("open");
        toggleIcon.src = "./assets/images/icon-menu.svg";
    }
})

