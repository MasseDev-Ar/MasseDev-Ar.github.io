const menuToggle = document.querySelector(".menu-toggle");
const mainNavigation = document.querySelector(".main-nav");

if (menuToggle && mainNavigation) {

    menuToggle.addEventListener("click", () => {

        const isOpen = mainNavigation.classList.toggle("is-open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Cerrar menú de navegación"
                : "Abrir menú de navegación"
        );

    });

    mainNavigation.addEventListener("click", (event) => {

        if (event.target.matches("a")) {

            mainNavigation.classList.remove("is-open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Abrir menú de navegación"
            );
        }

    });

}