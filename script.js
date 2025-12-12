// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Education fixed tabs
const eduTabs = document.querySelectorAll('.edu-tab');
const eduPanels = document.querySelectorAll('.edu-content-panel');

eduTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const category = tab.dataset.category;

        // Remove active from all tabs and panels
        eduTabs.forEach(t => t.classList.remove('active'));
        eduPanels.forEach(p => p.classList.remove('active'));

        // Add active to clicked tab and corresponding panel
        tab.classList.add('active');
        const activePanel = document.querySelector(`.edu-content-panel[data-category="${category}"]`);
        if (activePanel) {
            activePanel.classList.add('active');
        }
    });
});

// Old arrow slider (fallback for older version)
let currentCategory = 0;
const categories = ['computational', 'fluids', 'propulsion', 'dynamics', 'thermo', 'materials', 'experimental', 'space', 'programming'];

const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
const panels = document.querySelectorAll('.category-panel-full');

function showCategory(index) {
    panels.forEach(panel => panel.classList.remove('active'));
    if (panels[index]) {
        panels[index].classList.add('active');
    }
}

if (prevButton && nextButton) {
    prevButton.addEventListener('click', () => {
        currentCategory = (currentCategory - 1 + categories.length) % categories.length;
        showCategory(currentCategory);
    });

    nextButton.addEventListener('click', () => {
        currentCategory = (currentCategory + 1) % categories.length;
        showCategory(currentCategory);
    });
}
