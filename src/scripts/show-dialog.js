export function setupDialog() {
    const heroImage = document.querySelector(".hero__image");
    const dialog = document.querySelector(".hero__dialog");
    const closeButton = document.querySelector(".hero__close-btn");
    const body = document.querySelector("body"); 

    if (!heroImage || !dialog || !closeButton) {
        return;
    }

    heroImage.addEventListener("click", () => {
        body.classList.add("blur-background");
        dialog.showModal();
    });

    closeButton.addEventListener("click", () => {
        body.classList.remove("blur-background");
        dialog.close();
    });

    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) {
            body.classList.remove("blur-background");
            dialog.close();
        }
    });

    dialog.addEventListener("close", () => {
        body.classList.remove("blur-background");
    });
}
