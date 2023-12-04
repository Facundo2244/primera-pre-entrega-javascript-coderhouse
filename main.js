var nombreprofesor = prompt("Por favor ingrese su nombre")

var cantidadpromedios = parseInt(prompt("Ingrese cantidad de promedios a calcular"))
while (isNaN(cantidadpromedios)){
    cantidadpromedios = parseInt(prompt("El número ingresado es inválido, por favor ingrese el valor en DÍGITOS."))
} 


for (let iterador = 0; iterador < cantidadpromedios; iterador++){
    var nombrealumno = prompt("Por favor ingrese el nombre el alumno")
    var cantidadnota = parseInt(prompt("Cuántas notas tiene"+ " "+ nombrealumno))
    while (isNaN(cantidadnota)){
        cantidadnota = parseInt(prompt("El número ingresado es inválido, por favor ingrese el valor en DÍGITOS."))
    } 
    var contadornotas = 1
    var puntaje = 0
    while (contadornotas <= cantidadnota){
        var nota = parseInt(prompt("por favor ingrese la nota n°"+ " " + String(contadornotas)))
        while (isNaN(nota) || (nota < 1 || nota >10)){
            nota = parseInt(prompt("La nota ingresada es inválida, por favor ingrese un valor entre 1 y 10 expresado en DÍGITOS."))
        }
        var contadornotas = contadornotas + 1
        var puntaje = puntaje + nota
       
    }
    console.log("El promedio de", nombrealumno ,"es:", promedio(puntaje,cantidadnota),". Con dicho promedio, ", nombrealumno , condicion (promedio(puntaje,cantidadnota)), "la materia." ) 
   
}
console.log("Muchas gracias por elegirnos profe", nombreprofesor,". Te esperamos nuevamente.")



function promedio (puntajetotal,cantidadnotas) {
    resultado = puntajetotal / cantidadnotas
    return resultado
}

function condicion (promedio) {
    prom = "promociona"
    reg = "regulariza"
    desap = "desaprueba"
    if (promedio >= 7){
        return prom;
    }
    if (promedio < 4){
        return desap;
    }
    if (promedio > 3 && promedio < 7){
        return reg;
    }
}
