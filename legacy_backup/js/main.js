document.addEventListener('DOMContentLoaded', function() {
  const projectGrid = document.getElementById('project-grid');
  const projectFilters = document.getElementById('project-filters');
  const projectModal = document.getElementById('projectModal');
  const heroCarousel = document.getElementById('heroCarousel');

  // Hero carousel images
  const heroImages = [
    'images/slide-01.jpg',
    'images/homeSlide_bg1.jpg',
	'images/erp_mes.jpg',
    'images/slide-03.jpg',
	'images/slide-04.jpg',
	'images/slide-05.jpg',
  ];

  // Populate hero carousel
  function populateHeroCarousel() {
    const carouselInner = heroCarousel.querySelector('.carousel-inner');
    carouselInner.innerHTML = heroImages.map((img, index) => `
      <div class="carousel-item ${index === 0 ? 'active' : ''}">
        <img src="${img}" class="d-block w-100" alt="Hero image ${index + 1}">
      </div>
    `).join('');
  }

  // Generate project cards
  function generateProjectCards() {
    projectGrid.innerHTML = projects.map(project => `
      <div class="col-md-4 mb-4 ${project.categories.join(' ')}">
        <div class="card project-card">
          <img src="${project.images[0]}" class="card-img-top" alt="${project.title}">
          <div class="card-body">
            <h5 class="card-title">${project.title}</h5>
            <p class="card-text">${project.shortDescription}</p>
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#projectModal" data-project-id="${project.id}">Learn More</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Generate filter buttons
  function generateFilterButtons() {
    const categories = ['all', ...new Set(projects.flatMap(project => project.categories))];
    projectFilters.innerHTML = categories.map(category => `
      <button class="btn me-2 mb-2 filter-btn ${category === 'all' ? 'active' : ''}" data-filter="${category}">
        ${category.toUpperCase().replace('_', ' ')}
      </button>
    `).join('');
  }

  // Filter projects
  function filterProjects(filter) {
    const projectCards = projectGrid.children;
    for (let card of projectCards) {
      if (filter === 'all' || card.classList.contains(filter)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    }
  }

  // Set active filter button
  function setActiveButton(activeButton) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => button.classList.remove('active'));
    activeButton.classList.add('active');
  }

  // Populate modal with project details
  function populateModal(projectId) {
    const project = projects.find(p => p.id === parseInt(projectId));
    const modalTitle = projectModal.querySelector('.modal-title');
    const modalBody = projectModal.querySelector('.modal-body');

    modalTitle.textContent = project.title;
    modalBody.innerHTML = `
      <div id="projectCarousel" class="carousel slide mb-4" data-bs-ride="carousel">
        <div class="carousel-inner">
          ${project.images.map((img, index) => `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
              <img src="${img}" class="d-block w-100" alt="${project.title} - Image ${index + 1}">
            </div>
          `).join('')}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <h6>Project Overview</h6>
      <p>${project.longDescription}</p>
      <h6>Technologies Used</h6>
      <ul>
        ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
      </ul>
      <h6>Key Features</h6>
      <ul>
        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
      </ul>
      <h6>Results</h6>
      <p>${project.results}</p>
      <h6>Project Repository</h6>
      <a href="${project.repoLink}" target="_blank">GitHub Repository</a>
    `;
  }

  // Initialize the project section
  populateHeroCarousel();
  generateProjectCards();
  generateFilterButtons();

  // Event listeners
  projectFilters.addEventListener('click', function(e) {
    if (e.target.classList.contains('filter-btn')) {
      const filter = e.target.getAttribute('data-filter');
      filterProjects(filter);
      setActiveButton(e.target);
    }
  });

  projectGrid.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn')) {
      const projectId = e.target.getAttribute('data-project-id');
      populateModal(projectId);
    }
  });
});