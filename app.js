const { vigenereCipher, vigenereDecipher } = require('./cifrado/cifrado');

const keyword = 'KEY';
const text = 'HELLO';

const cipherText = vigenereCipher(text, keyword);
console.log(`Texto cifrado: ${cipherText}`);

const decipheredText = vigenereDecipher(cipherText, keyword);
console.log(`Texto descifrado: ${decipheredText}`);