const d = document,
    w = window,
    n = navigator;
export default function networkStatus() {
    const isOnline = () => {
        const $div = d.createElement("div");
        if (n.onLine) {
            $div.textContent = "Conexiòn Restablecida";
            $div.classList.add("online");
            $div.classList.remove("offline");
        } else {
            $div.textContent = "Conexiòn Perdida";
            $div.classList.add("offline");
            $div.classList.remove("online");
        }
        d.body.insertAdjacentElement("afterbegin", $div);
        setTimeout(() => d.body.removeChild($div), 1000);
    };
    w.addEventListener("online", () => isOnline());
    w.addEventListener("offline", () => isOnline());
}
