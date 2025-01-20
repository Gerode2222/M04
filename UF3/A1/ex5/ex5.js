function ShowEvenOrOdd(num){
    edat = parseInt(num);
    if(!isNaN(num)){
        if((num % 2) == 0){
            alert("El número és parell")
        }
        else{
            alert("El número és senar")
        }
    }
    else{
        alert("valor no vàlid");
    }
}