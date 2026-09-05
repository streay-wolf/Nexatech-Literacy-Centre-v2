/* =========================================================
   NEXATECH COMPUTER LITERACY & INNOVATION CENTRE
   Main JavaScript
   ========================================================= */


/* =========================================================
   1. WAIT FOR PAGE TO LOAD
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       2. MOBILE NAVIGATION
       ===================================================== */

    const menuButton = document.getElementById("menu-button");
    const navigation = document.getElementById("navigation");


    if (menuButton && navigation) {

        menuButton.addEventListener("click", function () {

            navigation.classList.toggle("show");


            /* Change menu icon */

            if (navigation.classList.contains("show")) {

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


        /* =================================================
           CLOSE MOBILE MENU AFTER CLICKING A LINK
           ================================================= */

        const navigationLinks =
            navigation.querySelectorAll("a");


        navigationLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navigation.classList.remove("show");

                menuButton.textContent = "☰";

                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            });

        });

    }


    /* =====================================================
       3. AUTOMATICALLY SET CURRENT YEAR
       ===================================================== */

    const yearElement = document.getElementById("year");


    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       4. CONTACT FORM
       ===================================================== */

    const contactForm =
        document.querySelector(".contact-form form");


    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();


            /*
                The form currently has no backend.

                Preventing the default action stops the browser
                from attempting to reload the page.

                We will connect this to an actual email/service
                backend later.
            */


            const nameInput =
                document.getElementById("name");

            const emailInput =
                document.getElementById("email");

            const messageInput =
                document.getElementById("message");


            if (
                !nameInput ||
                !emailInput ||
                !messageInput
            ) {
                return;
            }


            const name =
                nameInput.value.trim();

            const email =
                emailInput.value.trim();

            const message =
                messageInput.value.trim();


            /* Basic validation */

            if (
                name === "" ||
                email === "" ||
                message === ""
            ) {

                alert(
                    "Please complete all fields before sending your message."
                );

                return;

            }


            /*
                Temporary confirmation.

                This will later be replaced with real form
                submission functionality.
            */

            alert(
                "Thank you, " +
                name +
                "! Your message has been received."
            );


            contactForm.reset();

        });

    }


    /* =====================================================
       5. CLOSE MOBILE MENU WHEN WINDOW IS RESIZED
       ===================================================== */

    window.addEventListener("resize", function () {

        if (
            window.innerWidth > 750 &&
            navigation
        ) {

            navigation.classList.remove("show");

            if (menuButton) {

                menuButton.textContent = "☰";

                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            }

        }

    });


});
