// Exercici 1
function ChangeText(){
    document.getElementById('text-paragraph').innerHTML = "Text Canviat";
}

// Exercici 2
function ChangeColor(){
    let backgroundDiv = document.getElementById('background-div');
    let backgroundColor = document.getElementById('color-input').value;
    backgroundDiv.style.background = backgroundColor;
}

// Exercici 3
function ShowAlert(){
    let alertMessage = document.getElementById('alert-input').value;
    alert(alertMessage);
}

// Exercici 4
function checkEmail(){
    var email = document.getElementById("email-input").value;
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var errorMessage = document.getElementById("email-error");
    if (email.match(emailRegex)) {
        errorMessage.style.display = "none";
        alert("El correu electrònic és vàlid!");
    } 
    else {
        errorMessage.style.display = "block"
        errorMessage.textContent = "El correu electrònic no és vàlid!";
    }
}

// Exercici 5
function HideButton(){
    let hideDiv = document.getElementById('hide-me');
    hideDiv.style.display = 'none';
}

// Exercici 6
function HideShowButton(){
    let toggleDiv = document.getElementById('toggle-div');
    if(toggleDiv.style.display === "none"){
        toggleDiv.style.display = "block";
    }
    else{
        toggleDiv.style.display = "none";
    }
}

// Exercici 7
function AddElement(){
    let text = document.getElementById("list-item-input").value;
    var newElement = document.createElement("li");
    newElement.textContent = text;
    document.getElementById("item-list").appendChild(newElement);
    document.getElementById("list-item-input").value = "";
}

// Exercici 8
function Increment(){
    let actualValue = document.getElementById("counter").textContent;
    actualValue = parseInt(actualValue)
    actualValue += 1;
    document.getElementById("counter").textContent = actualValue;
}

// Exercici 9
function mostrarMissatge() {
    document.getElementById("hover-paragraph").innerText = "Estàs passant el ratolí sobre el div!";
}

function netejarMissatge() {
    document.getElementById("hover-paragraph").innerText = "Passa el ratolí per sobre del div.";
}

document.getElementById("hover-div").addEventListener("mouseover", mostrarMissatge);
document.getElementById("hover-div").addEventListener("mouseout", netejarMissatge);

// Exercici 10
function ChangeImage(){
    let url = document.getElementById("image-url-input").value;
    if(url){
        document.getElementById("image").src = url;
    }
    else{
        alert("Introdueix una url vàlida");
    }
}