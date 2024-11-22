function escreverNumeros() {
    const n = prompt("Digite um número:");
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Limpa o conteúdo anterior

    for (let i = 1; i <= n; i++) {
        outputDiv.innerHTML += i + "<br>";
    }
}
