
function ingresarGlucosa() {
    //Definicion de la funcion
    let registrosGlucosa = [];
    //Se crea un array paa almacenar los registros
    const MAXREGISTROS = 5;
    //Se establece un numero maximo de registros que se pueden ingresar
    prompt("Ingresa una cifra de glucosa, si esta se encuentra fuera del rango de 70 y 100, se te notificara")

    for (let i = 1; i <= MAXREGISTROS; i++) {
        //Se crea un bucle para ingresar los datos
        let glucosa = parseInt(prompt("Ingrese tu cifra de glucosa (registro " + i + "):"));
        //Soliciar al usuario ingresar los datos
        if (glucosa >= 110) {
            alert("Tu glucosa se encuentra elevada, favor de ir al medico")
            //Se notifica al usuario si su nivel de glucosa se encuentra elevado.
        } else if(glucosa <= 70){
            alert("Tu glocosa se encuentra demasiado baja, por favor, consume algo dulce o acude al doctor");
            //Se notificara al usuario si se encuentra demasiado baja
        } else if (isNaN(glucosa)) {
            alert("Por favor ingresa numeros validos");
            i--;
            //Se decremente para poder repetir la misma iteracion
            continue;
        }
        //Validacion de entrada y almacenamianto, para asegurar que los valores que se ingresen sen numero
        let registro = { glucosa };
        registrosGlucosa.push(registro)
        //si las entradas son validas se crea el objeto "registro" y se agrega al final del array
    }
    console.log("Registros de glucosa: ");
    for (let i = 0; i < registrosGlucosa.length; i++) {
        let registro = registrosGlucosa[i];
        if(registro.glucosa >= 110){
            console.log(
                "Tu registro " + (i + 1) + ": de glucosa es = " + registro.glucosa + ", se encuentra elevado, favor de ir al medico."
            );
        }else if(registro.glucosa <= 70){
            console.log(
                "Tu registro " + (i + 1) + ": de glucosa es = " + registro.glucosa + ", se encuentra bajo, favor de ir al medico o consumir una fruta."
            );
        }else{
            console.log(
                "Tu registro " + (i + 1) + ": de glucosa es = " + registro.glucosa + ", es normal"
            );
        }
    }
    /*Mostrar los registros al usuario, se usa el bucle for para recorrer el array u mostrar cada registro,
    de la glucosa tomada por el prompt y notifica en consola si su glocosa es normal o si esta se encuentra elevada.
    */

}
ingresarGlucosa()