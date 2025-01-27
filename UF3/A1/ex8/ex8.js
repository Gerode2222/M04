function Major(edat){
    edat = parseInt(edat);
    if(!isNaN(edat)){
        if(edat >= 18){
            alert("ets major de edat");
        }
        else{
            alert("ets menor de edat ")
        }
    }
    else{
        alert("valor no vàlid");
    }
}