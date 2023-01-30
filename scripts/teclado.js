const d = document;
// SHORTCUTS TECLADO
export function shortcuts(e) {
    // console.log(e.type);
    // console.log(e.key);
    // console.log(e.keyCode);
    // console.log(`ctrl: ${e.ctrlKey}`);
    // console.log(`alt: ${e.altKey}`);
    // console.log(`shift: ${e.shiftKey}`);
    // console.log(e);
    if (e.key === "a" && e.altKey) {
        alert("haz lanzado una alerta con un shortcut de teclado");
    }
    if (e.key === "c" && e.altKey) {
        confirm("haz lanzado una confirmacion con un shortcut");
    }
    if (e.key === "p" && e.altKey) {
        prompt("haz lanzado un aviso con shortcut");
    }
}
// MOVER LA PELOTA
let x = 0,
    y = 0;
export function moveBall(e, ball, stage) {
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage),
        limitsBall = $ball.getBoundingClientRect(),
        limitsStage = $stage.getBoundingClientRect();
    console.log(e.keyCode);
    console.log(e.key);
    console.log(limitsBall, limitsStage);
    switch (e.keyCode) {
        //arriba
        case 38:
            if (limitsBall.top > limitsStage.top) {
                e.preventDefault();
                y--;
            }
            break;
        //abajo
        case 40:
            if (limitsBall.bottom < limitsStage.bottom) {
                e.preventDefault();
                y++;
            }
            break;
        //izquierda
        case 37:
            if (limitsBall.left > limitsStage.left) {
                e.preventDefault();
                x--;
            }
            break;
        //derecha
        case 39:
            if (limitsBall.right < limitsStage.right) {
                e.preventDefault();
                x++;
            }
            break;
        default:
            break;
    }
    $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
}
//el metodo keydown es cuando presionamos, el metodo keyup es cuando soltamos y el metodo keypress es cuando mantenemos presionada la tecla
