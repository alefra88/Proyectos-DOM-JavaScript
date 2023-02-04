import hamburguerMenu from "./hamburguer_menu.js";
import { digitalClock, alarm } from "./reloj.js";
import { moveBall, shortcuts } from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import scrollTopButton from "./btn_scroll.js";
import darkTheme from "./dark_theme.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./pruebaResponsive.js";
import userDevice from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_de_estado.js";
import webCam from "./deteccion_webcam.js";
import getPosition from "./geolocalizacion.js";
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburguerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm(
        "assets/mfdoom.mp3",
        "#activar-alarma",
        "#desactivar-alarma"
    );
    webCam("webcamContainer", "#activateWebCam");
    countdown("countdown", "Jan 13,2024 00:00:00", "Feliz cumpleaños Alan");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia(
        "youtube",
        "(min-width: 600px)",
        `<a href="https://youtu.be/P1-e5fVCf14" target="blank_" rel="noopener">Ver video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    );
    responsiveMedia(
        "gmaps",
        "(min-width: 600px)",
        `<a href="https://goo.gl/maps/moXLq9hgeK8nbzu1A" target="blank_" rel="noopener">Ver Mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.948104639214!2d-99.50752898536851!3d17.557657287976827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cbedc74b5d4081%3A0x219e3dda0dc43ba5!2sPalmera%20bifurcada!5e0!3m2!1ses!2smx!4v1675254955304!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    );
    responsiveTester("responsive-tester");
    userDevice("user-device");
});

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
getPosition("gl_position", "#getPosButton");
