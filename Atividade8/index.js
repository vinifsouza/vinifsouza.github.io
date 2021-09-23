const idades = [];
const sexos = [];
const opinioes = [];
let mediaIdades = 0;

let contador = 1;

function incrementaContador() {
  contador++;

  document.getElementById("saudacao").innerText = `Olá, pessoa ${contador}`;
}

function recebeDados() {
  const formData = new FormData(document.getElementById("pesquisa-opiniao"));
  const idade = formData.get("idade");
  const sexo = formData.get("sexo");
  const opiniao = formData.get("opiniao");

  mediaIdades += Number(idade);
  idades.push(idade);
  sexos.push(sexo);
  opinioes.push(opiniao);

  document.getElementById("pesquisa-opiniao").reset();

  if (contador === 1) {
    retornaResultado();
  }
  incrementaContador();
}

function retornaResultado() {
  const idadeMinima = Math.min(...idades);
  const idadeMaxima = Math.max(...idades);
  const mediaIdade = (mediaIdades / idades.length).toFixed(2);
  let quantidadeHomens = 0;
  let quantidadeMulheres = 0;
  let quatidadePessimos = 0;
  let quantidadeOtimoBom = 0;

  for (let sexo of sexos) {
    if (sexo == "Masculino") {
      quantidadeHomens++;
    }

    quantidadeMulheres++;
  }

  for (let resposta of opinioes) {
    if (resposta === "pessimo") {
      quatidadePessimos++;
    } else if (["otimo", "bom"].includes(resposta)) {
      quantidadeOtimoBom++;
    }
  }

  const porcentagemOtimoBom = `${(
    (quantidadeOtimoBom / opinioes.length) *
    100
  ).toFixed(2)}%`;

  window.location.replace(
    `resultado.html?idadeMinima=${idadeMinima}&idadeMaxima=${idadeMaxima}&mediaIdade=${mediaIdade}&pessimos=${quatidadePessimos}&otimoBom=${porcentagemOtimoBom}`
  );
}
