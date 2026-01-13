document.addEventListener("DOMContentLoaded", () => {

    // --- 1. DATOS DE SERVICIOS (Texto exacto solicitado) ---
    const categorias = [
        {
            id: 1,
            titulo: "Atención médica <span style='color:#00E600'>general.</span>",
            imgCover: "https://image.farmaciasyza.mx/lib/fe2f117171640675761075/m/1/f339fb9a-5b24-47cf-97f4-62f8d93ce919.png",
            servicios: [
                { nombre: "Consulta médica", desc: "Atención personalizada para valorar tu estado de salud y ofrecerte el tratamiento adecuado.", img: "https://image.farmaciasyza.mx/lib/fe2f117171640675761075/m/1/9e8ce0cd-f0f3-4965-8b21-cd31abef1d67.png",icon: "https://image.farmaciasyza.mx/lib/fe2f117171640675761075/m/1/1310a6b8-fc72-4e3a-953f-777adde8d9ca.png"  },
                { nombre: "Certificado médico", desc: "Documento oficial emitido por un profesional para acreditar tu buen estado de salud.", img: "https://image.farmaciasyza.mx/lib/fe2f117171640675761075/m/1/32dd61cf-e01b-46c9-94ae-ce996b71ff3b.png", icon: "https://image.farmaciasyza.mx/lib/fe2f117171640675761075/m/1/be273b9e-9737-4edc-bb76-dadc32dfeea6.png" }
            ]
        },
        {
            id: 2,
            titulo: "Procedimientos y <span style='color:#00E600'>tratamientos.</span>",
            imgCover: "https://image.farmaciasyza.mx/lib/fe2f117171640675761075/m/1/9160fcb0-11ca-4b4d-b862-c13b8e5a1b55.png",
            servicios: [
                { nombre: "Aplicación de inyección", desc: "Servicio seguro y profesional para la administración correcta de medicamentos inyectables.", img: "https://image.farmaciasyza.mx/lib/fe2f117171640675761075/m/1/cce4dd7a-403c-4594-8412-316f10835c15.png", icon: "https://image.farmaciasyza.mx/lib/fe2f117171640675761075/m/1/e9526f80-f9f8-49ae-87c7-5daf4865e767.png" },
                { nombre: "Retiro de puntos quirúrgicos", desc: "Procedimiento sencillo y seguro, realizado por personal capacitado para garantizar una correcta cicatrización.", img: "https://image.farmaciasyza.mx/lib/fe2f117171640675761075/m/1/ad1d7852-c219-475b-a3b2-59dc2f519673.png", icon: "https://image.farmaciasyza.mx/lib/fe2f117171640675761075/m/1/cc7ef935-65ee-46bd-a2f1-a7ccfa7eac5c.png" },
                { nombre: "Curación de herida", desc: "Atención especializada para limpiar, proteger y favorecer la recuperación de heridas.", img: "https://image.farmaciasyza.mx/lib/fe2f117171640675761075/m/1/fd737720-db40-4dc3-afd3-e4b526599d09.png", icon: "https://image.farmaciasyza.mx/lib/fe2f117171640675761075/m/1/e0f348a5-70a3-4b69-a99d-82ed8f192e69.png" }
            ]
        },
        {
            id: 3,
            titulo: "Control y monitoreo <span style='color:#00E600'>de salud.</span>",
            imgCover: "https://image.farmaciasyza.mx/lib/fe2f117171640675761075/m/1/e4cb9876-9457-4788-952b-87a9e98b411d.png",
            servicios: [
                { nombre: "Toma de presión arterial", desc: "Control rápido y preciso para detectar alteraciones y cuidar tu salud cardiovascular.", img: "https://image.farmaciasyza.mx/lib/fe2f117171640675761075/m/1/b04ea5f1-d1b4-473a-81eb-221744e7b3ce.png", icon: "https://image.farmaciasyza.mx/lib/fe2f117171640675761075/m/1/f045f8a1-ded4-40ca-a33f-6ae6d4256962.png" },
                { nombre: "Prueba para detectar azúcar", desc: "Monitoreo confiable para conocer tus niveles de glucosa y prevenir complicaciones.", img: "https://image.farmaciasyza.mx/lib/fe2f117171640675761075/m/1/f322525e-ba58-40fd-ab7c-14ff5df13752.png", icon: "https://image.farmaciasyza.mx/lib/fe2f117171640675761075/m/1/0ad955d2-43ef-45f9-a3f1-78d28915ae85.png" }
            ]
        },
        {
            id: 4,
            titulo: "Apoyo <span style='color:#00E600'>diagnóstico.</span>",
            imgCover: "https://image.farmaciasyza.mx/lib/fe2f117171640675761075/m/1/16544fd5-6998-4899-a1cf-502466e53cc4.png",
            servicios: [
                { nombre: "Interpretación de estudios médicos", desc: "Registro rápido de las principales medidas corporales del paciente.", img: "https://image.farmaciasyza.mx/lib/fe2f117171640675761075/m/1/86d97010-c369-45f3-ace3-3e9a50472897.png", icon:"https://image.farmaciasyza.mx/lib/fe2f117171640675761075/m/1/919759c8-3df5-4909-b5e7-27f1fa157edc.png" }
            ]
        }
    ];

    // --- 2. GENERAR GRID DE TARJETAS ---
    const container = document.getElementById('services-grid-container');
    
    categorias.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'service-card';
        
        // Creamos HTML interno: Imagen + Título + Flechita + Submenú oculto
        card.innerHTML = `
                <img src="${cat.imgCover}" class="card-header-img" alt="${cat.titulo.replace(/<[^>]*>?/gm, '')}">            <div class="card-content">
                <h3 class="card-title">${cat.titulo}</h3>
                <div class="expand-indicator"><i class="fas fa-chevron-down"></i></div>
            </div>
            <div class="card-submenu">
                </div>
        `;

        // Generar chips dentro
        const submenu = card.querySelector('.card-submenu');
        cat.servicios.forEach(serv => {
            const chip = document.createElement('div');
            chip.className = 'submenu-chip';
            chip.innerHTML = `<i class="fas fa-arrow-right" style="margin-right:8px; color:#00E600"></i> ${serv.nombre}`;
            
            // Click en Chip -> Abre Modal
            chip.addEventListener('click', (e) => {
                e.stopPropagation(); // Evita que se cierre la tarjeta
                openModal(serv);
            });
            submenu.appendChild(chip);
        });

        // Click en Tarjeta -> Expandir
        card.addEventListener('click', () => {
            // Cerrar otras tarjetas (opcional, para mantener orden)
            document.querySelectorAll('.service-card').forEach(c => {
                if (c !== card) c.classList.remove('expanded');
            });
            
            card.classList.toggle('expanded');
        });

        container.appendChild(card);
    });

    // --- 3. LÓGICA DE MODAL ---
    const modal = document.getElementById('service-modal');
    function openModal(servicio) {
        document.getElementById('modal-title').innerHTML = servicio.nombre + "<span style='color:#00E600'>.</span>";
        document.getElementById('modal-desc').innerText = servicio.desc;
        document.getElementById('modal-img').src = servicio.img;
        const iconElement = document.getElementById('modal-icon-img');
        iconElement.src = servicio.icon;
        iconElement.style.display = 'block';
        modal.style.display = 'flex';
    }

    // Cerrar Modal
    document.querySelector('.close-btn-corner').onclick = () => modal.style.display = 'none';
    document.querySelector('.close-btn-action').onclick = () => modal.style.display = 'none';
    window.addEventListener('click', (e) => {
        if(e.target == modal) modal.style.display = 'none';
    });

    // --- 4. ANIMACIONES SCROLL (AJUSTADO PARA QUE ESPERE AL SCROLL) ---
    const observerOptions = {
        root: null,        // Usa la ventana del navegador
        rootMargin: '0px', // Sin márgenes extra
        threshold: 0.25    // IMPORTANTE: La animación solo inicia cuando el 25% del elemento es visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Solo si está intersectando (entrando en pantalla)
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Deja de observar para ahorrar recursos
            }
        });
    }, observerOptions);

    // Seleccionamos todo lo que se debe animar
    // Agregamos .services-section explícitamente para asegurar la cascada de tarjetas
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll, .services-section, .promo-section, .map-section');
    
    elementsToAnimate.forEach(el => {
        // Aseguramos que empiecen ocultos (por si el CSS tardó en cargar)
        el.classList.add('animate-on-scroll'); 
        observer.observe(el);
    });

    // --- 5. CARRUSEL LOGIC ---
    const track = document.querySelector('.carousel-track');
    if(track){
        const slides = Array.from(track.children);
        const nextBtn = document.querySelector('.btn-next');
        const prevBtn = document.querySelector('.btn-prev');
        const dots = Array.from(document.querySelectorAll('.carousel-indicator'));
        let currentIndex = 0;

        const updateCarousel = (index) => {
            track.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach(d => d.classList.remove('current-slide'));
            dots[index].classList.add('current-slide');
            currentIndex = index;
        }

        nextBtn.addEventListener('click', () => {
            let nextIndex = currentIndex + 1;
            if (nextIndex >= slides.length) nextIndex = 0;
            updateCarousel(nextIndex);
        });

        prevBtn.addEventListener('click', () => {
            let prevIndex = currentIndex - 1;
            if (prevIndex < 0) prevIndex = slides.length - 1;
            updateCarousel(prevIndex);
        });
        
        // Autoplay
        setInterval(() => nextBtn.click(), 5000);
    }
});