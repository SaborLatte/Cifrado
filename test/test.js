const { obtenerMatrizVigenere, cifrarVigenere, descifrarVigenere } = require('../vigenere/cifrado');

describe('Pruebas de Cifrado Vigenère', function () {
  it('Debería mostrar la matriz y cifrar correctamente', function () {
    // Obtener y mostrar la matriz de Vigenère
    const matriz = obtenerMatrizVigenere();
    console.log('Matriz Vigenère:', matriz);

    const palabra = 'PRUEBA';
    const clave = 'CLAVE';
    
    // Cifrado de la palabra
    const cifrado = cifrarVigenere(palabra, clave);
    console.log('Cifrado Vigenère:', cifrado);

    // Validar que el cifrado sea correcto
    const resultadoEsperado = 'RCUZFC'; // Cambia esto al resultado esperado real
    if (cifrado !== resultadoEsperado) {
      throw new Error(`Se esperaba "${resultadoEsperado}", pero se obtuvo "${cifrado}"`);
    }
  });

  it('Debería descifrar correctamente un texto cifrado dado una clave', function () {
    const textoCifrado = 'RCUZFC'; // Cambia esto al texto cifrado real
    const clave = 'CLAVE';
    const resultadoEsperado = 'PRUEBA';

    // Descifrado
    const descifrado = descifrarVigenere(textoCifrado, clave);
    console.log('Descifrado Vigenère:', descifrado);

    // Validar que el texto descifrado sea igual al original
    if (descifrado !== resultadoEsperado) {
      throw new Error(`Se esperaba "${resultadoEsperado}", pero se obtuvo "${descifrado}"`);
    }
  });

  it('Debería retornar el texto original cuando se cifra y luego se descifra', function () {
    const palabra = 'CIFRADO';
    const clave = 'LLAVE';
    
    // Realizar el cifrado
    const cifrado = cifrarVigenere(palabra, clave);
    console.log('Cifrado Vigenère:', cifrado);

    // Realizar el descifrado
    const descifrado = descifrarVigenere(cifrado, clave);
    console.log('Descifrado Vigenère:', descifrado);

    // Validar que el descifrado coincida con la palabra original
    if (descifrado !== palabra) {
      throw new Error(`Se esperaba "${palabra}", pero se obtuvo "${descifrado}"`);
    }
  });
});