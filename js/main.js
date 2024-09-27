document.addEventListener('DOMContentLoaded', function() {
  const projectGrid = document.getElementById('project-grid');
  const projectFilters = document.getElementById('project-filters');
  const projectModal = document.getElementById('projectModal');

  // Generate project cards
  function generateProjectCards() {
    projectGrid.innerHTML = projects.map(project => `
      <div class="col-md-4 mb-4 ${project.categories.join(' ')}">
        <div class="card project-card">
          <img src="${project.image}" class="card-img-top" alt="${project.title}">
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
        ${category.charAt(0).toUpperCase() + category.slice(1).replace('_', ' ')}
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