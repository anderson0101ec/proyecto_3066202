const API_URL = "https://localhost:3000/api/equipos";

//Metodos CRUT para interactuar con la API  equipos
async function obtenerEquipo() {
    const res = await fetch(API_URL);
    const equipos = await res.json();
    return equipos; 
}

async function crearEquipo() {
    const res = await fetch(API_URL,{

        method:'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
});
    return await res.json()
}
async function actualizarEquipo() {
    const res = await fetch(`${API_URL}/${id}`,{

        method:'PUT',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
});
    return await res.json()
}
async function eliminarEquipo() {
    const res = await fetch(`${API_URL}/${id}`,{
        method:'DELETE',
});
    return await res.json()
}

//refencias a los elementos del DOM 
const contenedorCards = document.getElementById('contenedorCards');
const templateCard = document.getElementById('templateCard');
const datoForm = document.getElementById('');
const nombre = document.getElementById('');
const btnCancelar = document.getElementById('');

//mostrar equipos al cargar la pagina en el template
async function mostrarEquipo() {
    contenedorCards.innerHTML = '';
    const equipos = await obtenerEquipo();
    equipos.forEach(equipo =>{
        const clone = templateCard.content.cloneNode(true);
        clone.querySelector('').textContent = equipos.nombre_equipo;
        clone.querySelector(''). onclick = () => cargarEquipoParaEditar(equipo);
        clone.querySelector(''). onclick = () => eliminarEquipoHandler(equipo.id_equipo);
        contenedorCards.appendChild(clone);
    })
    
}
// Guardar y actualizar equipos
datoForm.onsubmit = async(e) => {
    e.preventDefault();
    const data = {nombre_equipo: nombre.value };
    if (id_equipo.value){
        await actualizarEquipo(id_equipo.value, data);
    } else{
        await crearEquipo(data);
    }
    datoForm.rest();
    id_equipo.value='';
    await mostrarEquipo();

}

//cancelar edicion
btnCancelar.onclick =() => {
    datoForm.rest();
    id_equipo.value = '';
}

//cargar equipo para editar
async function cargarEquipoParaEditar(equipo) {
    id_equipo.value = equipo.id_equipo;
    nombre.value = equipo.nombre_equipo
}

// Eliminar equipo
async function eliminarEquipoHandler(id) {
    if (confirm('¿Estas seguro de eliminar este equipo ?')){
        await eliminarEquipo(id)
    }
    
}
mostrarEquipo();

















