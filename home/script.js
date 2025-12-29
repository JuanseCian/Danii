const timelineData = [
    {
        fecha: "30 DE SEPTIEMBRE DE 2022",
        titulo: "Mis primeras usurpadas",
        texto: "",
        imagen: "https://st.depositphotos.com/1258191/2733/i/950/depositphotos_27338455-stock-photo-kitty.jpg"
    },
    {
        fecha: "2 DE OCTUBRE",
        titulo: "Nuestra primer salidad, con final feliz💕",
        texto: "",
        imagen: "img/relacion.jpg"
    },
    {
        fecha: "7 DE DICIEMBRE DE 2022",
        titulo: "El casamiento de la Mabeeeel",
        texto: "Pasar Navidad juntos fue mágico. Luces, abrazos y la calidez de estar con vos.",
        imagen: "img/navidad.jpg"
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
        texto: "Celebrar tu día fue una de las cosas más lindas. Ver tu sonrisa me hizo sentir el corazón más lleno que nunca.",
        imagen: "img/cumple_dani.jpg"
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
