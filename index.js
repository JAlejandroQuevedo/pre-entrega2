function ingresarGlucosa() {
    //Definicion de la funcion
    let registrosGlucosa = [];
    //Se crea un array paa almacenar los registros
    const MAXREGISTROS = 5;
    //Se establece un numero maximo de registros que se pueden ingresar

    for (let i = 1; i <= MAXREGISTROS; i++) {
        //Se crea un bucle para ingresar los datos
        let glucosa = parseInt(prompt("Ingrese tu cifra de glucosa (registro " + i + "):"));
        //Soliciar al usuario ingresar los datos
        if (glucosa > 70 || glucosa > 100) {
            alert("Tu glucosa se encuentra elevada, favor de ir al medico")
            //Se notifica al usuario si su nivel de glucosa se encuentra elevado.
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
        console.log(
            "Tu registro " + (i + 1) + ": de glucosa es = " + registro.glucosa + ", lo normal es entre 70 y 100 mg/dl"
        );
    }
    /*Mostrar los registros al usuario, se usa el bucle for para recorrer el array u mostrar cada registro,
    de la glucosa tomada por el prompt.
    */

}
ingresarGlucosa()