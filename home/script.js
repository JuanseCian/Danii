const timelineData = [
    {
        fecha: "Enero 2022",
        titulo: "Nos conocimos 💫",
        texto: "Ese fue el comienzo de todo. No sabía que ese día conocería a alguien tan especial que cambiaría mi vida para siempre.",
        imagen: "https://st.depositphotos.com/1258191/2733/i/950/depositphotos_27338455-stock-photo-kitty.jpg"
    },
    {
        fecha: "2R DE SEMPTIEMBRE DE 2022",
        titulo: "Empezó nuestra relación 💕",
        texto: "Nuestro primer 'nosotros'. Ese momento en el que todo empezó a tener más sentido y el amor se hizo real.",
        imagen: "img/relacion.jpg"
    },
    {
        fecha: "25 DE DICIEMBRE DE 2022",
        titulo: "Nuestra primera Navidad 🎄",
        texto: "Pasar Navidad juntos fue mágico. Luces, abrazos y la calidez de estar con vos.",
        imagen: "img/navidad.jpg"
    },
    {
        fecha: "Febrero 2023",
        titulo: "Tu cumple, mi amor 🎂",
        texto: "Celebrar tu día fue una de las cosas más lindas. Ver tu sonrisa me hizo sentir el corazón más lleno que nunca.",
        imagen: "img/cumple_dani.jpg"
    },
    {
        fecha: "Agosto 2023",
        titulo: "Nuestro viaje a Buenos Aires ✈️",
        texto: "El Ateneo, las calles, los cafés… y vos. Cada momento fue perfecto porque fue con vos.",
        imagen: "img/viaje.jpg"
    },
    {
        fecha: "Septiemebre 2023",
        titulo: "Nuestro 1er año",
        texto: "",
        imagen: "img/viaje.jpg"
    },
    {
        fecha: "14 de Mayo de 2023",
        titulo: "Nuestro tatuaje juntitos",
        texto: "",
        imagen: "img/viaje.jpg"
    },
    {
        fecha: "Noviembre 2023",
        titulo: "Llegada del Kyrita",
        texto: "",
        imagen: "img/viaje.jpg"
    }
    ];

    const timeline = document.getElementById("timeline");

    timelineData.forEach((event, index) => {
    const side = index % 2 === 0 ? "left" : "right";
    const eventHTML = `
        <div class="event ${side}">
        <h3>${event.fecha}</h3>
        <div class="event-content">
            <h2>${event.titulo}</h2>
            <p>${event.texto}</p>
            <img src="${event.imagen}" alt="${event.titulo}">
        </div>
        </div>
    `;
    timeline.innerHTML += eventHTML;
    });

    // --- Interactividad ---
    const events = document.querySelectorAll('.event');

    events.forEach(event => {
    event.addEventListener('click', () => {
        event.classList.toggle('active');
    });
    });
