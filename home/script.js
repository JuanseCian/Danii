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
        imagen: "img/2022/navidad.jpg"
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
        imagen: "img/2023/campamento.jpeg"
    },
    {
        fecha: "23 DE ENERO 2023",
        titulo: "Picnic y cartasss",
        texto: "",
        imagen: [
            "img/2023/picnic1.jpeg",
            "img/2023/picnic2.jpeg"
        ]
    },
    {
        fecha: "14 DE FEBRERO 2023",
        titulo: "Fotitos con la pequeña Adol",
        texto: "",
        imagen: [
            "img/2023/adol1.jpeg",
            "img/2023/adol2.jpeg",
            "img/2023/adol3.jpeg"
        ]
    },
    {
        fecha: "18 DE FEBRERO 2023",
        titulo: "rico?",
        texto: "",
        imagen: "img/2023/rico.jpeg"
    },
    {
        fecha: "22 DE FEBRERO DE 2023",
        titulo: "Tu cumpleanituss",
        texto: "",
        imagen: [
            "img/2023/comple2.jpeg",
            "img/2023/comple1.jpeg",
        ]
    },
    {
        fecha: "25 DE FEBRERO DE 2023",
        titulo: "Ultima salidita",
        texto: "",
        imagen: "img/2023/salida.jpeg"
    },
    {
        fecha: "10 DE MARZO DE 2023",
        titulo: "Día de SSSSPAAA",
        texto: "",
        imagen: "img/2023/spa.jpeg"
    },
    {
        fecha: "21 DE MARZO DE 2023",
        titulo: "Zeballos y una Hamburguesitasss",
        texto: "",
        imagen: "img/2023/zeballos.jpeg"
    },
    {
        fecha: "13 DE MAYO DE 2023",
        titulo: "Tatuajecillo juntooos",
        texto: "",
        imagen: [
            "img/2023/.jpeg",
            "img/2023/.jpeg"
        ]
    },
    {
        fecha: "1O DE JUNIO DE 2023",
        titulo: "Barcito de Harry y Louis",
        texto: "",
        imagen: "img/2023/.jpeg"
    },
    {
        fecha: "19 DE JUNIO DE 2023",
        titulo: "Fotos re contra randoms",
        texto: "",
        imagen: "img/2023/.jpeg"
    },
    {
        fecha: "20 DE JULIO DE 2023",
        titulo: "Siendo virrrrgos",
        texto: "",
        imagen: [
            "img/2023/virgos1.jpeg",
            "img/2023/virgos2.jpeg",
            "img/2023/virgos3.jpeg"
        ]
    },
    {
        fecha: "22 DE JULIO DE 2023",
        titulo: "Cineeeee",
        texto: "",
        imagen: [
            "img/2023/cine1.jpeg",
            "img/2023/cine2.jpeg"
        ]
    },
    {
        fecha: "21 DE MARZO DE 2023",
        titulo: "Zeballos y una Hamburguesitasss",
        texto: "",
        imagen: "img/2023/.jpeg"
    },
    {
        fecha: "21 DE MARZO DE 2023",
        titulo: "Zeballos y una Hamburguesitasss",
        texto: "",
        imagen: "img/2023/.jpeg"
    },
    {
        fecha: "21 DE MARZO DE 2023",
        titulo: "Zeballos y una Hamburguesitasss",
        texto: "",
        imagen: "img/2023/.jpeg"
    },
    ];

    

    const timeline = document.getElementById("timeline");
    const fotosLluvia = [
        "img/especial/01.jpeg",
        "img/2022/salida.jpeg",
        "img/2022/casamiento_mabel1.jpeg",
        "img/2022/anio_nuevo1.jpeg",
        "img/2023/picnic1.jpeg",
        "img/2023/rico.jpeg"
    ];

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
    // Gira libro
    book.classList.add("fast-flip");

    let lluvia = setInterval(crearFotoLluvia, 140);

    setTimeout(() => {
        clearInterval(lluvia);
    }, 3000);

    setTimeout(() => {
        bookWrapper.style.display = "none";
    }, 2800);
});


function crearFotoLluvia() {
    console.log("Creando foto lluvia");

    const img = document.createElement("img");
    img.src = fotosLluvia[Math.floor(Math.random() * fotosLluvia.length)];
    img.className = "falling-img";

    img.style.left = Math.random() * 100 + "vw";
    img.style.animationDuration = 1.8 + Math.random() * 2 + "s";
    img.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;

    document.body.appendChild(img);

    setTimeout(() => {
        img.remove();
    }, 4000);
}

const fondosScroll = [
    "img/fondos/paisaje1.jpg",
    "img/fondos/paisaje2.jpg",
    "img/fondos/paisaje3.jpg",
    "img/fondos/paisaje4.jpg",
    "img/fondos/paisaje5.jpg"
];

const bgWrapper = document.getElementById("background-slider");

const layer1 = document.createElement("div");
const layer2 = document.createElement("div");

layer1.className = "bg-layer active";
layer2.className = "bg-layer";

bgWrapper.appendChild(layer1);
bgWrapper.appendChild(layer2);

let capaActual = layer1;
let capaSiguiente = layer2;
let fondoActual = 0;

capaActual.style.backgroundImage = `url('${fondosScroll[0]}')`;

window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    const altura = document.body.scrollHeight - window.innerHeight;
    const progreso = scroll / altura;

    const nuevoIndex = Math.floor(progreso * fondosScroll.length);

    if (nuevoIndex !== fondoActual && fondosScroll[nuevoIndex]) {
        fondoActual = nuevoIndex;

        capaSiguiente.style.backgroundImage = `url('${fondosScroll[nuevoIndex]}')`;
        capaSiguiente.classList.add("active");
        capaActual.classList.remove("active");

        const temp = capaActual;
        capaActual = capaSiguiente;
        capaSiguiente = temp;
    }
});

