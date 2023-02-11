const dGetEl = document,
    w = window;

const speechReader = () => {
    const $speechSelect = dGetEl.getElementById("speech-select"),
        $speechTextare = dGetEl.getElementById("speech-text"),
        $speechBtn = dGetEl.getElementById("speech-btn"),
        speechMessage = new SpeechSynthesisUtterance();
    console.log(speechMessage);
    let voices = [];
    dGetEl.addEventListener("DOMContentLoaded", (e) => {
        // console.log(speechSynthesis);
        w.speechSynthesis.addEventListener("voiceschanged", (e) => {
            // console.log(e);
            voices = speechSynthesis.getVoices();
            // console.log(voices);
            voices.forEach((voice) => {
                const $option = dGetEl.createElement("option");
                $option.value = voice.name;
                $option.textContent = `${voice.name} --- ${voice.lang}`;

                $speechSelect.appendChild($option);
            });
        });
    });
    dGetEl.addEventListener("change", (e) => {
        if (e.target === $speechSelect) {
            speechMessage.voice = voices.find(
                (voice) => voice.name === e.target.value
            );
        }
        console.log(speechMessage);
    });
    dGetEl.addEventListener("click", (e) => {
        if (e.target === $speechBtn) {
            speechMessage.text = $speechTextare.value;
            w.speechSynthesis.speak(speechMessage);
        }
    });
};

export default speechReader;
