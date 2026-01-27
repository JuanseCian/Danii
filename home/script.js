const timelineData = [
    {
        fecha: "30 DE SEPTIEMBRE DE 2022",
        titulo: "Mis primeras usurpadas",
        texto: "",
        imagen: [
            "img/2022/usurpada.jpeg",
            "img/2022/usurpada2.jpeg"
        ]
    },
    {
        fecha: "2 DE OCTUBRE",
        titulo: "Nuestra primer salida, con final feliz💕",
        texto: "",
        imagen: [
            "img/2022/salida.jpeg",
            "img/2022/salida2.jpeg"
        ]
    },
    {
        fecha: "7 DE DICIEMBRE DE 2022",
        titulo: "El casamiento de la Mabeeeel",
        texto: "",
        imagen: [
            "img/2022/casamiento_mabel1.jpeg",
            "img/2022/casamiento_mabel2.jpeg",
            "img/2022/casamiento_mabel3.jpeg"
        ]
    },
    {
        fecha: "25 DE DICIEMBRE DE 2022",
        titulo: "Nuestra primera Navidad 🎄",
        texto: "Pasar Navidad juntos fue mágico. Luces, abrazos y la calidez de estar con vos.",
        imagen: "img/navidad.jpg"
    },
    {
        fecha: "31 DE DICIEMBRE DE 2022",
        titulo: "Primer añito nuevo juntos",
        texto: "",
        imagen: [
            "img/2022/anio_nuevo1.jpeg",
            "img/2022/anio_nuevo2.jpeg",
            "img/2022/anio_nuevo3.jpeg"
        ]
    },
    {
        fecha: "15 DE ENERO DE 2023",
        titulo: "Campamento juntitossss",
        texto: "Estaba rodeado de tortas la puta madre",
        imagen: "img/viaje.jpg"
    },
    {
        fecha: "23 DE ENERO 2023",
        titulo: "Picnic y cartasss",
        texto: "",
        imagen: "img/viaje.jpg"
    },
    {
        fecha: "18 DE FEBRERO 2023",
        titulo: "rico?",
        texto: "",
        imagen: "img/viaje.jpg"
    },
    {
        fecha: "22 DE FEBRERO DE 2023",
        titulo: "Tu cumpleanituss",
        texto: "",
        imagen: "img/viaje.jpg"
    },
    {
        fecha: "25 DE FEBRERO DE 2023",
        titulo: "Ultima salidita",
        texto: "",
        imagen: "img/viaje.jpg"
    },
    {
        fecha: "10 DE MARZO DE 2023",
        titulo: "Día de SSSSPAAA",
        texto: "",
        imagen: "img/viaje.jpg"
    },
    {
        fecha: "21 DE MARZO DE 2023",
        titulo: "Zeballos y una Hamburguesitasss",
        texto: "",
        imagen: "img/viaje.jpg"
    },
    ];

    const timeline = document.getElementById("timeline");

    timelineData.forEach((event, index) => {
    const side = index % 2 === 0 ? "left" : "right";

    let imageHTML = "";

    if (Array.isArray(event.imagen)) {
        imageHTML = `
        <div class="carousel">
            ${event.imagen.map((img, i) => `
            <img src="${img}" class="carousel-img ${i === 0 ? 'active' : ''}">
            `).join("")}
            <button class="carousel-btn prev">‹</button>
            <button class="carousel-btn next">›</button>
        </div>
        `;
    } else {
        imageHTML = `<img src="${event.imagen}" alt="${event.titulo}">`;
    }

    const eventHTML = `
        <div class="event ${side}">
        <h3>${event.fecha}</h3>
        <div class="event-content">
            <h2>${event.titulo}</h2>
            <p>${event.texto}</p>
            ${imageHTML}
        </div>
        </div>
    `;

    timeline.innerHTML += eventHTML;
    });

    // Abrir/cerrar eventos
    document.querySelectorAll('.event').forEach(event => {
    event.addEventListener('click', () => {
        event.classList.toggle('active');
    });
    });

    // 🎠 Carrusel
    document.querySelectorAll('.carousel').forEach(carousel => {
    const imgs = carousel.querySelectorAll('.carousel-img');
    const prev = carousel.querySelector('.prev');
    const next = carousel.querySelector('.next');
    let index = 0;

    prev.addEventListener('click', e => {
        e.stopPropagation();
        imgs[index].classList.remove('active');
        index = (index - 1 + imgs.length) % imgs.length;
        imgs[index].classList.add('active');
    });

    next.addEventListener('click', e => {
        e.stopPropagation();
        imgs[index].classList.remove('active');
        index = (index + 1) % imgs.length;
        imgs[index].classList.add('active');
    });
    });

// 📖 Libro
const cover = document.getElementById("cover");
const book = document.getElementById("book");
const startStory = document.getElementById("startStory");
const bookWrapper = document.getElementById("book-wrapper");

cover.addEventListener("click", () => {
    book.classList.add("open");
});

startStory.addEventListener("click", () => {
    book.classList.add("fast-flip");
    setTimeout(() => {
    bookWrapper.style.display = "none";
    }, 1200);
});
