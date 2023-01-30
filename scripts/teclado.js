const d = document;

export function shortcuts(e) {
    console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode);
    console.log(`ctrl: ${e.ctrlKey}`);
    console.log(`alt: ${e.altKey}`);
    console.log(`shift: ${e.shiftKey}`);
    console.log(e);
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
//el metodo keydown es cuando presionamos, el metodo keyup es cuando soltamos y el metodo keypress es cuando mantenemos presionada la tecla
