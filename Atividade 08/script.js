// Declaração do array
let frutas = ['Maçã', 'Banana', 'Laranja', 'Uva'];

// Função para mostrar os elementos do array
function mostrarElementos() {
  let resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = `Frutas: ${frutas.join(', ')}`;
}

// Função para consultar o elemento de uma posição específica
function consultarPosicao(posicao) {
  if (posicao >= 0 && posicao < frutas.length) {
    alert(`O elemento na posição ${posicao} é: ${frutas[posicao]}`);
  } else {
    alert('Posição inválida!');
  }
}

// Função para adicionar uma nova fruta
function adicionarFruta(fruta) {
  frutas.push(fruta);
  alert(`Fruta ${fruta} adicionada!`);
  mostrarElementos(); // Atualiza a exibição do array
}

// Função para remover uma fruta específica
function removerFruta(fruta) {
  let index = frutas.indexOf(fruta);
  if (index !== -1) {
    frutas.splice(index, 1);
    alert(`Fruta ${fruta} removida!`);
    mostrarElementos(); // Atualiza a exibição do array
  } else {
    alert(`Fruta ${fruta} não encontrada!`);
  }
}
