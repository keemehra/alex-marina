function startMusic(){
    var music = document.getElementById("music");
    music.play();
}

document.body.addEventListener("click", startMusic);
document.body.addEventListener("touchstart", startMusic);