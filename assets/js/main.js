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
const budgetForm = document.querySelector("#budget-form");

if (budgetForm) {

    budgetForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const formData = new FormData(budgetForm);

        const name = formData.get("name");
        const business = formData.get("business");
        const email = formData.get("email");
        const projectType = formData.get("projectType");
        const budget = formData.get("budget");
        const message = formData.get("message");

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

        const phoneNumber = "5493541571500";

        const whatsappUrl =
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(
            whatsappUrl,
            "_blank",
            "noopener,noreferrer"
        );

    });

}