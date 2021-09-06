function showCurrentTime() {
    document.getElementById("time").title= new Date(); 
    document.getElementById("time").style.width="60px";
    document.getElementById("time").style.height="60px";
}
function play() {
    document.getElementById("time").style.width="30px";
    document.getElementById("time").style.height="30px";
}
function start() {
    document.getElementById("time").style.animation="spin 5s linear alternate infinite";
}
function pause() {
    document.getElementById("time").style.animationPlayState="paused";
}