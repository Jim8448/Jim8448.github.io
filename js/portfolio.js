//h1 on homescreen
var h1 = document.querySelector(".sitename img");

window.addEventListener("load", () => {
h1.classList.add("shimmer");
});

//brand fade in
var hero = document.getElementById("heroText");
var text = hero.innerText;
var chars = text.split("");
hero.innerText = "";
hero.style.opacity = 1;

let i = 0;
function typeWriter() {
    if (i < chars.length) {
        hero.innerHTML += chars[i];
        i++;
        setTimeout(typeWriter, 50);
    } else {
        hero.style.transform = "translateY(0)";
    }
}
window.onload = typeWriter;