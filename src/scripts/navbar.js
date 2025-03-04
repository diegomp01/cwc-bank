document.addEventListener('DOMContentLoaded', () => {
    const navbarContainer = document.getElementById('navbarContainer');
    const navItems = document.querySelectorAll('.nav-item');
    let isAnimating = false;

    // Función para actualizar la posición del recorte
    const updateCutoutPosition = (activeIndex) => {
        const cutout = document.querySelector('.cutout');
        cutout.style.left = `calc(${20 * activeIndex}% + 10%)`;
    };

    // Función para manejar el clic en los items del navbar
    const handleItemClick = (e) => {
        e.preventDefault();
        const clickedItem = e.currentTarget;

        if (!clickedItem.classList.contains('active') && !isAnimating) {
            isAnimating = true;

            // Remover la clase active del item actual
            document.querySelector('.nav-item.active').classList.remove('active');

            // Agregar la clase active al nuevo item
            clickedItem.classList.add('active');

            // Actualizar la posición del recorte
            const activeIndex = Array.from(navItems).indexOf(clickedItem);
            updateCutoutPosition(activeIndex);

            // Desactivar la animación después de completarse
            setTimeout(() => {
                isAnimating = false;
            }, 600);

            // Actualizar la URL (opcional, simula el comportamiento de Next.js)
            history.pushState({}, '', clickedItem.getAttribute('href'));
        }
    };

    // Agregar event listeners a los items
    navItems.forEach(item => {
        item.addEventListener('click', handleItemClick);
    });

    // Configuración inicial
    const activeIndex = Array.from(navItems).findIndex(item =>
        item.classList.contains('active')
    );
    updateCutoutPosition(activeIndex);
});