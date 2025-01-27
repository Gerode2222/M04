window.onload = function() {
    // Utilitzar fetch per llegir el fitxer noms.txt automàticament
    fetch('noms.txt')
        .then(response => response.text())  // Convertir la resposta a text
        .then(data => {
            // Mostrar el contingut del fitxer dins del <div>
            document.getElementById("noms-content").textContent = data;
        })
        .catch(error => {
            // Si hi ha un error, mostrar un missatge
            document.getElementById("noms-content").textContent = "No s'ha pogut carregar el fitxer.";
            console.error("Error al carregar el fitxer:", error);
        });
};