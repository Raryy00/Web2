// Função para contar números de 1 a n
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

// Função para calcular as raízes quadradas de 25, 36 e 49
function calcularRaizes() {
    const numeros = [25, 36, 49];
    const raizes = numeros.map(num => Math.sqrt(num));
    
    let div = document.getElementById("raizes");
    div.innerHTML = ""; // Limpa o conteúdo anterior

    raizes.forEach((raiz, index) => {
        div.innerHTML += `A raiz quadrada de ${numeros[index]} é ${raiz}<br>`;
    });
}

// Função para escrever um texto fixo em uma div
function escreverNaDiv() {
    const texto = "Olá, este texto foi inserido via JavaScript!";
    const div = document.getElementById("minhaDiv");
    div.innerHTML = texto;
}

// Função para exibir o texto digitado pelo usuário
function exibirTexto() {
    const texto = document.getElementById("textoUsuario").value;
    const div = document.getElementById("resultado");
    div.innerHTML = texto;
}
