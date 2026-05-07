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
let updateTick = true;

function updateUI() {
    document.getElementById("myror").textContent = "Arbetarmyror: "+myror+ " Soldatmyror: "+soldatmyra;
    document.getElementById("barr").textContent = "Barr: "+barr;
    document.getElementById("mat").textContent = "Mat: "+mat;
    document.getElementById("matBtn").textContent = "Mat insamling ("+(1000+100*matlvl)+" barr) lvl: "+matlvl;
    document.getElementById("myraBtn").textContent = "Köp arbetarmyra ("+myrapris+" barr)";
    document.getElementById("autoBtn").textContent = "Barr insamling ("+autopris+" barr) lvl: "+autolvl;
    document.getElementById("soldatBtn").textContent = "Köp soldatmyra ("+soldatpris+" barr & 1000 mat)";
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
    if (barr >= soldatpris && mat >= 1000){
        barr -= soldatpris;
        mat -= 1000
        soldatmyra += 1;
        soldatpris += 1000;
        updateUI();
    }
}

function kriga() {
    document.getElementById("krigTxt").textContent = "Du attackerar!";
    document.getElementById("krigBild").style.visibility = "visible"
    document.getElementById("krigBtn").style.visibility = "hidden";
    document.getElementById("retireraBtn").style.visibility = "hidden";
    setTimeout(() => {
        if((Math.random()*100) < soldatmyra) {
            document.getElementById("krigBild").style.visibility = "hidden";
            document.getElementById("krigTxt").textContent = "Du Vann!";
            barr = barr*2;
        } else {
            document.getElementById("krigBild").style.visibility = "hidden";
            document.getElementById("krigTxt").textContent = "Du Förlorade!";
            barr = 0;
            myror = 1;
            soldatmyra = 0;
        }
        setTimeout(() => { 
            document.getElementById("krigBox").style.visibility = "hidden";
            document.getElementById("krigTxt").style.visibility = "hidden";
            updateTick = true;
            updateUI()
        }, 1000);
    }, 2000);
}

function retirera() {
    document.getElementById("krigTxt").textContent = "Du retirerar!";
    document.getElementById("krigBtn").style.visibility = "hidden";
    document.getElementById("retireraBtn").style.visibility = "hidden";
    barr = parseInt(barr/2);
    setTimeout(() => { 
        document.getElementById("krigBox").style.visibility = "hidden";
        document.getElementById("krigTxt").style.visibility = "hidden";
        updateTick = true;
        updateUI()
    }, 2000);
}

function checkKrig() {
    if (soldatmyra > 0 && Math.floor(Math.random() * fiende) === 0) {
        updateTick = false;
        fiende = 1;
        document.getElementById("krigTxt").textContent = "Du stöter på en fientlig myrstack! Vad vill du göra?";
        document.getElementById("krigTxt").style.visibility = "visible";
        document.getElementById("krigBtn").style.visibility = "visible";
        document.getElementById("retireraBtn").style.visibility = "visible";
        document.getElementById("krigBild").style.visibility = "hidden";
        document.getElementById("krigBox").style.visibility = "visible";
    } 
    else if (soldatmyra > 0) {
        fiende -= 5;
    }
}

setInterval(() => {
    if(updateTick == true) {
        barr += autolvl*myror;
        if (mat >= drottninglvl) {
            myror += drottninglvl;
            mat -= drottninglvl;
        }
        checkKrig();
        mat += matlvl*myror;
        updateUI();
    }
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