async function ReadNameFile() {
    try {
        const response = await fetch('noms.txt');
        const data = await response.text();
        alert(data);
        document.getElementById("noms-content").textContent = data;
    } catch (error) {
        document.getElementById("noms-content").textContent = "No s'ha pogut carregar el fitxer.";
        console.error("Error al carregar el fitxer:", error);
    }
}