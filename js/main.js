
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
const menuClose = document.querySelector(".menu-close");

if (menuToggle && navigation) {

    menuToggle.addEventListener("click", () => {
        navigation.classList.add("active");
        document.body.style.overflow = "hidden";
    });

    const closeMenu = () => {
        navigation.classList.remove("active");
        document.body.style.overflow = "";
    };

    if (menuClose) {
        menuClose.addEventListener("click", closeMenu);
    }

    navigation.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });
}
