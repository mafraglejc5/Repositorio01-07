function doble(numero){
    return numero * 2
}
function triple(numero){
    return numero * 3
}
function apply(numero, funcion){
    return funcion(numero)
}
console.log(apply(2, doble))