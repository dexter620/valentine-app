const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const typedText = document.getElementById("typedText");
const timeTogether = document.getElementById("timeTogether");

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

/* Effet machine à écrire */
function typeWriter(){
if(i < message.length){
typedText.innerHTML += message.charAt(i);
i++;
setTimeout(typeWriter, 35);
}
}

/* Calcul du temps ensemble */
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

/* Ouvrir la lettre */
envelope.addEventListener("click", function(){
envelope.style.display="none";
letter.style.display="block";

typeWriter();
startCounter();
});
