// 1. TUS DATOS (Giro Médico - Consultorios Yza)
const dataCategorias = [
    {
        id: 1,
        titulo: "Atención Médica",
        servicios: [
            { 
                id: 101, 
                nombre: "Consulta General", 
                desc: "Valoración médica completa para diagnóstico y tratamiento de enfermedades comunes.", 
                img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80" 
            },
            { 
                id: 102, 
                nombre: "Certificado Médico", 
                desc: "Expedición de certificados de salud para trámites escolares, laborales o deportivos.", 
                img: "https://images.unsplash.com/photo-1576091160550-217358c7db81?auto=format&fit=crop&w=600&q=80" 
            },
            { 
                id: 103, 
                nombre: "Control de Embarazo", 
                desc: "Seguimiento básico y monitoreo de signos vitales para la futura mamá.", 
                img: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=600&q=80" 
            }
        ]
    },
    {
        id: 2,
        titulo: "Enfermería y Procedimientos",
        servicios: [
            { 
                id: 201, 
                nombre: "Inyecciones", 
                desc: "Aplicación intramuscular o intravenosa (requiere receta médica).", 
                img: "https://images.unsplash.com/photo-1579165466741-7f35a4755657?auto=format&fit=crop&w=600&q=80" 
            },
            { 
                id: 202, 
                nombre: "Curaciones Menores", 
                desc: "Limpieza de heridas superficiales, retiro de puntos y vendajes.", 
                img: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=600&q=80" 
            },
            { 
                id: 203, 
                nombre: "Nebulizaciones", 
                desc: "Terapia respiratoria para asma o bronquitis (incluye mascarilla simple).", 
                img: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=600&q=80" 
            }
        ]
    },
    {
        id: 3,
        titulo: "Análisis y Chequeos",
        servicios: [
            { 
                id: 301, 
                nombre: "Toma de Presión", 
                desc: "Monitoreo rápido de presión arterial para control de hipertensión.", 
                img: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&fit=crop&w=600&q=80" 
            },
            { 
                id: 302, 
                nombre: "Prueba de Glucosa", 
                desc: "Medición capilar instantánea para control de diabetes.", 
                img: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=600&q=80" 
            }
        ]
    }
];

// 2. RENDERIZADO DEL ACORDEÓN
const container = document.getElementById('accordion-container');

dataCategorias.forEach(cat => {
    // Crear Item de Acordeón
    const item = document.createElement('div');
    item.className = 'accordion-item';

    // Crear Header
    const header = document.createElement('div');
    header.className = 'accordion-header';
    header.innerHTML = `<span>${cat.titulo}</span> <span>▼</span>`;
    
    // Crear Body y Grid de Servicios
    const body = document.createElement('div');
    body.className = 'accordion-body';
    
    const grid = document.createElement('div');
    grid.className = 'services-grid';

    // Generar los "Chips" de servicios
    cat.servicios.forEach(serv => {
        const chip = document.createElement('div');
        chip.className = 'service-chip';
        chip.innerText = serv.nombre;
        // Evento Click en el Chip -> Abrir Modal
        chip.addEventListener('click', () => openModal(serv));
        grid.appendChild(chip);
    });

    body.appendChild(grid);
    item.appendChild(header);
    item.appendChild(body);
    container.appendChild(item);

    // Evento Click en el Header -> Abrir/Cerrar Acordeón
    header.addEventListener('click', () => {
        const isOpen = body.style.maxHeight;
        
        // Opcional: Cerrar otros acordeones antes de abrir este
        document.querySelectorAll('.accordion-body').forEach(el => el.style.maxHeight = null);

        if (!isOpen) {
            body.style.maxHeight = body.scrollHeight + "px"; // Altura dinámica
        }
    });
});

// 3. LÓGICA DEL MODAL
const modal = document.getElementById('service-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const closeBtn = document.querySelector('.close-btn');

function openModal(servicio) {
    modalTitle.innerText = servicio.nombre;
    modalDesc.innerText = servicio.desc;
    
    // AQUÍ ESTABA EL DETALLE: Asignamos la URL real a la imagen
    modalImg.src = servicio.img; 
    
    modal.style.display = 'flex';
}

// Cerrar Modal
closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = (e) => {
    if (e.target == modal) modal.style.display = 'none';
}