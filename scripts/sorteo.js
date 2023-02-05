// const d = document;

// const draw = (btn, selector) => {
//     const getWinner = (selector) => {
//         const $players = d.querySelectorAll(selector),
//             random = Math.floor(Math.random() * $players.length),
//             winner = $players[random];
//         console.log($players, random, winner);
//         return `El ganador es: ${winner.textContent}`;
//     };
//     d.addEventListener("click", (e) => {
//         if (e.target.matches(btn)) {
//             let result = getWinner(selector);
//             alert(result);
//             console.log(result);
//         }
//     });
// };

// export default draw;

// const d = document;

// const draw = (btn, selector) => {
//     const getWinner = (selector) => {
//         const $players = d.querySelectorAll(selector),
//             random = Math.floor(Math.random() * $players.length),
//             winner = $players[random].querySelector("img");
//         console.log($players, random, winner);
//         return winner;
//     };
//     d.addEventListener("click", (e) => {
//         if (e.target.matches(btn)) {
//             let winner = getWinner(selector);
//             d.querySelectorAll(selector + " img").forEach((img) => {
//                 img.style.display = img === winner ? "block" : "none";
//             });
//         }
//     });
// };

// export default draw;

const d = document;

const draw = (btn, selector) => {
    const getWinner = (selector) => {
        const $players = d.querySelectorAll(selector),
            random = Math.floor(Math.random() * $players.length),
            winner = $players[random];
        console.log($players, random, winner);
        return winner;
    };
    d.addEventListener("click", (e) => {
        if (e.target.matches(btn)) {
            let winner = getWinner(selector);
            d.querySelectorAll(selector).forEach((player) => {
                player.classList.add("selected");
                if (player === winner) {
                    player.classList.remove("selected");
                }
            });
            setTimeout(() => {
                d.querySelectorAll(selector).forEach((player) => {
                    player.classList.remove("selected");
                });
            }, 4000);
        }
    });
};

export default draw;
