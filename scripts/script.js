import hamburguerMenu from "./hamburguer_menu.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburguerMenu(".panel-btn", ".panel",".menu a");
});
