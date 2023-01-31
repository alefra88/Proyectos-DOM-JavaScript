import hamburguerMenu from "./hamburguer_menu.js";
import { digitalClock, alarm } from "./reloj.js";
import { moveBall, shortcuts } from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import scrollTopButton from "./btn_scroll.js";
import darkTheme from "./dark_theme.js";
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburguerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm(
        "assets/TrololoChiptune.mp3",
        "#activar-alarma",
        "#desactivar-alarma"
    );
    countdown("countdown", "Jan 13,2024 00:00:00", "Feliz cumpleaños Alan");
    scrollTopButton(".scroll-top-btn");
    darkTheme(".dark-theme-btn","dark-mode")
});

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
});
