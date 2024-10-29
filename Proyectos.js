
// Variables para el estado de visibilidad de cada sección de proyectos
let programacionVisible = false;
let diseno2DVisible = false;
let modelado3DVisible = false;
let animacionesVisible = false;

function mostrarProyectos(tipo) {
    const programacion = document.getElementById("proyectos-programacion");
    const diseno2D = document.getElementById("proyectos-diseno2D");
    const modelado3D = document.getElementById("proyectos-modelado3D");
    const animaciones = document.getElementById("proyectos-animaciones");

    if (tipo === "programacion") {
        if (programacionVisible) {
            programacion.style.display = "none";
            programacionVisible = false;
        } else {
            programacion.style.display = "block";
            diseno2D.style.display = "none";
            modelado3D.style.display = "none";
            animaciones.style.display = "none";
            programacionVisible = true;
            diseno2DVisible = false;
            modelado3DVisible = false;
            animacionesVisible = false;
        }
    } else if (tipo === "diseno2D") {
        if (diseno2DVisible) {
            diseno2D.style.display = "none";
            diseno2DVisible = false;
        } else {
            diseno2D.style.display = "block";
            programacion.style.display = "none";
            modelado3D.style.display = "none";
            animaciones.style.display = "none";
            diseno2DVisible = true;
            programacionVisible = false;
            modelado3DVisible = false;
            animacionesVisible = false;
        }
    } else if (tipo === "modelado3D") {
        if (modelado3DVisible) {
            modelado3D.style.display = "none";
            modelado3DVisible = false;
        } else {
            modelado3D.style.display = "block";
            programacion.style.display = "none";
            diseno2D.style.display = "none";
            animaciones.style.display = "none";
            modelado3DVisible = true;
            programacionVisible = false;
            diseno2DVisible = false;
            animacionesVisible = false;
        }
    } else if (tipo === "animaciones") {
        if (animacionesVisible) {
            animaciones.style.display = "none";
            diseno2DVisible = false;
        } else {
            animaciones.style.display = "block";
            programacion.style.display = "none";
            modelado3D.style.display = "none";
            diseno2D.style.display = "none";
            animacionesVisible = true;
            programacionVisible = false;
            modelado3DVisible = false;
            diseno2DVisible = false;
        }
    }
}

// Lista dinámica de proyectos
const proyectos = [];

// Información detallada de cada proyecto
const informacionProyectosProgramacion = {
    proyecto1: {
        video: "https://youtu.be/fTfLZUlQzx4", // Reemplaza con el ID del video en YouTube
        nombre: "Mentals Game Room VR",
        motor: "Unity (C#)",
        area: "Game Programmer y Game Designer",
        descripcion: "Videojuego realizado en VR donde los jugadores podrán explorar un entorno 3D inmteractivo y participar en 3 diferentes juegos de desafíos mentales y velocidad de procesamiento cognitivo."
    },
    proyecto2: {
        video: "https://youtu.be/UZDNRsPIMA0",
        nombre: "ProcrastinApp",
        motor: "Unity (C#)",
        area: "Game Programmer y Game Designer",
        descripcion: "Videojuego realizado en primera persona donde los jugadores podrán aprender como la procrastinación, el ocio y el descanso influye de manera positiva en la vida de las personas. Se incluye un minijuego de baloncesto."
    },
    proyecto3: {
        video: "https://youtu.be/nZj0pdF2Lzc",
        nombre: "GeoTec-Media",
        motor: "Unreal Engine (C++)",
        area: "Game Designer y modelador 3D",
        descripcion: "Simulador 3D para el laboratorio de infraestructura y Geotecnia de la Universidad Militar Nueva Granada, donde los estudiantes tendrán un primer vistazo del laboratorio, reconociendo el entorno a trabajar y los materiales que se utilizarán en el lugar."
    },
    proyecto4: {
        video: "https://www.instagram.com/reel/C90k16khBzN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        nombre: "Caguama Dream",
        motor: "Unity (C#)",
        area: "Game Programmer y Game Designer",
        descripcion: "Videojuego realizado para la “Game Jam 2024 creadores colombia” siendo galardonados con el premio del mejor juego entre los equipos participantes. Actualmente este proyecto se encuentra en desarrollo para ser lanzado al mercado."
    },
    proyecto5: {
        video: "https://youtu.be/KHX0sfZzKRU",
        nombre: "ArtpaintVR",
        motor: "Unity (C#)",
        area: "Game Programmer y Game Designer",
        descripcion: "Simulador de pintura en VR desarrollada en Unity haciendo uso de la tecnología Google CardBoard (VR para Celular), donde los jugadores tendrán la capacidad de pintar un lienzo haciendo uso del movimiento de la vista del aplicativo."
    }
};

const informacionProyectosDiseño2D = {
    proyecto1: {
        nombre: "The Dark Demon Hunter",
        descripcion: "Proyecto de ilustración y diseño gráfico centrado logotipos para historia en Wattpad",
        imagenes: [
            "Proyectos diseño 2D/The dark Demon Hunter/La orden de los nueve clanes.jpg",
            "Proyectos diseño 2D/The dark Demon Hunter/Clan Alakir.jpg",
            "Proyectos diseño 2D/The dark Demon Hunter/Clan Argus.jpg",
            "Proyectos diseño 2D/The dark Demon Hunter/Clan BlackSand.jpg",
            "Proyectos diseño 2D/The dark Demon Hunter/Clan Loaa.jpg",
            "Proyectos diseño 2D/The dark Demon Hunter/Clan Ozunu.jpg",
            "Proyectos diseño 2D/The dark Demon Hunter/Clan Refuu.jpg",
            "Proyectos diseño 2D/The dark Demon Hunter/Clan Shaarj.jpg",
            "Proyectos diseño 2D/The dark Demon Hunter/Clan ShadowMoon.jpg",
            "Proyectos diseño 2D/The dark Demon Hunter/Clan Zhenn.jpg",
            // Añade el resto de las imágenes aquí
        ]
    },
    proyecto2: {
        nombre: "Comic - Pesadilla Infinita",
        descripcion: "Cómic de una historia acerca de un boxeador quien queda en coma después d euna importante pelea.",
        imagenes: [
            "Proyectos diseño 2D/Comic/Portada Pesadilla Infinita.png",
            "Proyectos diseño 2D/Comic/Página 1.png",
            "Proyectos diseño 2D/Comic/Página 2.png",
            "Proyectos diseño 2D/Comic/Página 3.png",
            "Proyectos diseño 2D/Comic/Página 4.png",
            "Proyectos diseño 2D/Comic/Página 5.png"
            // Añade el resto de las imágenes aquí
        ]
    },
    proyecto3: {
        nombre: "Logotipos",
        descripcion: "Logotipos y diseños realizados",
        imagenes: [
            "Proyectos diseño 2D/Logos/Logo Beer Man.png",
            "Proyectos diseño 2D/Logos/LOGO LML FOTOGRAFIA VERTICAL.png",
            "Proyectos diseño 2D/Logos/Logo Mentals Game Room VR.png",
            "Proyectos diseño 2D/Logos/Logo ProcrastinAPP.png",
            "Proyectos diseño 2D/Logos/Logo Queen.jpg",
            "Proyectos diseño 2D/Logos/Logo Luz de amor final.png",
            "Proyectos diseño 2D/Logos/Tarjetas luz de amor.png"
            // Añade el resto de las imágenes aquí
        ]
    }
};

// Información proyectos Modelado 3D
const informacionProyectosModelado3D = {
    proyecto1: {
        nombre: "Modelos 3D",
        descripcion: "Modelos 3D realizados en Maya",
        imagenes: [
            "Proyectos 3D/Modelos 3D/Avocato 2.0.jpg",
            "Proyectos 3D/Modelos 3D/Avocato 1.0.jpg",
            "Proyectos 3D/Modelos 3D/Coliseo.0.jpg",
            "Proyectos 3D/Modelos 3D/Carro Interior.0.jpg",
            "Proyectos 3D/Modelos 3D/Carro Back.0.jpg",
            "Proyectos 3D/Modelos 3D/Carro Front.0.jpg",
            "Proyectos 3D/Modelos 3D/Carro Side.0.jpg",
            "Proyectos 3D/Modelos 3D/Carro Top.0.jpg",
            "Proyectos 3D/Modelos 3D/Carro perspective.0.jpg",
            "Proyectos 3D/Modelos 3D/Tiburon Inferior.jpg",
            "Proyectos 3D/Modelos 3D/Tiburon front.jpg",
            "Proyectos 3D/Modelos 3D/Tiburon Perspective.jpg",
            "Proyectos 3D/Modelos 3D/Tiburon Side.jpg",
            "Proyectos 3D/Modelos 3D/Nave Star wars 1.jpg",
            "Proyectos 3D/Modelos 3D/Nave Star wars 2.jpg"
            // Añade el resto de las imágenes aquí
        ]
    }
};

// Información proyectos Animación 2D y 3D
const informacionProyectosAnimaciones = {
    proyecto1: {
        video: "https://drive.google.com/file/d/1CAWTbDGCcDv_do9JpDlXxA9S4tfEPQk8/view?usp=drive_link", // Reemplaza con el ID del video en YouTube
        nombre: "Destino (Animación 2D)",
        motor: "Krita",
        area: "Animación y Modelado",
        descripcion: "Videojuego realizado en VR donde los jugadores podrán explorar un entorno 3D inmteractivo y participar en 3 diferentes juegos de desafíos mentales y velocidad de procesamiento cognitivo."
    },
    proyecto2: {
        video: "https://drive.google.com/file/d/1Tm_DEZpUAeSBl76rpk0aRyzYfhUsSBsS/view?usp=drive_link",
        nombre: "¿No les ha pasado que? (Animación 3D)",
        motor: "Maya",
        area: "Animación y Modelado",
        descripcion: "Videojuego realizado en primera persona donde los jugadores podrán aprender como la procrastinación, el ocio y el descanso influye de manera positiva en la vida de las personas. Se incluye un minijuego de baloncesto."
    },
    proyecto3: {
        video: "https://youtu.be/LBgRI813bWw",
        nombre: "¡Estoy hasta la llave! (Animación 3D)",
        motor: "Maya",
        area: "Animación y Modelado",
        descripcion: "Simulador 3D para el laboratorio de infraestructura y Geotecnia de la Universidad Militar Nueva Granada, donde los estudiantes tendrán un primer vistazo del laboratorio, reconociendo el entorno a trabajar y los materiales que se utilizarán en el lugar."
    },
};

function mostrarInfoProyecto(id) {
    let proyecto;

    if (programacionVisible) {
        proyecto = informacionProyectosProgramacion[id];
        const contenidoVideo = `<iframe width="100%" height="315" src="${proyecto.video}" frameborder="0" allowfullscreen></iframe>`;
        document.getElementById("contenido-video").innerHTML = contenidoVideo;

        // Mostrar el resto de la información
        const contenidoProyecto = document.getElementById("contenido-proyecto");
        contenidoProyecto.innerHTML = `
            <h4>${proyecto.nombre}</h4>
            <p><strong>Motor y Lenguaje:</strong> ${proyecto.motor}</p>
            <p><strong>Área a cargo:</strong> ${proyecto.area}</p>
            <p><strong>Descripción:</strong> ${proyecto.descripcion}</p>
        `;
    }
    else if (diseno2DVisible) {
        proyecto = informacionProyectosDiseño2D[id];

        // Crear galería de imágenes
        let imagenesHTML = `<div class="carrusel">`;
        proyecto.imagenes.forEach((imagen, index) => {
            imagenesHTML += `<img src="${imagen}" class="carrusel-img" style="display: ${index === 0 ? 'block' : 'none'};">`;
        });
        imagenesHTML += `</div>
            <button onclick="cambiarImagen(0)" class="btn-carrusel">Anterior</button>
            <button onclick="cambiarImagen(1)" class="btn-carrusel">Siguiente</button>`;
        document.getElementById("contenido-video").innerHTML = imagenesHTML;

        // Información adicional del proyecto
        const contenidoProyecto = document.getElementById("contenido-proyecto");
        contenidoProyecto.innerHTML = `
            <h4>${proyecto.nombre}</h4>
            <p><strong>Descripción:</strong> ${proyecto.descripcion}</p>
        `;
    }
    else if (modelado3DVisible) {
        proyecto = informacionProyectosModelado3D[id];
        // Crear galería de imágenes
        let imagenesHTML = `<div class="carrusel">`;
        proyecto.imagenes.forEach((imagen, index) => {
            imagenesHTML += `<img src="${imagen}" class="carrusel-img" style="display: ${index === 0 ? 'block' : 'none'};">`;
        });
        imagenesHTML += `</div>
            <button onclick="cambiarImagen(0)" class="btn-carrusel">Anterior</button>
            <button onclick="cambiarImagen(1)" class="btn-carrusel">Siguiente</button>`;
        document.getElementById("contenido-video").innerHTML = imagenesHTML;

        // Información adicional del proyecto
        const contenidoProyecto = document.getElementById("contenido-proyecto");
        contenidoProyecto.innerHTML = `
            <h4>${proyecto.nombre}</h4>
            <p><strong>Descripción:</strong> ${proyecto.descripcion}</p>
        `;
    }
    else if (animacionesVisible) {
        proyecto = informacionProyectosAnimaciones[id];
        const contenidoVideo = `<iframe width="100%" height="315" src="${proyecto.video}" frameborder="0" allowfullscreen></iframe>`;
        document.getElementById("contenido-video").innerHTML = contenidoVideo;

        // Mostrar el resto de la información
        const contenidoProyecto = document.getElementById("contenido-proyecto");
        contenidoProyecto.innerHTML = `
            <h4>${proyecto.nombre}</h4>
            <p><strong>Motor y Lenguaje:</strong> ${proyecto.motor}</p>
            <p><strong>Área a cargo:</strong> ${proyecto.area}</p>
            <p><strong>Descripción:</strong> ${proyecto.descripcion}</p>
        `;
    }

    const pantalla = document.getElementById("pantalla-proyecto");
    pantalla.style.display = "block";
}

// Cerrar pantalla flotante
function cerrarPantalla() {
    document.getElementById("pantalla-proyecto").style.display = "none";
}

let currentIndex = 0;

function cambiarImagen(cambio) {
    const imagenes = document.querySelectorAll(".carrusel-img");
    imagenes[currentIndex].style.display = "none"; // Oculta imagen actual

    // Cambia el índice para Anterior y Siguiente
    if (cambio === 0) {
        currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length; // Retrocede, con un ajuste para ir a la última imagen si es necesario
    } else {
        currentIndex = (currentIndex + 1) % imagenes.length; // Avanza
    }

    imagenes[currentIndex].style.display = "block"; // Muestra nueva imagen
}
