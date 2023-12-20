function ingresarPresionArterial(){
    //Definicion de la funcion
    let registrosPresionArterial= [];
    //Se crea un array paa almacenar los registros
    const MAXREGISTROS = 5;
    //Se establece un numero maximo de registros que se pueden ingresar
    
    for(let i = 1 ; i <= MAXREGISTROS ; i++){
        //Se crea un bucle para ingresar los datos
        let sistolica=parseInt(prompt("Ingrese la presion arterial sitolica (registro " + i + "):"));
        let diastolica= parseInt(prompt("Ingrese la presiom arterial diastolica (registro " + i + "):"));
        //Soliciar al usuario ingresar los datos
        if(isNaN(sistolica) || isNaN(diastolica)){
            alert("Por favor ingresa numeros validos");
            i--;
            //Se decremente para poder repetir la misma iteracion
            continue;
        }
        //Validacion de entrada y almacenamianto, para asegurar que los valores que se ingresen sen numero
        let registro = {sistolica, 
            diastolica};
        registrosPresionArterial.push(registro)
        //si las entradas son validas se crea el objeto "registro" y se agrega al final del array
    }

    console.log("Registros de presion arterial: ");
    for(let i = 0 ; i < registrosPresionArterial.length ; i++){
        let registro = registrosPresionArterial[i];
        console.log(
            "Registro " + (i+1) + ": Sistolica = " + registro.sistolica + " , Diastolica = " + registro.diastolica
        );
    }
    /*Mostrar los registros al usuario, se usa el bucle for para recorrer el array u mostrar cada registro,
    tanto sistolico como diastolico
    */

}
ingresarPresionArterial()