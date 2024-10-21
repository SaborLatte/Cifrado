// src/cipher.js

function createVigenereMatrix() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const matrix = [];
  
    for (let i = 0; i < 26; i++) {
      matrix[i] = [];
      for (let j = 0; j < 26; j++) {
        matrix[i][j] = alphabet[(i + j) % 26];
      }
    }
  
    // Mostrar la matriz en la consola
    console.log('Matriz de Vigenère:');
    matrix.forEach(row => console.log(row.join(' '))); // Muestra cada fila de la matriz
    return matrix;
  }
  
  function vigenereCipher(text, keyword) {
    const matrix = createVigenereMatrix();
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const result = [];
    
    const keywordRepeating = keyword.toUpperCase().repeat(Math.ceil(text.length / keyword.length)).slice(0, text.length);
    
    console.log('\nProceso de cifrado:');
    
    for (let i = 0; i < text.length; i++) {
      const char = text[i].toUpperCase();
      if (alphabet.includes(char)) {
        const textIndex = alphabet.indexOf(char);
        const keyIndex = alphabet.indexOf(keywordRepeating[i]);
        const cipherChar = matrix[keyIndex][textIndex];
  
        // Mostrar el proceso de cifrado
        console.log(`Carácter original: ${char}, Índice de clave: ${keyIndex}, Índice de texto: ${textIndex} -> Carácter cifrado: ${cipherChar}`);
        result.push(cipherChar);
      } else {
        console.log(`Carácter no alfabético: ${char} se mantiene igual`);
        result.push(char);
      }
    }
    
    return result.join('');
  }
  
  function vigenereDecipher(text, keyword) {
    const matrix = createVigenereMatrix();
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const result = [];
    
    const keywordRepeating = keyword.toUpperCase().repeat(Math.ceil(text.length / keyword.length)).slice(0, text.length);
    
    console.log('\nProceso de descifrado:');
    
    for (let i = 0; i < text.length; i++) {
      const char = text[i].toUpperCase();
      if (alphabet.includes(char)) {
        const keyIndex = alphabet.indexOf(keywordRepeating[i]);
        const originalIndex = matrix[keyIndex].indexOf(char);
        const decipheredChar = alphabet[originalIndex];
  
        // Mostrar el proceso de descifrado
        console.log(`Carácter cifrado: ${char}, Índice de clave: ${keyIndex} -> Índice original: ${originalIndex}, Carácter descifrado: ${decipheredChar}`);
        result.push(decipheredChar);
      } else {
        console.log(`Carácter no alfabético: ${char} se mantiene igual`);
        result.push(char);
      }
    }
  
    return result.join('');
  }
  
  // Exportar funciones
  module.exports = {
    createVigenereMatrix,
    vigenereCipher,
    vigenereDecipher,
  };
  