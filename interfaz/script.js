// Función para generar la matriz Vigenère
function obtenerMatrizVigenere() {
    const matriz = [];
    const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let i = 0; i < alfabeto.length; i++) {
        matriz.push(alfabeto.slice(i) + alfabeto.slice(0, i));
    }
    return matriz;
}

// Función para cifrar 
function cifrarVigenere(palabra, clave) {
    const matriz = obtenerMatrizVigenere();
    const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let resultado = '';

    
    clave = clave.toUpperCase().repeat(Math.ceil(palabra.length / clave.length)).slice(0, palabra.length);
    palabra = palabra.toUpperCase();

    for (let i = 0; i < palabra.length; i++) {
        const fila = alfabeto.indexOf(clave[i]);
        const columna = alfabeto.indexOf(palabra[i]);
        if (fila !== -1 && columna !== -1) {
            resultado += matriz[fila][columna];
        } else {
            resultado += palabra[i];  // Mantener caracteres no alfabéticos
        }
    }
    return resultado;
}

// Función para descifrar usando el cifrado Vigenère
function descifrarVigenere(textoCifrado, clave) {
    const matriz = obtenerMatrizVigenere();  // Obtener la matriz Vigenère
    const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let resultado = '';

    // Ajustar la clave a la longitud del texto cifrado
    clave = clave.toUpperCase().repeat(Math.ceil(textoCifrado.length / clave.length)).slice(0, textoCifrado.length);
    textoCifrado = textoCifrado.toUpperCase();

    for (let i = 0; i < textoCifrado.length; i++) {
        const letraCifrada = textoCifrado[i];
        const letraClave = clave[i];

        // Verificar si la letra cifrada es una letra del alfabeto
        if (alfabeto.includes(letraCifrada)) {
            const fila = alfabeto.indexOf(letraClave);  // Fila determinada por la letra clave
            const columna = matriz[fila].indexOf(letraCifrada);  // Buscar la letra cifrada en esa fila
            if (columna !== -1) {
                resultado += alfabeto[columna];  // Obtener la letra original
            } else {
                resultado += letraCifrada;  // Si no se encuentra, mantener la letra como está
            }
        } else {
            resultado += letraCifrada;  // Si no es letra (por ejemplo, espacio), mantenerla igual
        }
    }
    return resultado;
}

// Función para manejar el botón de cifrado
function cifrar() {
    const palabra = document.getElementById("palabra").value;
    const clave = document.getElementById("clave").value;
    const resultado = cifrarVigenere(palabra, clave);
    document.getElementById("resultado").textContent = `Texto Cifrado: ${resultado}`;
}

// Función para manejar el botón de descifrado
function descifrar() {
    const palabra = document.getElementById("palabra").value;
    const clave = document.getElementById("clave").value;
    const resultado = descifrarVigenere(palabra, clave);
    document.getElementById("resultado").textContent = `Texto Descifrado: ${resultado}`;
}

// Exponer funciones para que puedan ser llamadas desde el HTML
window.cifrar = cifrar;
window.descifrar = descifrar;
