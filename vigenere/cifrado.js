function obtenerMatrizVigenere() {
  const matriz = [];
  const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Generamos la matriz de Vigenère
  for (let i = 0; i < alfabeto.length; i++) {
    matriz.push(alfabeto.slice(i) + alfabeto.slice(0, i));
  }
  return matriz;
}

function cifrarVigenere(palabra, clave) {
  const matriz = obtenerMatrizVigenere();
  const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  palabra = palabra.toUpperCase();
  clave = clave.toUpperCase();
  let resultado = '';

  // Cifrado
  for (let i = 0, j = 0; i < palabra.length; i++) {
    const letra = palabra[i];
    if (alfabeto.indexOf(letra) !== -1) {
      const fila = alfabeto.indexOf(clave[j % clave.length]);
      const columna = alfabeto.indexOf(letra);
      resultado += matriz[fila][columna];
      j++;
    } else {
      resultado += letra; // Si no es una letra, se deja tal cual
    }
  }
  return resultado;
}

function descifrarVigenere(palabra, clave) {
  const matriz = obtenerMatrizVigenere();
  const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  palabra = palabra.toUpperCase();
  clave = clave.toUpperCase();
  let resultado = '';

  // Descifrado
  for (let i = 0, j = 0; i < palabra.length; i++) {
    const letra = palabra[i];
    if (alfabeto.indexOf(letra) !== -1) {
      const fila = alfabeto.indexOf(clave[j % clave.length]);
      const columna = matriz[fila].indexOf(letra);
      resultado += alfabeto[columna];
      j++;
    } else {
      resultado += letra; // Si no es una letra, se deja tal cual
    }
  }
  return resultado;
}

module.exports = { obtenerMatrizVigenere, cifrarVigenere, descifrarVigenere };