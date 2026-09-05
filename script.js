document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       MOBILE NAVIGATION
    ========================================== */

    const menuButton = document.getElementById("menu-button");
    const navigation = document.getElementById("navigation");

    if (menuButton && navigation) {

        menuButton.addEventListener("click", function () {

            navigation.classList.toggle("show");

            const isOpen = navigation.classList.contains("show");

            menuButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            if (isOpen) {

                menuButton.textContent = "✕";

                menuButton.setAttribute(
                    "aria-label",
                    "Close navigation menu"
                );

            } else {

                menuButton.textContent = "☰";

                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            }

        });


        /* Close mobile menu after selecting a page */

        const navigationLinks = navigation.querySelectorAll("a");

        navigationLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navigation.classList.remove("show");

                menuButton.textContent = "☰";

                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* ==========================================
       CURRENT YEAR
    ========================================== */

    const yearElement = document.getElementById("year");

    if (yearElement) {

        yearElement.textContent = new Date().getFullYear();

    }


    /* ==========================================
       HANDLE WINDOW RESIZE
    ========================================== */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 750 && navigation) {

            navigation.classList.remove("show");

            if (menuButton) {

                menuButton.textContent = "☰";

                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }

    });

});
