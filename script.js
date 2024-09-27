const dia = document.getElementById("dia");
const mes = document.getElementById("mes");
const ano = document.getElementById("ano");
const btn = document.getElementById("btn");
const divs = document.querySelectorAll(".dataArea");
const resultadoDia = document.getElementById("resultadoDia");
const resultadoMes = document.getElementById("resultadoMes");
const resultadoAno = document.getElementById("resultadoAno");

btn.addEventListener("click", verificarIdade);

const data = new Date();

const diaAtual = data.getDate();
const mesAtual = data.getMonth();
const anoAtual = data.getFullYear();

function verificarIdade() {
  divs.forEach((div) => {
    verificarInput(div);
  });


  
}

function verificarInput(div) {
  const input = div.querySelector("input");
  const span = div.querySelector("span");
  const label = div.querySelector("label");

  if (input.value == "") {
    input.style.border = "2px solid red";
    span.style.display = "block";
    label.style.color = "red";
    resultadoDia.innerHTML = "--";
    resultadoMes.innerHTML = "--";
    resultadoAno.innerHTML = "--";
  } else {
    input.style.border = "1px solid rgb(173, 171, 171)";
    span.style.display = "none";
    label.style.color = "black";

    let mesAno = anoAtual - ano.value;

  if (dia.value == "" || mes.value == "" || ano.value == "") {
    resultadoDia.innerHTML = "--";
    resultadoMes.innerHTML = "--";
    resultadoAno.innerHTML = "--";
  } else {
    if (dia.value < diaAtual) {
      resultadoMes.innerHTML = mesAtual - mes.value + 1;
    } else {
      resultadoMes.innerHTML = mesAtual - mes.value;
    }

    if (dia.value > diaAtual) {
      const diaN = Number(dia.value);
      let total = diaN - diaAtual;
      resultadoDia.innerHTML = 30 - total;
    } else {
      resultadoDia.innerHTML = diaAtual - Number(dia.value);
    }

    resultadoAno.innerHTML = mesAno;
  }
  }
}
