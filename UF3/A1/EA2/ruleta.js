import { ReadNameFile } from "./names.js";

document.getElementById("names").addEventListener("click", GetNames);
document.getElementById("spin").addEventListener("click", SpinRoulette);

async function GetNames(){
    const names = await ReadNameFile();
    DrawRoulette(names);
}

function DrawRoulette(names){
    //Agafem el element canvas i el contexte, que es el que ens permet dibuixar
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    //Mesures per saber les dades de cada segment: posició del centre, area, numero de segment...
    let segmentsNum = names.length;
    let segmentAngle = (2 * Math.PI) / segmentsNum;
    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;
    let radius = 160;

    //Netejar el canvas abans de dibuixar
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for(let i = 0; i < segmentsNum; i++){
        //Calcul per saber on comença i acaba cada segment
        //
        //CAMBIAR START ANGLE PER FER EL DIBUIX DE LA RULETA GIRANT
        //
        let startAngle = i * segmentAngle;
        let endAngle = (i+1) * segmentAngle;

        //Determinar els dos colors del fons
        ctx.fillStyle = i % 2 === 0 ? "#ffcc00" : "#ff6600";

        //Dibuixar i pintar cada segment
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //Determina la posició del text
        let textAngle = startAngle + segmentAngle / 2;
        let textX = centerX + (radius / 2) * Math.cos(textAngle);
        let textY = centerY + (radius / 2) * Math.sin(textAngle);

        ctx.save();
        ctx.translate(textX, textY);
        ctx.rotate(textAngle + Math.PI);

        //Dibujar el nombre
        ctx.fillStyle = "#000";
        ctx.font = "16px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(names[i], 0, 0);
        ctx.restore();
    }
}

function SpinRoulette(){
    alert("Como gira la rule");
}