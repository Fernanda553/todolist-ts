const desafio = () =>  {
    // Paso 1: Solicitar palabras clave al usuario
    let palabrasClave = prompt("Ingrese las palabras clave separadas por comas:").split(',');

    // Paso 2: Solicitar texto al usuario
    let texto = prompt("Ingrese el texto en el que desea buscar las palabras clave:");

    // Paso 3: Contar cuántas veces aparece cada palabra clave en el texto
    let resultado = {};
    palabrasClave.forEach(palabra => {
        resultado[palabra.trim()] = (texto.toLowerCase().match(new RegExp(palabra.trim(), 'gi')) || []).length;
    });

    // Paso 4: Imprimir un resumen con el resultado
    console.log("\nResultado:");
    for (let palabra in resultado) {
        console.log(`- '${palabra}': ${resultado[palabra]}`);
    }
}

desafio();