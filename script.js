AOS.init({
duration:1000,
once:true
});

/* smooth scroll */

document.querySelectorAll("a[href^='#']").forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
});

});

});


/* BOT */

const botToggle = document.getElementById("botToggle");
const botWindow = document.getElementById("botWindow");

botToggle.onclick = () => {

botWindow.style.display =
botWindow.style.display === "block"
? "none"
: "block";

};


/* bot chat */

function sendMessage(){

let input = document.getElementById("botInput");
let msg = input.value;

if(!msg) return;

let box = document.getElementById("botMessages");

box.innerHTML += `<div class="bot-msg">You: ${msg}</div>`;

let reply = "I'm still learning 🤖";

msg = msg.toLowerCase();

if(msg.includes("skills"))
reply="Jorenzon's skills include Java, PHP, MySQL, networking, and technical support.";

if(msg.includes("experience"))
reply="He developed the MASSO Records System during his internship at LGU Dingalan.";

if(msg.includes("contact"))
reply="You can contact him at joren14zon@gmail.com or 09052112801.";

if(msg.includes("hello"))
reply="Hello 👋 nice to meet you!";

setTimeout(()=>{

box.innerHTML += `<div class="bot-msg">Bot: ${reply}</div>`;
box.scrollTop = box.scrollHeight;

},500);

input.value="";

}/* LOADING ANIMATION */

const loaderText = document.getElementById("loader-text");
const progress = document.getElementById("loader-progress");

let percent = 0;

const messages = [

"Booting system...",
"Loading UI modules...",
"Connecting interface...",
"Initializing animations...",
"Rendering portfolio..."

];

let msgIndex = 0;

const interval = setInterval(()=>{

percent += Math.random()*15;

if(percent >= 100){

percent = 100;

progress.style.width = percent + "%";

loaderText.innerText = "Launch complete";

clearInterval(interval);

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},1000);

},800);

}

else{

progress.style.width = percent + "%";

loaderText.innerText = messages[msgIndex];

msgIndex = (msgIndex+1) % messages.length;

}

},400);/* AUTO SCROLL SOCIAL DOCK */

const dock = document.querySelector(".dock-container");

let scrollAmount = 0;

setInterval(()=>{

scrollAmount += 1;

dock.scrollLeft = scrollAmount;

if(scrollAmount >= dock.scrollWidth - dock.clientWidth){

scrollAmount = 0;

}

},30);