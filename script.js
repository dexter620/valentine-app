let player;
function onYouTubeIframeAPIReady(){
    player = new YT.Player('ytMusic', {
        events:{
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event){
    // prêt à jouer après le clic
}

const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const typedText = document.getElementById("typedText");
const timeTogether = document.getElementById("timeTogether");
const musicBtn = document.getElementById("musicBtn");
const animationsContainer = document.getElementById("animations");

const message = `
Hbiba dyali ❤️

Mn nhar 10 juillet 2022 w hyati tbdlat kamla...
Nti sbab dyal sa3ada dyali,
Nti ahla haja wa9a3at lia.

Kanbghik kter mn ay haja f had denya,
W kan7lm nb9aw m3a b3d dyma.

Love you forever 💖
`;

let i = 0;

function typeWriter(){
if(i < message.length){
typedText.innerHTML += message.charAt(i);
i++;
setTimeout(typeWriter, 35);
}
}

function startCounter(){
const startDate = new Date("2022-07-10T00:00:00");
setInterval(() => {
const now = new Date();
const diff = now - startDate;

const days = Math.floor(diff / (1000*60*60*24));
const hours = Math.floor(diff / (1000*60*60));
const minutes = Math.floor(diff / (1000*60));
const seconds = Math.floor(diff / 1000);

timeTogether.innerHTML =
days + " jours ❤️<br>" +
hours + " heures 💕<br>" +
minutes + " minutes 💖<br>" +
seconds + " secondes 💘";

},1000);
}

// Animations cœurs, fleurs, étoiles
function startAnimations(){
setInterval(()=>{
const elem = document.createElement("div");
elem.className = "floating";
const symbols = ["❤️","🌹","💖","✨","🌸","💐"];
elem.innerHTML = symbols[Math.floor(Math.random()*symbols.length)];
elem.style.left = Math.random()*100 + "vw";
elem.style.fontSize = (15 + Math.random()*30) + "px";
elem.style.animationDuration = (4 + Math.random()*4) + "s";
animationsContainer.appendChild(elem);
setTimeout(()=>elem.remove(),8000);
},300);
}

// Ouvrir lettre magique
envelope.addEventListener("click", function(){
envelope.style.display="none";
letter.style.display="block";

typeWriter();
startCounter();
startAnimations();
});

// Bouton play/pause musique
let musicPlaying = false;
musicBtn.addEventListener("click", function(){
if(player && !musicPlaying){
    player.playVideo();
    musicBtn.textContent = "⏸ Pause la Musique";
    musicPlaying = true;
}else if(player && musicPlaying){
    player.pauseVideo();
    musicBtn.textContent = "▶ Jouer la Musique";
    musicPlaying = false;
}
});
