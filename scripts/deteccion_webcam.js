const d = document,
    n = navigator;
const webCam = (id, playButton) => {
    const $container = d.getElementById(id),
        $playButton = d.querySelector(playButton),
        $video = d.createElement("video");
    d.addEventListener("click", (e) => {
        if (e.target.matches(playButton)) {
            if (n.mediaDevices.getUserMedia) {
                n.mediaDevices
                    .getUserMedia({ video: true, audio: false })
                    .then((stream) => {
                        $container.appendChild($video);
                        $video.srcObject = stream;
                        $video.play();
                        $playButton.disabled = true;
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        }
    });
};
export default webCam;
