function ShowMultiplications(num){
    num = parseInt(num);
    let nums = "";
    if(!isNaN(num)){
        for(let i = 0; i <= 9; i++){
            nums += num + " * " + i + " = " + (num * i) + "\n";
        }
        nums += num + " * " + 10 + " = " + (num * 10);
        alert(nums);
    }
    else{
        alert("valor no vàlid");
    }
}