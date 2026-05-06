let barr = 10000000;
let mat = 0;
let myror = 1;
let soldatmyra = 0;
let autolvl = 0;
let matlvl = 0;
let autopris = 100;
let myrapris = 10;
let soldatpris = 10000;
let drottninglvl = 0;
let fiende = 1;

function updateUI() {
    document.getElementById("myror").textContent = "Arbetarmyror: "+myror+ " Soldatmyror: "+soldatmyra;
    document.getElementById("barr").textContent = "Barr: "+barr;
    document.getElementById("mat").textContent = "Mat: "+mat;
    document.getElementById("matBtn").textContent = "Mat insamling ("+(1000+100*matlvl)+" barr) lvl: "+matlvl;
    document.getElementById("myraBtn").textContent = "Köp arbetarmyra ("+myrapris+" barr)";
    document.getElementById("autoBtn").textContent = "Barr insamling ("+autopris+" barr) lvl: "+autolvl;
    document.getElementById("soldatBtn").textContent = "Köp soldatmyra ("+soldatpris+" barr)";
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
function auto_mat() {
    if(barr >= 1000+100*matlvl){
        barr -= 1000+100*matlvl;
        matlvl +=1;
        updateUI();
    }
}
function auto_myra() {
    if(barr >= 5000+5000*drottninglvl){
        barr -= 5000+5000*drottninglvl;
        drottninglvl += 1;
        document.getElementById("drottningBtn").textContent = "Uppgradera drottning ("+(5000+5000*drottninglvl)+" barr) lvl: "+drottninglvl;
        updateUI();
    }
}
function soldat_myra() {
    if (barr >= soldatpris){
        barr -= soldatpris;
        soldatmyra += 1;
        soldatpris += 1000;
        updateUI();
    }
}
function kriga() {
    document.getElementById("krigTxt").textContent = "Du attackerar!";
    document.getElementById("krigBox").style.visibility = "hidden";
}
function retirera() {
    document.getElementById("krigTxt").textContent = "Du retirerar!";
    document.getElementById("krigBox").style.visibility = "hidden";
}
function checkVal() {
    await ()
}
function checkKrig() {
    if (autolvl > 0 && Math.floor(Math.random() * fiende) === 0) {
        fiende = 1000;

        document.getElementById("krigBox").style.visibility = "visible";
        checkVal()
    } 
    else if (autolvl > 0) {
        fiende -= 5;
    }
}
function auto() {
    
}
setInterval(() => {
    barr += autolvl*myror;
    if (mat >= drottninglvl){
        myror += drottninglvl;
        mat -= drottninglvl;
    }
    checkKrig();
    mat += matlvl*myror;
    updateUI();
}, 1000);

function clickBarr() {
    barr += 1;
    document.getElementById("myrstack").style.transform = "scale(1.01)";
    setTimeout(() => { 
        document.getElementById("myrstack").style.transform = "scale(1)" ;
    }, 50);
    updateUI();
}

updateUI();