function contarNumeros() {
    let n = prompt("Digite um número:");
    n = parseInt(n);
    if (isNaN(n)) {
        alert("Por favor, insira um número válido.");
        return;
    }

    let div = document.getElementById("numeros");
    div.innerHTML = ""; // Limpa o conteúdo anterior

    for (let i = 1; i <= n; i++) {
        div.innerHTML += i + "<br>";
    }
}
