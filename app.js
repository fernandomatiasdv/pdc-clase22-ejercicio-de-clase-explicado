// Llama a la función mostrarNumeros, que se encuentra en el archivo externo.js
const {mostrarNumeros} = require('./externo');
// Instancia fs a partir del paquete 'fs' (file system)
const fs = require('fs');

// Verifica si el archivo existe
fs.stat("Nombre.txt", 
    // Una vez que termina de correr la función "stat",
    // ésta nos devuelve una función callback. En el caso que me
    // haya devuelto un valor lo voy a considerar como un error 
    (error) => {
        // Entonces pregunto: "Si tiene error entonces"
        if(error) {
            // Declaro el contenido con el que quiero cargar el archivo
            const contenido = mostrarNumeros();
            // Escribo el archivo bajo el nombre "Nombre.txt" y que contenga
            // el valor que nos retorno la función mostrarNumeros()
            fs.writeFile("Nombre.txt",contenido,
                // Cuando writeFile termina de ejecutarse me devuelve
                // un valor, en caso de existir significa que fue un error
                (error) => {
                    // Si existe el error entonces "throw" DETIENE el proceso
                    // y nos devuelve el contenido de la variable error
                    if(error) throw error;
                    // En caso que no exista el error se muestra el log.
                    //nota: No es obligatorio pero le ayuda al usuario.
                    console.log("El archivo se genero exitosamente");
                }
            )
        } else {
            // unlink se usa para eliminar el contenido de un archivo,
            // en este caso de Nombre.txt
            fs.unlink("Nombre.txt",
                // Anteriormente chequeamos que el archivo exista (fila 7)
                // ya que sino existe y trata de borrar el archivo salta un error
                // Si bien ya contemplamos este caso la idea es tratar de capturar
                // el error en caso que exista un problema
                (error) => {
                    if(error) throw error;
                    // Y nuevamente si se borró bien saldrá un cartel informativo
                    console.log("El archivo se eliminó exitosamente");
                }
            )
        }
    }
)

