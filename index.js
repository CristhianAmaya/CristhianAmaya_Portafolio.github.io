// Selecciona todos los divs con la clase 'nivel'
const niveles = document.querySelectorAll('.nivel');

niveles.forEach(nivelDiv => {
    // Obtén el texto dentro del div y quita el porcentaje
    const porcentaje = parseInt(nivelDiv.textContent); // Convierte "80%" o "100%" a 80 o 100

    // Establece el ancho usando el valor obtenido
    nivelDiv.style.width = porcentaje + '%'; // Asigna el valor correspondiente
});

let educationVisible = false;  // Variable para el estado de 'Formación Profesional'
let coursesVisible = false;    // Variable para el estado de 'Cursos y Diplomados'

function mostrarFormacion() {
    const formacion = document.getElementById("formacion");
    const cursos = document.getElementById("cursos");
    
    // Si 'Formación Profesional' está visible, se oculta. Si no, se muestra y oculta el otro
    if (educationVisible) {
        formacion.style.display = "none";
        educationVisible = false;
    } else {
        formacion.style.display = "block";
        cursos.style.display = "none"; // Asegura que el otro contenido esté oculto
        educationVisible = true;
        coursesVisible = false;
    }
}

function mostrarCursos() {
    const formacion = document.getElementById("formacion");
    const cursos = document.getElementById("cursos");
    
    // Si 'Cursos y Diplomados' está visible, se oculta. Si no, se muestra y oculta el otro
    if (coursesVisible) {
        cursos.style.display = "none";
        coursesVisible = false;
    } else {
        cursos.style.display = "block";
        formacion.style.display = "none"; // Asegura que el otro contenido esté oculto
        coursesVisible = true;
        educationVisible = false;
    }
}
