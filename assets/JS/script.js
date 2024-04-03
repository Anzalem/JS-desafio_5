const tareas = [
    {
        id: 1,
        descripcion: "Comprar comida",
        estado: false
    },

    {
        id: 2,
        descripcion: "Cocinar",
        estado: false
    },

    {
        id: 3,
        descripcion: "Comer",
        estado: false
    }
]


const tablaTareas = document.getElementById('tabla')
const totalTareas = document.getElementById('total')
const tareasRea = document.getElementById('realizadas')
const btnAgregar = document.getElementById('add')
const tareaInput = document.getElementById('nuevaTarea')

function mostrarTareas() {
    tablaTareas.innerHTML = '';
    for (let tarea of tareas){

        template =   
        `
        <li>
            <p> ${tarea.id} </p>
            <p> ${tarea.descripcion} </p>
            <input type="checkbox" onclick = "cambiarEstado(${tarea.id})">
            <button onclick = "borrar(${tarea.id})"> X </button>
        </li>    
        `
        tablaTareas.innerHTML += template   
    }
     
}

function addTarea(){
    const descripcion = tareaInput.value
    const nuevaTarea = {
        id: tareas.length + 1,
        descripcion: descripcion,
        estado: false
    }
    tareas.push(nuevaTarea);
    mostrarTareas();
    actTotalTareas();
    inputTarea.value = '';
}

function actTotalTareas(){
    totalTareas.innerHTML = tareas.length
}

function borrar (id) {
    const index = tareas.findIndex((ele) => ele.id == id)
    tareas.splice(index,1)
    mostrarTareas();
    actTotalTareas();
}

function contTareasTerminadas(){
    let cont = 0;
    for(let tarea of tareas){
        if(tarea.estado){
            cont ++;
        }
    }
    tareasRea.innerHTML = cont
}

function cambiarEstado(id){
    const tareaEncontrada = tareas.find( tarea => tarea.id === id )
    if(!tareaEncontrada.estado){
        tareaEncontrada.estado = true
    }else{
        tareaEncontrada.estado = false
    }
        
    contTareasTerminadas();
}

btnAgregar.addEventListener('click', addTarea);


actTotalTareas();
mostrarTareas();
contTareasTerminadas();
    

