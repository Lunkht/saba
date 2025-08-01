// Get product ID from URL parameters
function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id'));
}

// Load product details
function loadProductDetails() {
    const productId = getProductIdFromUrl();
    
    // If no product ID is found, redirect to home page
    if (!productId) {
        window.location.href = '../index.html';
        return;
    }
    
    // Find the product in the products array
    const product = products.find(p => p.id === productId);
    
    // If product not found, redirect to home page
    if (!product) {
        window.location.href = '../index.html';
        return;
    }
    
    // Update page title
    document.title = `${product.name} - Saba Planet`;
    
    // Update product details in the DOM
    document.getElementById('product-breadcrumb-name').textContent = product.name;
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-price').textContent = `${product.price}€`;
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('product-brand').textContent = product.brand || 'AMI Paris';
    
    // Set product image
    const productImage = document.getElementById('product-main-image');
    const productImages = product.images || [product.image, product.image];
    productImage.src = `../${productImages[0]}`;
    productImage.alt = product.name;
    productImage.onerror = function() {
        this.src = '../images/fond-hero.jpg';
        this.onerror = null;
    };
    
    // Set thumbnail images with different images for comparison
    const thumb1 = document.getElementById('thumb-1');
    const thumb2 = document.getElementById('thumb-2');
    thumb1.src = `../${productImages[0]}`;
    thumb2.src = `../${productImages[1] || productImages[0]}`;
    thumb1.onerror = function() {
        this.src = '../images/fond-hero.jpg';
        this.onerror = null;
    };
    thumb2.onerror = function() {
        this.src = '../images/fond-hero.jpg';
        this.onerror = null;
    };
    
    // Store images data for gallery functionality
    productImage.dataset.images = JSON.stringify(productImages);
    
    // Setup thumbnail gallery
    setupThumbnailGallery();
    
    // Add event listener to the Add to Cart button
    document.getElementById('add-to-cart-btn').addEventListener('click', () => {
        addToCart(productId);
        showNotification('Produit ajouté au panier!');
    });
    
    // Add event listener to the wishlist icon
    document.getElementById('product-wishlist').addEventListener('click', () => {
        addToCart(productId);
        showNotification('Produit ajouté au panier!');
    });
    
    // Load related products (same category)
    loadRelatedProducts(product);
}

// Load related products
function loadRelatedProducts(currentProduct) {
    const relatedProductsGrid = document.getElementById('related-products-grid');
    
    // Filter products of the same category, excluding the current product
    const relatedProducts = products.filter(p => 
        p.category === currentProduct.category && p.id !== currentProduct.id
    );
    
    // Limit to 4 related products
    const productsToShow = relatedProducts.slice(0, 4);
    
    // Clear the grid
    relatedProductsGrid.innerHTML = '';
    
    // Add related products to the grid
    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="../${product.image}" alt="${product.name}" onerror="this.src='../images/fond-hero.jpg'; this.onerror=null;">
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
            // Prevent navigation if clicking on the wishlist icon
            if (!e.target.closest('.wishlist-icon')) {
                window.location.href = `product-details.html?id=${product.id}`;
            }
        });
        
        relatedProductsGrid.appendChild(productCard);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadProductDetails();
    setupWishlistButton();
    setupSizeSelector();
    
    // Setup cart modal functionality
    const cartIcon = document.querySelector('.cart-icon');
    const cartModal = document.getElementById('cart-modal');
    const closeModal = document.querySelector('.close');
    
    cartIcon.addEventListener('click', () => {
        cartModal.style.display = 'block';
        displayCartItems();
    });

    closeModal.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });
    
    // Update cart count
    updateCartCount();
});

// Setup thumbnail gallery functionality
function setupThumbnailGallery() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('product-main-image');
    const productImages = JSON.parse(mainImage.dataset.images || '[]');
    
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            // Remove active class from all thumbnails
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            // Add active class to clicked thumbnail
            thumbnail.classList.add('active');
            
            // Update main image with the corresponding product image
            if (productImages[index]) {
                mainImage.src = `../${productImages[index]}`;
                mainImage.onerror = function() {
                    this.src = '../images/fond-hero.jpg';
                    this.onerror = null;
                };
            }
        });
    });
    
    // Set first thumbnail as active by default
    if (thumbnails.length > 0) {
        thumbnails[0].classList.add('active');
    }
}

// Setup wishlist button functionality
function setupWishlistButton() {
    const wishlistBtn = document.getElementById('wishlist-btn');
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', () => {
            const productId = getProductIdFromUrl();
            addToCart(productId);
            showNotification('Produit ajouté à la wishlist!');
        });
    }
}

// Setup size selector functionality
function setupSizeSelector() {
    const sizeSelect = document.getElementById('size-select');
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    
    if (sizeSelect && addToCartBtn) {
        // Initially disable add to cart if no size selected
        addToCartBtn.disabled = !sizeSelect.value;
        
        sizeSelect.addEventListener('change', () => {
            addToCartBtn.disabled = !sizeSelect.value;
            if (sizeSelect.value) {
                addToCartBtn.textContent = 'Ajouter au panier';
            } else {
                addToCartBtn.textContent = 'Sélectionner une taille';
            }
        });
    }
}