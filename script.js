const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

const main = document.getElementById("main");
const love = document.getElementById("love");

// No button escape

noBtn.addEventListener("mouseover", () => {

const x = Math.random() * window.innerWidth;
const y = Math.random() * window.innerHeight;

noBtn.style.left = x + "px";
noBtn.style.top = y + "px";

});

// Yes click

yesBtn.addEventListener("click", () => {

main.classList.add("hidden");
love.classList.remove("hidden");

startHearts();

});

// hearts animation

function startHearts(){

setInterval(() => {

const heart = document.createElement("div");

heart.classList.add("heart");

heart.innerHTML = "❤️";

heart.style.left = Math.random()*100+"vw";

heart.style.fontSize = Math.random()*30+20+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},4000);

},300);

}
