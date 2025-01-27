function Sumar(num, num2){
    num = parseInt(num);
    num2 = parseInt(num2);
    if(!isNaN(num) || !isNaN(num2)){
        alert(num + num2);
    }
    else{
        alert("valor no vàlid");
    }
}