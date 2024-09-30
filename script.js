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

  if (ano.value > anoAtual) {
    input.style.border = "2px solid red";
    span.style.display = "block";
    label.style.color = "red";
  } else if (ano.value >= anoAtual && mes.value > mesAtual + 1) {
    input.style.border = "2px solid red";
    span.style.display = "block";
    label.style.color = "red";
  } else if (dia.value > 31 || mes.value > 12) {
    input.style.border = "2px solid red";
    span.style.display = "block";
    label.style.color = "red";
  } else {
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
        if (mes.value <= mesAtual + 1) {
          resultadoMes.innerHTML = mesAtual + 1 - mes.value;
        } else {
          let temp = mes.value - (mesAtual + 1);
          resultadoMes.innerHTML = 12 - temp;
          console.log(mes.value);
          console.log(mesAtual);
          console.log(temp);
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
}
