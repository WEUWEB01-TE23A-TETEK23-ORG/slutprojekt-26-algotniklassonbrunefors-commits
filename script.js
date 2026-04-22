let barr = 0;
let myror = 1;
let autolvl = 0;
let autopris = 100;
let myrapris = 10;

//let myrorEl = document.getElementById("myror");
//let barrEl = document.getElementById("barr");

function updateUI() {
    document.getElementById("myror").textContent = "Myror: "+myror;
    document.getElementById("barr").textContent = "Barr: "+barr;
    document.getElementById("myraBtn").textContent = "Köp myra ("+myrapris+" barr)";
    document.getElementById("autoBtn").textContent = "Auto samla ("+autopris+" barr)";

}
function buy_myra() {
    if (barr >= myrapris){
        barr -= myrapris;
        myror += 1;
        myrapris += 1;
        updateUI();
    }
}
function auto_samla() {
    if (barr >= autopris){
        barr -= autopris;
        autolvl += 1;
        autopris += 10;
        updateUI();
    }
}

// auto samla varje sekund
setInterval(() => {
    barr += autolvl;
    updateUI();
}, 1000);

function clickBarr() {
    barr += 1;
    updateUI();
}

// init
updateUI();