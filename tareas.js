let fs = require('fs'); //requiero el modulo File System de node

let moduloTareas = { //creo un objeto literal llamado moduloTareas

    archivo:'./tareas.json', //a la propiedad 'archivo' le asigno la ruta del json que voy a usar como base de datos

    leerJSON:function(){ //a la propiedad leerJSON le asigno una función, por consiguiente será un método del moduloTareas

    let listaDeTareas = fs.readFileSync(this.archivo,'utf-8')  //leo el JSON con el método 'readFileSync' de fs
    return JSON.parse(listaDeTareas) //retorno el JSON parseado, es decir convertido en un array de objetos
},
    escribirJSON:function(nuevoTitulo){ //a la propiedad escribirJSON le asigno una función, por consiguietne será un método del móduloTareas. El mismo recibe por parámetro el titulo de la nueva tarea que se quiere agregar

        let nuevaTarea ={ //creo un objeto literal
            titulo: nuevoTitulo, //a la propiedad titulo le asigino lo que me viene por el paramero correspondiente
            estado: "pendiente" //por defecto la tarea queda con el string 'pendiente'
        }

        let tareas = this.leerJSON(); //por medio del metodo leerJSON traigo el JSON parseado (uso la palabra reservada 'this' para hacer referencia al objeto literal 'moduloTareas')

        tareas.push(nuevaTarea); //agrego la nueva tarea al array de tareas utilizndo el método .push() que precisamente permite agregar elementos a un array al final del mismo

        let nuevaListaDeTareas = JSON.stringify(tareas) //convierto el array de objetos a formato JSON utitlizando el método stringify(), al cual le paso por parámetro el array que deseo convertir

        fs.writeFileSync(this.archivo,nuevaListaDeTareas,'utf-8') //utilizando el método 'writeFileSync' del módulo 'fs' escribo el nuevo array con la tarea añadida en el archivo. Para ello le paso como parámetro: la ruta del archivo donde quiero guardar la información, la información que deseo guardar, y la codificación de caracteres.
    },
    filtrarJSON:function(filtro){ //a la propiedad filtrarJSON le asigno una función, por consiguietne será un método del móduloTareas. El mismo recibe por parámetro el estado por el cual quiero filtrar las tareas a mostrar

        let tareas = this.leerJSON(); //por medio del metodo leerJSON traigo el JSON parseado (uso la palabra reservada 'this' para hacer referencia al objeto literal 'moduloTareas')

        let listaFiltrada = tareas.filter(function(tarea){ //aplico el método .filter() al array de objetos. Este recibe como parámetro un callback que a su vez recibe como parámetro cada elemento del array a filtrar

            let filtrado = tarea.estado == filtro //manifiesto el critero de filtrado, que en este caso sería que la propiedad estado de cada tarea sea igual a estado expresado como filtro

            return filtrado //retorno el array filtrado según el criterio elegido
        })
        return listaFiltrada; //retorno el array filtrado según el criterio elegido
    }
}
module.exports = moduloTareas //exporto el módulo para este esté disponible para ser requerido.