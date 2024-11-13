const { cifrarVigenere, descifrarVigenere } = require('./cifrado');

const palabra = 'PRUEBA';
const clave = 'CLAVE';

console.log('Texto Cifrado:', cifrarVigenere(palabra, clave));
console.log('Texto Descifrado:', descifrarVigenere(cifrarVigenere(palabra, clave), clave));