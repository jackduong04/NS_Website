const navbar = document.querySelector(".navbar");
const welcome_title = document.querySelector(".title");
const logo_name_color = document.querySelector(".logo_name a");
const logo_name_short_color = document.querySelector(".logo_name_short a");
const links_text_color = document.querySelectorAll(".navbar_links");
const dropdown_icon_color = document.querySelector(".dropdown_svg");

const dropdown_icon = document.querySelector(".navbar_dropdown");
const dropdown_menu_mobile = document.querySelector(".navbar_menu");

window.addEventListener("scroll", (e) => {
    const x = window.scrollY;

    if (x > 299) {
        navbar.classList.add("active");
        welcome_title.classList.add("active");
        logo_name_color.classList.add("active");
        logo_name_short_color.classList.add("active");
        links_text_color.forEach((e) => e.classList.add("active"));
        dropdown_icon_color.classList.add("active");
    }
    else {
        if (!dropdown_icon.classList.contains("active")) {
            navbar.classList.remove("active");
            logo_name_color.classList.remove("active");
            logo_name_short_color.classList.remove("active");
            links_text_color.forEach((e) => e.classList.remove("active"));
            dropdown_icon_color.classList.remove("active");
        }
    }
});

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
        const x = window.scrollY;
        if (x < 299) {
            logo_name_color.classList.remove("active");
            logo_name_short_color.classList.remove("active");
            dropdown_icon_color.classList.remove("active");

            if (x == 0) {
                navbar.classList.remove("active");
            }
        }
    }
});