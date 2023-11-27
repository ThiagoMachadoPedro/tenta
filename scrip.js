function obterNome(){

  var nameC = document.getElementById("nome").value;

return nameC;
}
function obterdata(){

  var data = document.getElementById("data").value;

  var dataAtual = new Date();
  var dia = dataAtual.getDate();
  var mes = dataAtual.getMonth() + 1; // Os meses em JavaScript começam do zero, então somamos 1
  var ano = dataAtual.getFullYear();
  var data = dia + '/' + mes + '/' + ano;

return data;
}



const btnGenerate = document.querySelector("#gerador-pdf")


btnGenerate.addEventListener("click", () => {

  const content = document.querySelector("#content")

  const options= {
    margin: [10,10,10,10],
    filename: "nota_"+ obterNome() + "_data_"+ obterdata() +"_.pdf",
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas: {scale: 2},
    jsPDF: {unit: "mm" , format:"a4", orientation: "portrait"}
  }

  html2pdf().set(options).from(content).save();



});
