function calcularRaiz(numero) {
    const raiz = Math.sqrt(numero);
    document.getElementById('resultado').innerText = `A raiz quadrada de ${numero} é ${raiz}`;
}

function escreverNaDiv() {
    const div = document.getElementById('minhaDiv');
    div.innerText = 'Escrevendo em um elemento div';
}

function receberTexto() {
    const texto = document.getElementById('textoUsuario').value;
    document.getElementById('textoResultado').innerText = ` ${texto}`;
}
