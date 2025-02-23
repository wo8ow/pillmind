// Datos iniciales (6 posts fijos)
const fixedCandidates = [
  { name: "Candidato A", proposal: "Propuesta 1.", image: "https://images.pexels.com/photos/3873191/pexels-photo-3873191.jpeg?" },
  { name: "Candidato B", proposal: "Propuesta 2.", image: "https://images.pexels.com/photos/8422132/pexels-photo-8422132.jpeg?" },
  { name: "Candidato A", proposal: "Propuesta 3.", image: "https://images.pexels.com/photos/2569842/pexels-photo-2569842.jpeg?" },
  { name: "Candidato B", proposal: "Propuesta 4.", image: "https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?" },
  { name: "Candidato A", proposal: "Magna aliqua enim ad minim.", image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?" },
  { name: "Candidato B", proposal: "Veniam quis nostrud exercitation.", image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?" }
];

// Referencias al DOM
const fixedGrid = document.getElementById('fixedGrid');
const dynamicPosts = document.getElementById('dynamicPosts');
const searchButton = document.getElementById('searchButton');
const queryInput = document.getElementById('queryInput');

// Mostrar los 6 posts fijos
function renderFixedPosts() {
  fixedCandidates.forEach(candidate => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${candidate.image}" alt="${candidate.name}">
      <div class="card-content">
        <h3>${candidate.name}</h3>
        <p>${candidate.proposal}</p>
      </div>
    `;
    fixedGrid.appendChild(card);
  });
}

// Consultar la API y mostrar resultados dinámicos
async function fetchFromAPI(query) {
  try {
    // Simula una llamada a una API (reemplaza con tu URL real)
    const response = await fetch(`https://api.ejemplo.com/search?q=${encodeURIComponent(query)}`);
    const data = await response.json();

    // Limpiar posts dinámicos anteriores
    dynamicPosts.innerHTML = '';

    // Añadir nuevos posts al contenedor dinámico
    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${item.image || 'https://via.placeholder.com/400x300'}" alt="${item.title}">
        <div class="card-content">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
      `;
      dynamicPosts.appendChild(card);
    });
  } catch (error) {
    console.error('Error al consultar la API:', error);
    alert('Hubo un error al procesar tu consulta.');
  }
}

// Manejar el envío del formulario
searchButton.addEventListener('click', async () => {
  const query = queryInput.value.trim();

  if (!query) {
    alert('Por favor, introduce una consulta válida.');
    return;
  }

  // Llamar a la API y mostrar los resultados
  await fetchFromAPI(query);
});

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
  renderFixedPosts();
});