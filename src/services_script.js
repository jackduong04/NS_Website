const navbar = document.querySelector(".navbar");
const logo_name_color = document.querySelector(".logo_name a");
const logo_name_short_color = document.querySelector(".logo_name_short a");
const links_text_color = document.querySelectorAll(".navbar_links");
const dropdown_icon_color = document.querySelector(".dropdown_svg");

navbar.classList.add("active");
logo_name_color.classList.add("active");
logo_name_short_color.classList.add("active");
links_text_color.forEach((e) => e.classList.add("active"));
dropdown_icon_color.classList.add("active");

const dropdown_icon = document.querySelector(".navbar_dropdown");
const dropdown_menu_mobile = document.querySelector(".navbar_menu");

dropdown_icon.addEventListener('click', (e) => {
    const icon_status = dropdown_icon.classList.toggle("active");
    if (icon_status == true) {
        dropdown_menu_mobile.classList.add("active");
        logo_name_color.classList.add("active");
        logo_name_short_color.classList.add("active");
        dropdown_icon_color.classList.add("active");
    }
    else {
        dropdown_menu_mobile.classList.remove("active");
    }
});

const bfaft_container = document.querySelector(".bfaft_container");
const img_before = document.querySelector(".img_bf");
bfaft_container.addEventListener("mousemove", (e) => {
    img_before.style.width = `${e.layerX}px`;
});

const bfaft_container_small = document.querySelectorAll(".bfaft_container_small");
const img_before_small = document.querySelectorAll(".img_bf_small");
bfaft_container_small.forEach((d) => d.addEventListener("mousemove", (e) => {
    img_before_small.forEach((f) => f.style.width = `${e.layerX}px`);
}));