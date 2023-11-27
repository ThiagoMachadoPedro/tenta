const btnGenerate = document.querySelector("#gerador-pdf")


btnGenerate.addEventListener("click", () => {

  const content = document.querySelector("#content")

  const options= {
    margin: [10,10,10,10],
    filename: "nota.pdf",
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas: {scale: 2},
    jsPDF: {unit: "mm" , format:"a4", orientation: "portrait"}
  }

  html2pdf().set(options).from(content).save();


});
