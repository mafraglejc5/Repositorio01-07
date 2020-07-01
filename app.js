let fs = require ("fs")  ;  //filesistem lee y escribe archivos
//console.log(fs)
let ListaDeTareas = fs.readFileSync('./tareas.json', 'utf-8')
let tareas = JSON.parse(ListaDeTareas)
//console.log(tareas)
//let texto = fs.readFileSync('./texto.txt','utf-8') //leo contenido de archivo
//console.log(texto)
let process = require ("process");
let  comando = process.argv [2] //argv toma dato de la consola y lo ejecuta en el codigo, devuelve un array de posiciones

switch(comando){
    case 'listar':
       for  (let i=0; i<tareas.length;i++){
       console.log('Titulo:' + tareas[i].titulo)
    }
    //console.log('mostrar lista de tareas')
        break
    case 'agregar':
        let nuevoTitulo = process.argv[3]
        let nuevaTarea = {
        titulo: nuevoTitulo,
        estado: "pendiente"
    }
     tareas.push(nuevaTarea);
    let nuevaListaDeTareas = JSON.stringify(tareas)
     fs.writeFileSync('./tareas.json',nuevaListaDeTareas,'utf-8')
        break
         case undefined:
        //console.log('debes escribir un comando')
        break
}
