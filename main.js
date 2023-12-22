



function alls () {
    all.style.display = "";
    actions.style.display= "";
    player.style.display = "";
}

function movieVideo () {
    // videos.style.display = "";
    all.style.display = "";
    actions.style.display= "";
    player.style.display = "none"; 

}
function musics () {
    music.style.display = ""
    player.style.display = ""
    actions.style.display = "none"

}

function searcher () {
    let getInput = search.value.toUpperCase();
    let mainPlayer = document.querySelectorAll('.player');
    for (let players of mainPlayer){
        let lastChild = player.lastElementChild.firstElementChild.textContent.toUpperCase();
        if (lastChild.includes(getInput)){
            players.style.display = '';
            players = ""
            
        }else{
            players.style.display = 'none';
            players = ""

        }
    }
}

/// MAIN //
const actions = document.querySelector(".videos");
const player = document.querySelector(".player");
const search = document.querySelector("#search");
const player_left = document.querySelectorAll(".player-left");
let playerRight = document.querySelectorAll('.player-right');

const music = document.querySelector(".music");
const all = document.querySelector(".all");
const videos = document.querySelector(".video")

/// call EventListener //
search.addEventListener("keyup", searcher)
videos.addEventListener("click", movieVideo);
music.addEventListener("click", musics);
all.addEventListener("click", alls);
