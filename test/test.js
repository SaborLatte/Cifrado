// test/cipherTest.js
const assert = require('assert');
const {
  vigenereCipher,
  vigenereDecipher,
} = require('../cifrado/cifrado');

describe('Vigenère Cipher', function () {
  const keyword = 'KEY';

  it('debería cifrar el texto correctamente', function () {
    const text = 'HELLO';
    const expectedCipherText = 'RIJVS';

    // Ejecutar el cifrado
    const cipherText = vigenereCipher(text, keyword);
    
    // Asegúrate de que el texto cifrado sea el esperado
    assert.strictEqual(cipherText, expectedCipherText);
  });

  it('debería descifrar el texto correctamente', function () {
    const cipherText = 'RIJVS';
    const expectedDecipheredText = 'HELLO';

    // Ejecutar el descifrado
    const decipheredText = vigenereDecipher(cipherText, keyword);
    
    // Asegúrate de que el texto descifrado sea el esperado
    assert.strictEqual(decipheredText, expectedDecipheredText);
  });
});

