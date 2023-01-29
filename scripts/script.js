import hamburguerMenu from "./hamburguer_menu.js";
import { digitalClock, alarm } from "./reloj.js";
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburguerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
});
