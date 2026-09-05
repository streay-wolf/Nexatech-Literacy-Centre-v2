// ========================================
// NEXATECH LITERACY CENTRE
// MAIN JAVASCRIPT
// ========================================


// ========================================
// 1. WELCOME MESSAGE
// ========================================

console.log(
    "Welcome to NexaTech Computer Literacy and Innovation Centre!"
);


// ========================================
// 2. CURRENT YEAR IN FOOTER
// ========================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ========================================
// 3. MOBILE NAVIGATION
// ========================================

const menuButton = document.getElementById("menu-button");
const navigation = document.getElementById("navigation");


// Open and close the mobile menu

if (menuButton && navigation) {

    menuButton.addEventListener("click", function () {

        navigation.classList.toggle("show");

    });


    // ========================================
    // 4. CLOSE MENU AFTER CLICKING A LINK
    // ========================================

    const navigationLinks = navigation.querySelectorAll("a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navigation.classList.remove("show");

        });

    });

}
