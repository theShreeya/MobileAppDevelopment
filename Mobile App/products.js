// Product data
const allProducts = [
    {
        id: 1,
        name: "Premium Meal Plan",
        price: "$49.99",
        image: "E:\NutriLife\Mobile App\premium-meal-plan-recipies.webp",
        description: "30-day personalized meal plan with grocery lists, recipes, and nutritional guidance tailored to your goals.",
        category: "meal-plans",
        badge: "Best Seller",
        badgeClass: "bg-success"
    },
    {
        id: 2,
        name: "Nutrition Tracker Pro",
        price: "$19.99/mo",
        image: "E:\NutriLife\Mobile App\nutrition-tracker-premium.jpg",
        description: "Advanced tracking features with AI-powered insights, meal recommendations, and detailed analytics.",
        category: "supplements",
        badge: "",
        badgeClass: ""
    },
    {
        id: 3,
        name: "Healthy Living Guide",
        price: "$29.99",
        image: "E:\NutriLife\Mobile App\healthy-lifestyle-guide.png",
        description: "Complete 200-page guide to building sustainable healthy habits without exercise routines.",
        category: "guides",
        badge: "",
        badgeClass: ""
    },
    {
        id: 4,
        name: "Weight Loss Meal Plan",
        price: "$69.99",
        image: "E:\NutriLife\Mobile App\weight-loss-meal-plan.webp",
        description: "Scientifically designed 60-day meal plan focused on sustainable weight loss through portion control.",
        category: "meal-plans",
        badge: "",
        badgeClass: ""
    },
    {
        id: 5,
        name: "Daily Nutrition Pack",
        price: "$39.99",
        image: "E:\NutriLife\Mobile App\premium-meal-plan-recipies.jpg.webp",
        description: "Essential vitamins and minerals pack designed to complement your healthy eating journey.",
        category: "supplements",
        badge: "New",
        badgeClass: "bg-info"
    },
    {
        id: 6,
        name: "Meal Timing Mastery",
        price: "$24.99",
        image: "public/meal-timing-guide.png",
        description: "Learn the science of when to eat for optimal digestion, energy, and weight management.",
        category: "guides",
        badge: "",
        badgeClass: ""
    }
];

let currentProducts = [...allProducts];
let currentPage = 1;
const productsPerPage = 2;

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
    setupPagination();
});

// Display products for current page
function displayProducts() {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = currentProducts.slice(startIndex, endIndex);
    
    const container = document.getElementById('products-display');
    container.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productHTML = `
            <div class="col-md-6">
                <div class="card product-card h-100">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body d-flex flex-column">
                        ${product.badge ? `<span class="badge ${product.badgeClass} mb-2 align-self-start">${product.badge}</span>` : ''}
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text flex-grow-1">${product.description}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="price fw-bold">${product.price}</span>
                            <a href="product-detail.html?id=${product.id}" class="btn btn-primary">View Details</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += productHTML;
    });
}

// Setup pagination
function setupPagination() {
    const totalPages = Math.ceil(currentProducts.length / productsPerPage);
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';
    
    // Previous button
    const prevDisabled = currentPage === 1 ? 'disabled' : '';
    paginationContainer.innerHTML += `
        <li class="page-item ${prevDisabled}">
            <a class="page-link" href="#" onclick="changePage(${currentPage - 1})" tabindex="-1">Previous</a>
        </li>
    `;
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        const activeClass = i === currentPage ? 'active' : '';
        paginationContainer.innerHTML += `
            <li class="page-item ${activeClass}">
                <a class="page-link" href="#" onclick="changePage(${i})">${i}</a>
            </li>
        `;
    }
    
    // Next button
    const nextDisabled = currentPage === totalPages ? 'disabled' : '';
    paginationContainer.innerHTML += `
        <li class="page-item ${nextDisabled}">
            <a class="page-link" href="#" onclick="changePage(${currentPage + 1})">Next</a>
        </li>
    `;
}

// Change page
function changePage(page) {
    const totalPages = Math.ceil(currentProducts.length / productsPerPage);
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    displayProducts();
    setupPagination();
    
    // Scroll to top of products section
    document.getElementById('products-display').scrollIntoView({ behavior: 'smooth' });
}

// Filter products
function filterProducts(category) {
    currentProducts = allProducts.filter(product => product.category === category);
    currentPage = 1;
    displayProducts();
    setupPagination();
    
    // Update active filter button
    document.querySelectorAll('.btn-group .btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

// Show all products
function showAllProducts() {
    currentProducts = [...allProducts];
    currentPage = 1;
    displayProducts();
    setupPagination();
    
    // Update active filter button
    document.querySelectorAll('.btn-group .btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.btn-group .btn').classList.add('active');
}