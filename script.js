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

    // Carga dinámica de imágenes en la galería con lazy loading
    const gallery = document.querySelector('.gallery-grid');
    const imageUrls = [
        'gallery1.png',
        'gallery2.png',
        'gallery3.png',
        // Agrega más URLs según sea necesario
    ];

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
});