const menuToggle = document.querySelector(".menu-toggle");
const mainNavigation = document.querySelector(".main-nav");


function closeMenu() {

    if (!menuToggle || !mainNavigation) {
        return;
    }

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


if (menuToggle && mainNavigation) {

    menuToggle.addEventListener("click", () => {

        const isOpen =
            mainNavigation.classList.toggle("is-open");

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

        if (event.target.closest("a")) {
            closeMenu();
        }

    });


    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            closeMenu();
        }

    });


    window.addEventListener("resize", () => {

        if (window.innerWidth >= 900) {
            closeMenu();
        }

    });

}


/* ==================================================
   Budget form
   ================================================== */

const budgetForm =
    document.querySelector("#budget-form");


if (budgetForm) {

    budgetForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const formData =
            new FormData(budgetForm);


        const name =
            formData.get("name")?.toString().trim() ?? "";

        const business =
            formData.get("business")?.toString().trim() ?? "";

        const email =
            formData.get("email")?.toString().trim() ?? "";

        const projectType =
            formData.get("projectType")?.toString().trim() ?? "";

        const budget =
            formData.get("budget")?.toString().trim() ?? "";

        const message =
            formData.get("message")?.toString().trim() ?? "";


        const whatsappMessage = `
Hola MasseDev 👋

Quisiera solicitar un presupuesto.

Nombre: ${name}
Empresa o emprendimiento: ${business || "No especificado"}
Email: ${email}

Tipo de proyecto: ${projectType}
Presupuesto estimado: ${budget || "Prefiero conversarlo"}

Descripción:
${message}
        `.trim();


        const phoneNumber =
            "5493541571500";


        const whatsappUrl =
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;


        const newWindow = window.open(
            whatsappUrl,
            "_blank",
            "noopener,noreferrer"
        );


        if (newWindow) {
            newWindow.opener = null;
        }

    });

}


/* ==================================================
   Current year
   ================================================== */

const currentYear =
    document.querySelector("#current-year");


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}