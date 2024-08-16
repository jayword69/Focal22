document.addEventListener('DOMContentLoaded', function() {
    // Navegación suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Formulario de contacto
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Gracias por tu mensaje. Te contactaremos pronto.');
        form.reset();
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target.querySelector('img');
                img.src = img.dataset.src;
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    imageUrls.forEach(url => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        const img = document.createElement('img');
        img.dataset.src = url;  // Usamos data-src en lugar de src
        img.alt = 'Imagen de galería';
        galleryItem.appendChild(img);
        gallery.appendChild(galleryItem);
        observer.observe(galleryItem);
    });
 // Inicializar el mapa
    var map = L.map('mapa').setView([51.505, -0.09], 13); // Reemplaza con las coordenadas correctas
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map) // Reemplaza con las coordenadas correctas
        .bindPopup('Estudio Focal22')
        .openPopup();

});
document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
    // ... (resto de tu código JavaScript)
});
