function showAge(edat){
    edat = parseInt(edat);
    if(!isNaN(edat)){
        edat += 25;
        alert("En 2050 tindras " + edat + " anys");
    }
    else{
        alert("valor no vàlid");
    }
}