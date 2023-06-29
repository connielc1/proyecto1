const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const palabras = text.trim().match(/\b[a-zA-Z]+\b/g);
    return palabras ? palabras.length : 0;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const caracteres = text.length;
    return caracteres;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const caracteresSinEspacio = text.trim().replace(/\s+/g, "");
    console.log(caracteresSinEspacio);
    return caracteresSinEspacio.length;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.trim().split(/\s+/);
    if (words.length === 0) {
      return 0;
    }
    const totalLength = words.reduce((total, word) => total + word.length, 0);
    const averageLength = totalLength / words.length;
    return averageLength;
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const numeros = text.match(/\b\d+\b/g);
    return numeros ? numeros.length : 0;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const numeros = text.match(/\d+/g);
    if (!numeros) {
      return 0;
    }
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
      suma += parseInt(numeros[i]);
    }
    return suma;
  },
};

export default analyzer;
