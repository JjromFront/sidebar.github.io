const menuButton = document.querySelector("#menu-icon");
let sidebar = document.querySelector(".sidebar");

menuButton.onclick = function () {
    sidebar.classList.toggle("active")
}
    