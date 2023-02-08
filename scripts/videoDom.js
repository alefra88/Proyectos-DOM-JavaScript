const d = document,
    w = window;
const smartVideo = () => {
    const $video = d.querySelectorAll("video[data-smart-video]");
    const cb = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.play();
            } else {
                entry.target.pause();
            }
            w.addEventListener("visibilityChange", (e) =>
                d.visibilityState === "visible"
                    ? entry.target.play()
                    : entry.target.pause()
            );
        });
    };
    const observer = new IntersectionObserver(cb, { threshold: 0.8 });
    $video.forEach((el) => observer.observe(el));
};

export default smartVideo;
