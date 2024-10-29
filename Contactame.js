// Función para mostrar el modal si el estado es de éxito
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');

    if (status === 'success') {
        document.getElementById('confirmationModal').style.display = 'block';
    }

    // Cierra el modal al hacer clic en el botón de cierre
    document.querySelector('.close-btn').onclick = function() {
        document.getElementById('confirmationModal').style.display = 'none';
    };

    // Cierra el modal al hacer clic fuera del contenido
    window.onclick = function(event) {
        const modal = document.getElementById('confirmationModal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
};