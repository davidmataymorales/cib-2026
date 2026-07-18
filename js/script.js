// Tailwind script already loaded

function initializeTailwind() {
    // Already configured via CDN
}

// Descripción de áreas temáticas
const areas = [
    {
        title: "Biotecnología Agrícola",
        icon: "🌱",
        desc: "Mejoramiento genético, biopesticidas, biofertilizantes y agricultura de precisión."
    },
    {
        title: "Biomedicina",
        icon: "🧬",
        desc: "Diagnóstico molecular, terapia génica, biofármacos, vacunas e ingeniería de tejidos."
    },
    {
        title: "Ecología y sostenibilidad",
        icon: "🌍",
        desc: "Exploración de la megadiversidad boliviana"
    },
    {
        title: "Bioética y regulación",
        icon: "⚖️",
        desc: "Marcos normativos, ética en biotecnología y propiedad intelectual."
    },
    {
        title: "Emprendimiento e innovación",
        icon: "🚀",
        desc: "Start-ups, capital de riesgo, transferencia tecnológica y modelos de negocio biotech."
    },
    {
        title: "Educación y formación",
        icon: "🎓",
        desc: "Programas académicos, becas, pasantías internacionales y capacitación especializada."
    }
]

// Descripción de los ponentes
const speakers = [
    {
        name: "Dra. Elena Vargas",
        role: "Directora, Instituto Max Planck",
        country: "Alemania",
        img: "https://picsum.photos/id/64/300/300"
    },
    {
        name: "Dr. Carlos Mendoza",
        role: "Profesor Titular, UMSA",
        country: "Bolivia",
        img: "https://picsum.photos/id/201/300/300"
    },
    {
        name: "Prof. Aisha Khan",
        role: "Investigadora Principal",
        country: "India",
        img: "https://picsum.photos/id/201/300/300"
    },
    {
        name: "Dr. Tomás Rivera",
        role: "CEO, BioAndes Labs",
        country: "Chile",
        img: "https://picsum.photos/id/64/300/300"
    }
]

// Desarrollo de las preguntas frecuentes
const faqs = [
    {
        q: "¿Cuáles son las fechas del congreso?",
        a: "El evento se realizará del 10 al 12 de diciembre de 2026 en Santa Cruz, Bolivia."
    },
    {
        q: "¿Hay modalidades virtuales?",
        a: "Sí, algunas sesiones serán transmitidas en vivo y habrá acceso a grabaciones para inscritos."
    },
    {
        q: "¿Cómo puedo presentar un trabajo?",
        a: "A través del formulario de envío de resúmenes disponible en la sección de Registro."
    }
]

// Render de boxes de áreas temáticas
function renderAreas() {
    const container = document.getElementById("areas-grid")
    container.innerHTML = ""
    
    areas.forEach(area => {
        const card = document.createElement("div")
        card.className = `bg-white p-10 rounded-3xl card-hover border border-transparent`
        card.innerHTML = `
            <div class="text-6xl mb-6">${area.icon}</div>
            <h3 class="text-2xl font-semibold heading-font mb-3">${area.title}</h3>
            <p class="text-[#64748B]">${area.desc}</p>
        `
        container.appendChild(card)
    })
}

// Render de boxes de ponentes
function renderSpeakers() {
    const container = document.getElementById("speakers-grid")
    container.innerHTML = ""
    
    speakers.forEach(speaker => {
        const card = document.createElement("div")
        card.className = `bg-white rounded-3xl overflow-hidden card-hover border border-transparent`
        card.innerHTML = `
            <img src="${speaker.img}" class="w-full h-64 object-cover">
            <div class="p-7">
                <div class="font-semibold text-lg">${speaker.name}</div>
                <div class="text-[#00B4A6] text-sm">${speaker.role}</div>
                <div class="text-xs text-[#64748B] mt-5">${speaker.country}</div>
            </div>
        `
        container.appendChild(card)
    })
}

// Render de boxes de preguntas frecuentes
function renderFAQs() {
    const container = document.getElementById("faq-container")
    container.innerHTML = ""
    
    faqs.forEach((faq, index) => {
        const div = document.createElement("div")
        div.className = "bg-white border border-transparent rounded-3xl p-6 sm:p-8 mx-auto max-w-xl cursor-pointer"
        div.innerHTML = `
            <div class="flex justify-between items-center">
                <div class="font-medium">${faq.q}</div>
                <i class="fa-solid fa-chevron-down transition-transform flex-shrink-0"></i>
            </div>
            <div class="faq-answer hidden mt-6 text-[#64748B]">${faq.a}</div>
        `
        div.onclick = function() {
            const answer = this.querySelector('.faq-answer')
            const icon = this.querySelector('i')
            answer.classList.toggle('hidden')
            icon.classList.toggle('rotate-180')
        }
        container.appendChild(div)
    })
}

// Contador de tiempo antes del congreso
function startCountdown() {
    // Fecha (preliminar) del congreso: 10 de Diciembre 2026 a las 09:00 (hora local)
    const targetDate = new Date("2026-12-10T09:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            // Evento ya pasó
            document.getElementById("days").textContent = "00";
            document.getElementById("hours").textContent = "00";
            document.getElementById("minutes").textContent = "00";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        // Actualizar los números
        document.getElementById("days").textContent = days.toString().padStart(2, '0');
        document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    }

    // Ejecutar inmediatamente al cargar
    updateCountdown();

    // Actualizar cada minuto
    setInterval(updateCountdown, 60000);
}

// Render del menú del celular
function toggleMobileMenu() {
    const menu = document.getElementById("mobile-menu")
    menu.classList.toggle("hidden")
}

// Integrar navegación suave
function navigateToSection(section) {
    const el = document.getElementById(section)
    if (el) {
        el.scrollIntoView({ behavior: "smooth" })
    }
}

// Accesibilidad de teclado
function setupKeyboard() {
    document.addEventListener('keydown', function(e) {
        if (e.key === "/" && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
            e.preventDefault()
            const search = prompt("Buscar en el sitio (demo):")
            if (search) console.log("Searching for:", search)
        }
    })
}

// Inicialización de todo 
function init() {
    initializeTailwind()

    if (document.getElementById("areas-grid")) renderAreas();
    if (document.getElementById("speakers-grid")) renderSpeakers();
    if (document.getElementById("faq-container")) renderFAQs();

    startCountdown()
    setupKeyboard()
    
    // Efecto de sombra de la barra de navegación
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav')
        if (window.scrollY > 80) {
            nav.classList.add('shadow-lg')
        } else {
            nav.classList.remove('shadow-lg')
        }
    })
    
    console.log('Sitio web cargado con éxito', 'color:#00B4A6; font-family:monospace')
}

// Bootear el sitio
window.onload = init