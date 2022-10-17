
const turnOpen = document.getElementById("open");
turnOpen.onclick= open;
const turnClose = document.getElementById("close");
turnClose.onclick= close;
const heroi = document.getElementById("heroi");
heroi.onclick= heroi;


function heroiOpen () {
    heroi.src= './img/seria.jpg';
}

function heroiClose () {
    heroi.src= './img/brava.jpg';
}

turnOpen.addEventListener("click", open);
turnClose.addEventListener("click", close);

