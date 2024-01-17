const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const popup = document.getElementById("popup");

noButton.addEventListener("mouseover", () => {
    noButton.style.position = "absolute";
    noButton.style.left = Math.random() * 80 + "vw";
    noButton.style.top = Math.random() * 80 + "vh";
});

yesButton.addEventListener("click", () => {
    popup.style.display = "block";
    popup.classList.add("fade-in");
});

popup.addEventListener("click", () => {
    popup.style.display = "none";
    popup.classList.remove("fade-in");
});

// Hide the popup initially
popup.style.display = "none";
