
//brand fade in
var hero = document.getElementById("heroText");

if (hero) {

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
}

//header slide away

const header = document.querySelector("header");

let previousScroll = window.pageYOffset;

window.addEventListener("scroll", () => {

const currentScroll = window.pageYOffset;

if (currentScroll <=0) {
header.classList.remove("hide");
previousScroll = currentScroll;
return;
}
if (currentScroll > previousScroll) {
header.classList.add("hide");
} else {
    header.classList.remove("hide");
}

previousScroll = currentScroll;
});