const d = document,
    w = window;
export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
    let breakpoint = w.matchMedia(mq);
    const responsive = () => {
        if (breakpoint.matches) {
            d.getElementById(id).innerHTML = desktopContent;
        } else {
            d.getElementById(id).innerHTML = mobileContent;
        }
    };
    w.addEventListener("resize", responsive);
    responsive();
}
