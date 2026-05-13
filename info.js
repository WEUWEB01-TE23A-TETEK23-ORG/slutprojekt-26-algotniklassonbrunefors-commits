let barr = 0;
let mat = 0;
let myror = 1;
let soldatmyra = 0;
let autolvl = 0;
let matlvl = 0;
let autopris = 100;
let myrapris = 10;
let soldatpris = 10000;
let drottninglvl = 0;
let fiende = 100;
let fiendelvl = 1;
let updateTick = true;
let vinster = 0;

function updateUI() {
    document.getElementById("myror").textContent = "Arbetarmyror: "+myror+ "    Soldatmyror: "+soldatmyra;
    document.getElementById("resurser").textContent = "Barr: "+barr+"   Mat: "+mat;
    document.getElementById("vinst").textContent = "Vinster: "+vinster;
    document.getElementById("matBtn").textContent = "Mat insamling ("+(1000+100*matlvl)+" barr) lvl: "+matlvl;
    document.getElementById("myraBtn").textContent = "Köp arbetarmyra ("+myrapris+" barr)";
    document.getElementById("autoBtn").textContent = "Barr insamling ("+autopris+" barr) lvl: "+autolvl;
    document.getElementById("soldatBtn").textContent = "Köp soldatmyra ("+soldatpris+" barr & 1000 mat)";
}

function buy_myra() {
    document.getElementById("infoTxt").textContent = "Köp en myra, dessa behövs för att samla resurser";
}

function auto_samla() {
    document.getElementById("infoTxt").textContent = "Lås upp och uppgradera automatisk samling av barr";
}

function auto_mat() {
    document.getElementById("infoTxt").textContent = "Lås upp och uppgradera automatisk samling av mat";
}

function auto_myra() {
    document.getElementById("infoTxt").textContent = "Köp en och uppgradera en drottningmyra som automatiskt skapar nya myror, krävs en mat per myra som skapas";
}

function soldat_myra() {
    document.getElementById("infoTxt").textContent = "Köp en soldatmyra, dessa behövs för att vinna krig mot fientliga myrstackar";
}

function clickBarr() {
    document.getElementById("infoTxt").textContent = "Klicka på denna för att samla barr manuellt";
}
updateUI()