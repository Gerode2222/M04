function ShowPositiveOrNegative(num){
    edat = parseInt(num);
    if(!isNaN(num)){
        if((num <= 0 ) == 0){
            alert("El número és positiu")
        }
        else{
            alert("El número és negatiu")
        }
    }
    else{
        alert("valor no vàlid");
    }
}