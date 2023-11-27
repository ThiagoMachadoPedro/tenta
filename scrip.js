const btnGenerate = document.querySelector("#gerador-pdf")

btnGenerate.addEventListener("click", () => {

  const content = document.querySelector("#content")

  const options= {
    margin: [10,10,10,10],
    filename: "nota.pdf",
    html2canvas: {scale: 2},
    jsPDF: {unit: "mm" , format:"a4", orientation: "portrait"}
  }

  html2pdf().set(options).from(content).save();


});
$(document).ready(function() {
  // const valor1 = document.querySelector("#valor1")
  // const valor2 = document.querySelector("#valor2")
  // const valor3 = document.querySelector("#valor3")
  // const valor4 = document.querySelector("#valor4")
  // const valor5 = document.querySelector("#valor5")
  // const valor6 = document.querySelector("#valor6")

  function calcularResultado() {
    // Obtenha os valores dos campos de entrada
    var valorCampo1 = parseFloat(document.getElementById("valor1").value) || 0;
    var valorCampo2 = parseFloat(document.getElementById("valor2").value) || 0;

    // Realize o cálculo desejado (neste exemplo, a soma)
    var resultado = valorCampo1 + valorCampo2;

    // Atualize o valor do campo de resultado
    document.querySelector("total").value = resultado;
}
})
