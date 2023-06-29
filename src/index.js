import analyzer from "./analyzer.js"
const textarea = document.querySelector('textarea[name="user-input"]');
const character = document.querySelector("#caracteres");
const words = document.querySelector("#palabras");
const numeros = document.querySelector("#numeros");
const charactersin = document.querySelector("#caracteresSinEspacio");
const sumnum = document.querySelector("#sumaNumeros");
const promlog = document.querySelector("#promedioLongitud");
textarea.addEventListener('keyup', (event) => {
  console.log(event.target.value)
  const textValue = event.target.value;
  const res1 = analyzer.getCharacterCount(textValue)
  character.innerHTML = "" + res1;
  /*/*/
  const res2 = analyzer.getWordCount(textValue)
  words.innerHTML = "" + res2;
  /*/*/
  const res3 = analyzer.getCharacterCountExcludingSpaces(textValue)
  charactersin.innerHTML = "" + res3;
  /*/*/
  const res4 = analyzer.getNumberCount(textValue)
  numeros.innerHTML = res4;
  /*/*/
  const res5 = analyzer.getNumberSum(textValue)
  sumnum.innerHTML = "" + res5;
  /*/*/
  const res6 = analyzer.getAverageWordLength(textValue)
  promlog.innerHTML = "" + res6;
})
const button = document.getElementById("reset-button")
/*/*/
button.addEventListener('click', () => {
  console.log("clickito")
  textarea.value = "";
  character.innerHTML = "0";
  words.innerHTML = "0";
  charactersin.innerHTML = "0";
  numeros.innerHTML = "0";
  sumnum.innerHTML = "0";
  promlog.innerHTML = "0";
})