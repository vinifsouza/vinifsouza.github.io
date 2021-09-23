function resultados() {
  const urlParams = new URLSearchParams(window.location.search);
  const idadeMaxima = urlParams.get("idadeMaxima");
  const idadeMinima = urlParams.get("idadeMinima");
  const mediaIdade = urlParams.get("mediaIdade");
  const pessimos = urlParams.get("pessimos");
  const otimoBom = urlParams.get("otimoBom");

  const resultados = {
    idadeMaxima,
    idadeMinima,
    mediaIdade,
    mediaIdade,
    pessimos,
    otimoBom,
  };

  for (let key in resultados) {
    document.getElementById(key).innerText = resultados[key];
  }
}
