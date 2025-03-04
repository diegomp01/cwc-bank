document.addEventListener('DOMContentLoaded', function() {
    // Función para el carrusel
    const carousel = {
        items: document.querySelectorAll('.carousel-item'),
        indicators: document.querySelectorAll('.indicator'),
        currentIndex: 0,

        init: function() {
            // Configurar los indicadores
            this.indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    this.goToSlide(index);
                });
            });

            // Iniciar carrusel automático
            this.autoPlay();
        },

        goToSlide: function(index) {
            // Ocultar slide actual
            this.items[this.currentIndex].classList.remove('active');
            this.indicators[this.currentIndex].classList.remove('active');

            // Activar nuevo slide
            this.currentIndex = index;
            this.items[this.currentIndex].classList.add('active');
            this.indicators[this.currentIndex].classList.add('active');
        },

        nextSlide: function() {
            let newIndex = this.currentIndex + 1;
            if (newIndex >= this.items.length) {
                newIndex = 0;
            }
            this.goToSlide(newIndex);
        },

        autoPlay: function() {
            setInterval(() => {
                this.nextSlide();
            }, 5000); // Cambiar cada 5 segundos
        }
    };

    // Inicializar carrusel
    carousel.init();

    // Función para alternar la visibilidad del saldo
    const toggleSaldo = document.querySelector('.saldo-disponible img');
    const saldoValue = document.querySelector('.saldo-disponible h2');
    let saldoVisible = true;

    toggleSaldo.addEventListener('click', function() {
        if (saldoVisible) {
            saldoValue.innerHTML = '$<span>•••••</span><sup>••</sup>';
        } else {
            saldoValue.innerHTML = '$<span>00</span><sup>00</sup>';
        }
        saldoVisible = !saldoVisible;
    });

    // Manejo del tema (claro/oscuro)
    const temaClaro = document.querySelector('[alt="Tema Claro"]');
    const temaOscuro = document.querySelector('[alt="Tema Oscuro"]');

    temaClaro.addEventListener('click', function() {
        temaClaro.classList.add('hidden');
        temaOscuro.classList.remove('hidden');
        document.body.classList.add('dark-theme');
    });

    temaOscuro.addEventListener('click', function() {
        temaOscuro.classList.add('hidden');
        temaClaro.classList.remove('hidden');
        document.body.classList.remove('dark-theme');
    });
});