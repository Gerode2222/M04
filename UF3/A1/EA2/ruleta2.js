import { ReadNameFile } from "./names.js";

document.getElementById("names").addEventListener("click", GetNames);
document.getElementById("spin").addEventListener("click", SpinRoulette);

let nameList = ["", "", "", ""];

let actualAngle = 0;
let spinning = false;
let segmentsNum = nameList.length;

let angle = 0; // Ángulo de rotación inicial
let isRotating = false; // Controla si la ruleta está girando o no

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

async function GetNames(){
    nameList = await ReadNameFile();
    segmentsNum = nameList.length
    DrawRoulette(nameList);
}

function SpinRoulette() {
    isRotating = true; // Iniciar la rotación
    RotateRoulette();
}

function RotateRoulette(){
    if (!isRotating) return;

    DrawRoulette(nameList)
    // Restaurar el origen del contexto después de la rotación
    ctx.resetTransform();

    // Aumentar el ángulo para la siguiente rotación
    angle += 0.02; // Ajusta la velocidad de la rotación (más grande para una rotación más rápida)

    // Solicitar el siguiente fotograma para continuar la animación
    requestAnimationFrame(RotateRoulette);
}

function DrawRoulette(names){
    //Agafem el element canvas i el contexte, que es el que ens permet dibuixar

    //Mesures per saber les dades de cada segment: posició del centre, area, numero de segment...
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
        let startAngle = (actualAngle + i) * segmentAngle;
        let endAngle = ((actualAngle + i)+1) * segmentAngle;

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

DrawRoulette(nameList);