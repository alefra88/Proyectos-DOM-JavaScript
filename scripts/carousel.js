// const d = document;

// const slider = () => {
//     const $nextBtn = d.querySelector(".slider-btns .next"),
//         $prevBtn = d.querySelector(".slider-btns .prev"),
//         $slides = d.querySelectorAll(".slider-slide");
//     let i = 0;
//     d.addEventListener("click", (e) => {
//         if (e.target === $prevBtn) {
//             e.preventDefault();
//             $slides[i].classList.remove("active");
//             i--;
//             if (i < 0) {
//                 i = $slides.length - 1;
//             }
//             $slides[i].classList.add("active");
//         }
//         if (e.target === $nextBtn) {
//             e.preventDefault();
//             $slides[i].classList.remove("active");
//             i++;
//             if (i >= $slides.length) {
//                 i = 0;
//             }
//             $slides[i].classList.add("active");
//         }
//     });
//     setInterval(() => {
//         $slides[i].classList.remove("active");
//         i++;
//         if (i >= $slides.length) {
//             i = 0;
//         }
//         $slides[i].classList.add("active");
//     }, 5000);
// };

// export default slider;

const d = document;

const slider = () => {
    const $nextBtn = d.querySelector(".slider-btns .next"),
        $prevBtn = d.querySelector(".slider-btns .prev"),
        $slides = d.querySelectorAll(".slider-slide");
    let i = 0;
    let intervalId = null;
    d.addEventListener("click", (e) => {
        if (e.target === $prevBtn || e.target === $nextBtn) {
            e.preventDefault();
            clearTimeout(intervalId);
            $slides[i].classList.remove("active");
            if (e.target === $prevBtn) {
                i--;
                if (i < 0) {
                    i = $slides.length - 1;
                }
            }
            if (e.target === $nextBtn) {
                i++;
                if (i >= $slides.length) {
                    i = 0;
                }
            }
            $slides[i].classList.add("active");
            intervalId = setTimeout(() => {
                $slides[i].classList.remove("active");
                i++;
                if (i >= $slides.length) {
                    i = 0;
                }
                $slides[i].classList.add("active");
                intervalId = setTimeout(arguments.calle, 3000);
            }, 3000);
        }
    });
    intervalId = setTimeout(() => {
        $slides[i].classList.remove("active");
        i++;
        if (i >= $slides.length) {
            i = 0;
        }
        $slides[i].classList.add("active");
        intervalId = setTimeout(slider, 3000);
    }, 3000);
};

export default slider;
