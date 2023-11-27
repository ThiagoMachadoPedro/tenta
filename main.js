function calcularSoma() {
  // Obter os valores dos campos de entrada
  var valores = [];
  for (var i = 1; i <= 11; i++) {
      var campo = document.getElementById('valor' + i);
      if (campo.value !== "") {
          valores.push(parseFloat(campo.value));
      }
  }

  // Calcular a soma
  var soma = valores.reduce(function (total, valor) {
      return total + valor;
  }, 0);

  // Exibir o resultado
  document.getElementById('resultado').innerText = soma;
}
