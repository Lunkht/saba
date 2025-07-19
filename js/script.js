// Product data
const products = [
    {
        id: 1,
        name: "Pantalon Jeans gris",
        category: "fashion",
        subcategory: "hommes",
        type: "pantalons",
        price: 899,
        description: "Pantalon jeans gris de qualité supérieure",
        image: "./images/hommes/pantalon_jeans_gris.png",
        images: ["./images/hommes/pantalon_jeans_gris.png", "./images/hommes/patalon_kaki_noir.png"]
    },
    {
        id: 2,
        name: "Pantalon Jeans bleu",
        category: "fashion",
        subcategory: "hommes",
        type: "pantalons",
        price: 799,
        description: "Pantalon jeans bleu confortable et stylé",
        image: "./images/hommes/patalon_kaki_noir.png",
        images: ["./images/hommes/patalon_kaki_noir.png", "./images/hommes/pantalon_jeans_gris.png"]
    },
    {
        id: 3,
        name: "Pantalon Kaki",
        category: "fashion",
        subcategory: "hommes",
        type: "pantalons",
        price: 699,
        description: "Pantalon kaki élégant pour toutes occasions",
        image: "./images/hommes/patalon_kaki_noir.png",
        images: ["./images/hommes/patalon_kaki_noir.png", "./images/hommes/pantalon3.jpeg"]
    },
    {
        id: 4,
        name: "Robe Grise",
        category: "fashion",
        subcategory: "femmes",
        type: "robes",
        price: 1299,
        description: "Robe grise élégante pour soirées",
        image: "./images/femmes/robe-gris.jpg",
        images: ["./images/femmes/robe-gris.jpg", "./images/femmes/robe_noir.png"]
    },
    {
        id: 5,
        name: "Pantalon Casual",
        category: "fashion",
        subcategory: "femmes",
        type: "pantalons",
        price: 899,
        description: "Pantalon casual pour un style décontracté",
        image: "./images/femmes/pantalon-jeans1.jpg",
        images: ["./images/femmes/pantalon-jeans1.jpg", "./images/femmes/pantalon-jeans2.jpg"]
    },
    {
        id: 6,
        name: "Chaussures Cuir Noir",
        category: "fashion",
        subcategory: "hommes",
        type: "chaussures",
        price: 1299,
        description: "Chaussures en cuir noir élégantes",
        image: "./images/chaussures/chaussur-cur-noir.jpeg",
        images: ["./images/chaussures/chaussur-cur-noir.jpeg", "./images/chaussures/NewDenBer Men's Moccasin Slippers Warm Memory Foam Suede Soft Plush Lined Slip on Indoor Outdoor House Shoes.jpeg"]
    },
    {
        id: 7,
        name: "Pantoufles d'été",
        category: "fashion",
        subcategory: "hommes",
        type: "chaussures",
        price: 499,
        description: "Pantoufles d'été respirantes pour hommes",
        image: "./images/chaussures/Pantoufles d'été respirantes pour hommes, pantoufles d'intérieur à fond épais, à la mode, 2024.jpeg",
        images: ["./images/chaussures/Pantoufles d'été respirantes pour hommes, pantoufles d'intérieur à fond épais, à la mode, 2024.jpeg", "./images/chaussures/Sandales d'intérieur mode homme, sandales noires confortables à semelle épaisse en matériau EVA, antidérapantes, anti-odeurs et antibactériennes pour l'intérieur et l'extérieur (il est recommandé d'acheter une taille au-dessus pou.jpeg"]
    },
    {
        id: 8,
        name: "Pantoufles Moccasin",
        category: "fashion",
        subcategory: "enfants",
        type: "chaussures",
        price: 599,
        description: "Pantoufles Moccasin confortables pour la maison",
        image: "./images/enfants/NewDenBer Men's Moccasin Slippers Warm Memory Foam Suede Soft Plush Lined Slip on Indoor Outdoor House Shoes.jpeg",
        images: ["./images/enfants/NewDenBer Men's Moccasin Slippers Warm Memory Foam Suede Soft Plush Lined Slip on Indoor Outdoor House Shoes.jpeg", "./images/enfants/Luxury Pam Slippers _Available to order _#homeofstylishandstatementpieces #menshoes #menslippersinlagos #mensfashion #creatorsearchinsights #eid2025.jpeg"]
    },
    {
        id: 9,
        name: "Sandales Plateforme",
        category: "fashion",
        subcategory: "femmes",
        type: "chaussures",
        price: 699,
        description: "Sandales plateforme antidérapantes pour l'été",
        image: "./images/chaussures/Herren Hausschuhe Sommer rutschfeste lässige Sandalen Plattform Hausschuhe Indoor Badezimmer.jpeg",
        images: ["./images/chaussures/Herren Hausschuhe Sommer rutschfeste lässige Sandalen Plattform Hausschuhe Indoor Badezimmer.jpeg", "./images/femmes/chaussure _ Closed.jpeg"]
    },
    {
        id: 10,
        name: "Pantoufles Luxe",
        category: "fashion",
        subcategory: "hommes",
        type: "chaussures",
        price: 999,
        description: "Pantoufles de luxe pour hommes",
        image: "./images/chaussures/Luxury Pam Slippers _Available to order _#homeofstylishandstatementpieces #menshoes #menslippersinlagos #mensfashion #creatorsearchinsights #eid2025.jpeg",
        images: ["./images/chaussures/Luxury Pam Slippers _Available to order _#homeofstylishandstatementpieces #menshoes #menslippersinlagos #mensfashion #creatorsearchinsights #eid2025.jpeg", "./images/chaussures/NewDenBer Men's Moccasin Slippers Warm Memory Foam Suede Soft Plush Lined Slip on Indoor Outdoor House Shoes.jpeg"]
    },
    {
        id: 11,
        name: "Sweatpant Baboa",
        category: "fashion",
        subcategory: "enfants",
        type: "pantalons",
        price: 799,
        description: "Sweatpant confortable pour le sport et la détente",
        image: "./images/enfants/SWEATPANT BABOA.jpeg"
    },
    {
        id: 12,
        name: "Chaussures Fermées",
        category: "fashion",
        subcategory: "femmes",
        type: "chaussures",
        price: 1099,
        description: "Chaussures fermées élégantes pour toutes occasions",
        image: "./images/Shoes _ Closed.jpeg"
    },
    {
        id: 13,
        name: "T-shirt Blanc",
        category: "fashion",
        subcategory: "hommes",
        type: "tshirts",
        price: 399,
        description: "T-shirt blanc classique en coton",
        image: "./images/pantalon-jeans1.jpg"
    },
    {
        id: 14,
        name: "Chemise Rayée",
        category: "fashion",
        subcategory: "hommes",
        type: "chemises",
        price: 599,
        description: "Chemise rayée élégante pour homme",
        image: "./images/pantalon-jeans2.jpg"
    },
    {
        id: 15,
        name: "Bracelet Argent",
        category: "fashion",
        subcategory: "femmes",
        type: "accessoires",
        price: 299,
        description: "Bracelet en argent élégant pour femme",
        image: "./images/pantalon-kaki.jpg"
    },
    {
        id: 16,
        name: "T-shirt Enfant",
        category: "fashion",
        subcategory: "enfants",
        type: "tshirts",
        price: 299,
        description: "T-shirt coloré pour enfant",
        image: "./images/enfants/robe-gris.jpg"
    },
    {
        id: 17,
        name: "Chemise Enfant",
        category: "fashion",
        subcategory: "enfants",
        type: "chemises",
        price: 399,
        description: "Chemise élégante pour enfant",
        image: "./images/enfants/pantalon3.jpeg"
    },
    {
        id: 18,
        name: "Sac à Main",
        category: "fashion",
        subcategory: "femmes",
        type: "accessoires",
        price: 899,
        description: "Sac à main élégant pour femme",
        image: "./images/accessoires/sac-main.jpeg"
    },
    {
        id: 19,
        name: "Casquette",
        category: "fashion",
        subcategory: "enfants",
        type: "accessoires",
        price: 199,
        description: "Casquette colorée pour enfant",
        image: "./images/accessoires/casquette-enfant.jpeg"
    },
    {
        id: 20,
        name: "Ceinture Cuir",
        category: "fashion",
        subcategory: "hommes",
        type: "accessoires",
        price: 499,
        description: "Ceinture en cuir de qualité pour homme",
        image: "./images/accessoires/ceinture-cuir.jpeg"
    },
    {
        id: 21,
        name: "Short à effet taches de peinture",
        category: "fashion",
        subcategory: "hommes",
        type: "shorts",
        price: 450,
        brand: "DSQUARED2",
        description: "Short en denim avec effet taches de peinture signature DSQUARED2. Coupe moderne et confortable, parfait pour un look décontracté urbain.",
        image: "./images/dsquared2-short.svg",
        images: ["./images/dsquared2-short.svg", "./images/pantalon-jeans1.jpg"]
    },
    {
        id: 22,
        name: "Montre Élégante",
        category: "fashion",
        subcategory: "hommes",
        type: "accessoires",
        price: 1299,
        description: "Montre élégante avec bracelet en acier inoxydable",
        image: "./images/accessoires/montre-elegante.jpeg"
    },
    {
        id: 23,
        name: "Collier Perles",
        category: "fashion",
        subcategory: "femmes",
        type: "accessoires",
        price: 599,
        description: "Collier en perles naturelles pour femme",
        image: "./images/accessoires/collier-perles.jpeg"
    },
    {
        id: 24,
        name: "Lunettes de Soleil",
        category: "fashion",
        subcategory: "hommes",
        type: "accessoires",
        price: 799,
        description: "Lunettes de soleil polarisées UV400",
        image: "./images/accessoires/lunettes-soleil.jpeg"
    },
    {
        id: 25,
        name: "Écharpe Laine",
        category: "fashion",
        subcategory: "femmes",
        type: "accessoires",
        price: 399,
        description: "Écharpe en laine douce et chaude",
        image: "./images/accessoires/echarpe-laine.jpeg"
    },
    {
        id: 26,
        name: "Portefeuille Cuir",
        category: "fashion",
        subcategory: "hommes",
        type: "accessoires",
        price: 699,
        description: "Portefeuille en cuir véritable avec compartiments",
        image: "./images/accessoires/portefeuille-cuir.jpeg"
    },
    {
        id: 26,
        name: "Boucles d'Oreilles",
        category: "fashion",
        subcategory: "femmes",
        type: "accessoires",
        price: 449,
        description: "Boucles d'oreilles en argent sterling",
        image: "./images/accessoires/boucles-oreilles.jpeg"
    },
    {
        id: 27,
        name: "Chapeau Fedora",
        category: "fashion",
        subcategory: "hommes",
        type: "accessoires",
        price: 549,
        description: "Chapeau Fedora classique en feutre",
        image: "./images/accessoires/chapeau-fedora.jpeg"
    },
    {
        id: 28,
        name: "Foulard Soie",
        category: "fashion",
        subcategory: "femmes",
        type: "accessoires",
        price: 349,
        description: "Foulard en soie pure avec motifs élégants",
        image: "./images/accessoires/foulard-soie.jpeg"
    },
    {
        id: 29,
        name: "Gants Cuir",
        category: "fashion",
        subcategory: "hommes",
        type: "accessoires",
        price: 299,
        description: "Gants en cuir doublés pour l'hiver",
        image: "./images/accessoires/gants-cuir.jpeg"
    },
    {
        id: 30,
        name: "Sac Bandoulière",
        category: "fashion",
        subcategory: "femmes",
        type: "accessoires",
        price: 1199,
        description: "Sac bandoulière en cuir premium",
        image: "./images/accessoires/sac-bandouliere.jpeg"
    },
    {
        id: 31,
        name: "Cravate Soie",
        category: "fashion",
        subcategory: "hommes",
        type: "accessoires",
        price: 249,
        description: "Cravate en soie avec motifs classiques",
        image: "./images/accessoires/cravate-soie.jpeg"
    },
    {
        id: 32,
        name: "Broche Vintage",
        category: "fashion",
        subcategory: "femmes",
        type: "accessoires",
        price: 199,
        description: "Broche vintage avec cristaux",
        image: "./images/accessoires/broche-vintage.jpeg"
    },
    {
        id: 33,
        name: "Sac à Dos Enfant",
        category: "fashion",
        subcategory: "enfants",
        type: "accessoires",
        price: 399,
        description: "Sac à dos coloré et résistant pour enfant",
        image: "./images/accessoires/sac-dos-enfant.jpeg"
    },
    {
        id: 34,
        name: "Bandeau Cheveux",
        category: "fashion",
        subcategory: "enfants",
        type: "accessoires",
        price: 149,
        description: "Bandeau coloré pour cheveux d'enfant",
        image: "./images/accessoires/bandeau-cheveux.jpeg"
    },
    {
        id: 35,
        name: "Boutons de Manchette",
        category: "fashion",
        subcategory: "hommes",
        type: "accessoires",
        price: 399,
        description: "Boutons de manchette élégants en acier",
        image: "./images/accessoires/boutons-manchette.jpeg"
    }
];

// Cart functionality
let cart = [];

// DOM elements
const productsGrid = document.getElementById('products-grid');
const cartCount = document.getElementById('cart-count');
const cartIcon = document.querySelector('.cart-icon');
const cartModal = document.getElementById('cart-modal');
const closeModal = document.querySelector('.close');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const filterButtons = document.querySelectorAll('.filter-btn');
const categoryCards = document.querySelectorAll('.category-card');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Attendre que la page soit complètement chargée
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializePage);
    } else {
        initializePage();
    }
});
function initializePage() {
    displayProducts(products); // <-- Assure-toi que `products` est bien défini globalement
    setupEventListeners?.();  // Appelle cette fonction si elle existe (facultatif)
    setupSmoothScrolling?.(); // Pareil ici, facultatif si tu l’as dans l’ancien projet
}

// Variables globales pour la pagination
let currentPage = 1;
let isLoading = false;
let hasMoreProducts = true;
const productsPerPage = 8;

// Fonction pour créer l'effet shimmer
function createShimmerCards(count = 4) {
    return Array.from({ length: count }).map(() => `
        <div class="product-card shimmer-card">
            <div class="product-image shimmer-image-placeholder">
                <div class="shimmer-animation"></div>
                <div class="wishlist-icon" style="background: rgba(255, 255, 255, 0.7);">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e0e0e0" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </div>
            </div>
            <div class="product-info shimmer-text-placeholder">
                <div class="product-collection shimmer-line short" style="margin-bottom: 0.3rem;">
                    <div class="shimmer-animation"></div>
                </div>
                <div class="product-brand shimmer-line medium" style="margin-bottom: 0.3rem;">
                    <div class="shimmer-animation"></div>
                </div>
                <div class="shimmer-line medium" style="margin-bottom: 0.5rem;">
                    <div class="shimmer-animation"></div>
                </div>
                <div class="product-price shimmer-line short">
                    <div class="shimmer-animation"></div>
                </div>
            </div>
        </div>
    `).join('');
}

// Fonction pour créer une carte produit
function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" class="product-img" 
                 onerror="console.error('Erreur de chargement de l\\'image:', this.src); this.src='./images/fond-hero.jpg'; this.onerror=null;">
            <div class="wishlist-icon" onclick="addToCart(${product.id})">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
            </div>
        </div>
        <div class="product-info">
            <div class="product-collection">Nouvelle collection</div>
            <div class="product-brand">${product.brand || 'AMI Paris'}</div>
            <h3>${product.name}</h3>
            <div class="product-price">${product.price}€</div>
        </div>
    `;
    
    // Add click event to navigate to the product details
    productCard.addEventListener('click', (e) => {
        if (!e.target.closest('.wishlist-icon')) {
            window.location.href = `pages/product-details.html?id=${product.id}`;
        }
    });
    
    return productCard;
}

// Fonction pour charger plus de produits (simulation d'une API)
async function loadMoreProducts(page) {
    console.log(`Chargement de la page ${page}`);
    
    // Simulation d'un appel API
    return new Promise((resolve) => {
        setTimeout(() => {
            // Ici vous feriez votre vraie requête API
            // const response = await fetch(`/api/products?page=${page}&limit=${productsPerPage}`);
            // const data = await response.json();
            
            // Simulation de données pour l'exemple
            const simulatedProducts = Array.from({ length: productsPerPage }, (_, index) => ({
                id: (page - 1) * productsPerPage + index + 1,
                name: `Produit ${(page - 1) * productsPerPage + index + 1}`,
                brand: 'AMI Paris',
                price: Math.floor(Math.random() * 500) + 50,
                image: `./images/product-${((page - 1) * productsPerPage + index) % 10 + 1}.jpg`
            }));
            
            // Simuler la fin des produits après 5 pages
            const hasMore = page < 5;
            
            resolve({
                products: simulatedProducts,
                hasMore: hasMore
            });
        }, 1000); // Simuler le délai réseau
    });
}

// Fonction pour ajouter des produits à la grille
async function appendProductsToGrid(showShimmer = true) {
    if (isLoading || !hasMoreProducts) return;
    
    isLoading = true;
    const productsGrid = document.getElementById('products-grid');
    
    if (!productsGrid) {
        console.error('Conteneur #products-grid introuvable');
        isLoading = false;
        return;
    }
    
    // Ajouter l'effet shimmer pendant le chargement
    if (showShimmer) {
        const shimmerContainer = document.createElement('div');
        shimmerContainer.className = 'shimmer-container';
        shimmerContainer.innerHTML = createShimmerCards(4);
        productsGrid.appendChild(shimmerContainer);
    }
    
    try {
        // Charger les nouveaux produits
        const { products, hasMore } = await loadMoreProducts(currentPage);
        
        // Retirer les cartes shimmer
        if (showShimmer) {
            const shimmerContainer = productsGrid.querySelector('.shimmer-container');
            if (shimmerContainer) {
                shimmerContainer.remove();
            }
        }
        
        // Ajouter les nouveaux produits
        products.forEach(product => {
            const productCard = createProductCard(product);
            productsGrid.appendChild(productCard);
        });
        
        // Mettre à jour les variables de pagination
        currentPage++;
        hasMoreProducts = hasMore;
        
        console.log(`Page ${currentPage - 1} chargée. Plus de produits: ${hasMore}`);
        
    } catch (error) {
        console.error('Erreur lors du chargement des produits:', error);
        
        // Retirer les cartes shimmer en cas d'erreur
        if (showShimmer) {
            const shimmerContainer = productsGrid.querySelector('.shimmer-container');
            if (shimmerContainer) {
                shimmerContainer.remove();
            }
        }
    } finally {
        isLoading = false;
    }
}

// Fonction pour détecter le scroll
function handleScroll() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    
    // Déclencher le chargement quand on arrive à 80% du scroll
    if (scrollTop + clientHeight >= scrollHeight * 0.8) {
        appendProductsToGrid();
    }
}

// Fonction throttle pour optimiser les performances
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Fonction principale d'affichage des produits (version améliorée)
function displayProducts(initialProducts) {
    console.log('Fonction displayProducts appelée avec', initialProducts ? initialProducts.length : 0, 'produits');
    const productsGrid = document.getElementById('products-grid');
    
    if (!productsGrid) {
        console.error('Conteneur #products-grid introuvable dans le HTML');
        return;
    }
    
    // Réinitialiser les variables
    currentPage = 1;
    isLoading = false;
    hasMoreProducts = true;
    
    // Vider le conteneur et appliquer la classe
    productsGrid.innerHTML = '';
    productsGrid.className = 'products-grid';
    
    if (!initialProducts || initialProducts.length === 0) {
        console.log('Aucun produit initial à afficher');
        productsGrid.innerHTML = '<div style="text-align:center;color:#888;font-size:1.3rem;padding:2rem;">Aucun produit à afficher.</div>';
        return;
    }
    
    // Afficher l'effet shimmer initial
    productsGrid.innerHTML = createShimmerCards(8);
    
    // Afficher les produits initiaux après le shimmer
    setTimeout(() => {
        productsGrid.innerHTML = '';
        productsGrid.className = 'products-grid';
        
        initialProducts.forEach(product => {
            const productCard = createProductCard(product);
            productsGrid.appendChild(productCard);
        });
        
        // Incrémenter la page car on a affiché les produits initiaux
        currentPage++;
        
        // Configurer le scroll listener avec throttling
        const throttledScrollHandler = throttle(handleScroll, 200);
        window.addEventListener('scroll', throttledScrollHandler);
        
        console.log('Produits initiaux affichés, scroll listener activé');
        
    }, 1500);
}

// Fonction pour nettoyer les event listeners (à appeler si nécessaire)
function cleanup() {
    window.removeEventListener('scroll', handleScroll);
}

// Fonction pour recharger tous les produits
function reloadProducts() {
    currentPage = 1;
    isLoading = false;
    hasMoreProducts = true;
    
    const productsGrid = document.getElementById('products-grid');
    if (productsGrid) {
        productsGrid.innerHTML = '';
        appendProductsToGrid();
    }
}

// Filter products based on category, subcategory, and type
function filterProducts(filter, subcategory = null, type = null) {
    let filteredProducts = products;

    if (filter && filter !== 'all' && filter !== 'tous') {
        filteredProducts = filteredProducts.filter(p => p.category === filter || p.subcategory === filter);
    }

    if (subcategory) {
        filteredProducts = filteredProducts.filter(p => p.subcategory === subcategory);
    }

    if (type) {
        filteredProducts = filteredProducts.filter(p => p.type === type);
    }

    displayProducts(filteredProducts);

    const productsSection = document.getElementById('products');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartCount();
    showNotification('Produit ajouté au panier!');
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    displayCartItems();
}

// Update cart count
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Display cart items
function displayCartItems() {
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Votre panier est vide</p>';
        cartTotal.innerHTML = 'Total: 0€';
        return;
    }
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div>
                <h4>${item.name}</h4>
                <p>Quantité: ${item.quantity}</p>
            </div>
            <div>
                <span>${item.price * item.quantity}€</span>
                <button onclick="removeFromCart(${item.id})" style="margin-left: 10px; background: #ff6600; color: white; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer;">Supprimer</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.innerHTML = `Total: ${total}€`;
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #ff6600;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Setup event listeners
function setupEventListeners() {
    // Filter button event listeners
    if (filterButtons) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.dataset.filter;
                const subcategory = button.dataset.subcategory || null;
                const type = button.dataset.type || null;
                
                // Call filterProducts with all available parameters
                filterProducts(filter, subcategory, type);

                // Update active class for filter buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });
    }

    // Category cards
    if (categoryCards) {
        categoryCards.forEach(card => {
            card.addEventListener('click', () => {
                const category = card.dataset.category;
                if (filterButtons) {
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    const activeBtn = document.querySelector(`[data-filter="${category}"]`);
                    if (activeBtn) activeBtn.classList.add('active');
                }
                filterProducts(category);
                document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
            });
        });
    }

    // Dropdown menu links
    const dropdownLinks = document.querySelectorAll('.dropdown-menu a');
    if (dropdownLinks) {
        dropdownLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const filter = link.dataset.filter;
                const subcategory = link.dataset.subcategory || null;
                const type = link.dataset.type || null;

                filterProducts(filter, subcategory, type);
            });
        });
    }

    // Cart modal listeners
    if (cartIcon) {
        cartIcon.addEventListener('click', () => {
            cartModal.style.display = 'block';
            displayCartItems();
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            cartModal.style.display = 'none';
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });

    // Contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('Message envoyé avec succès!');
            contactForm.reset();
        });
    }

    // Checkout button
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('checkout-btn')) {
            if (cart.length === 0) {
                showNotification('Votre panier est vide!');
                return;
            }
            showNotification('Commande passée avec succès!');
            cart = [];
            updateCartCount();
            cartModal.style.display = 'none';
        }
    });
}

// Mobile menu setup
function setupMobileMenu() {
    // Add hamburger button for mobile
    const navContainer = document.querySelector('.nav-container');
    if (navContainer) {
        const hamburgerBtn = document.createElement('div');
        hamburgerBtn.classList.add('hamburger-menu');
        hamburgerBtn.innerHTML = '<span></span><span></span><span></span>';
        navContainer.insertBefore(hamburgerBtn, document.querySelector('.cart-icon'));
        
        // Handle hamburger button click
        hamburgerBtn.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
            hamburgerBtn.classList.toggle('active');
        });
        
        // Handle dropdowns on mobile
        const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
        
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', function(e) {
                // Check if we're in mobile mode
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    const dropdown = this.parentElement;
                    dropdown.classList.toggle('active');
                }
            });
        });
        
        // Adjust behavior on resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                document.querySelectorAll('.dropdown.active').forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
                const navMenu = document.querySelector('.nav-menu');
                if (navMenu) navMenu.classList.remove('active');
                const hamburgerMenu = document.querySelector('.hamburger-menu');
                if (hamburgerMenu) hamburgerMenu.classList.remove('active');
            }
        });
    }
}

// Smooth scrolling for navigation
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add CSS animation for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
