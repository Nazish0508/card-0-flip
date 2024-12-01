// function startGame() {
//   alert("Game Started!");
// }
// startGame();

let stb = document.querySelector('#str-btn');
let startscr = document.querySelector('#start-screen');
let gamescr = document.querySelector('.game-screen');
let homeimg = document.querySelector('#homeimg');
let title = document.querySelector('#title');


stb.addEventListener('click', ()=>{
  title.classList.add("animate__flipOutX");
  homeimg.classList.add("animate__flipOutX");
  stb.classList.add("animate__flipOutX");

  setTimeout(() =>{
    startscr.classList.add("hidden");
    gamescr.classList.remove("hidden");
    gamescr.classList.add("animate__flipInX");
  }, 1000);  
});


