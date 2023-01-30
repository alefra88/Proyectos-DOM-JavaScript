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
    // const move = (direction) => {};
    switch (e.keyCode) {
        //arriba
        case 38:
            e.preventDefault();
            if (limitsBall.top > limitsStage.top) y--;
            // move("up");
            break;
        //abajo
        case 40:
            e.preventDefault();
            if (limitsBall.bottom < limitsStage.bottom) y++;
            // move("down");
            break;
        //izquierda
        case 37:
            e.preventDefault();
            if (limitsBall.left > limitsStage.left) x--;
            // move("left");
            break;
        //derecha
        case 39:
            e.preventDefault();
            if (limitsBall.right < limitsStage.right) x++;
            // move("right");
            break;
        default:
            break;
    }
    $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
}
//el metodo keydown es cuando presionamos, el metodo keyup es cuando soltamos y el metodo keypress es cuando mantenemos presionada la tecla
