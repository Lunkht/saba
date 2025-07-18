// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Filter products to show only men's products
    filterProducts('fashion', 'hommes');
    
    // Setup filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            const subcategory = button.dataset.subcategory;
            const type = button.dataset.type;
            
            filterProducts(filter, subcategory, type);

            // Update active class for filter buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
    
    // Setup dropdown menu items as filters
    const dropdownItems = document.querySelectorAll('.dropdown-menu a');
    dropdownItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = item.dataset.filter;
            const subcategory = item.dataset.subcategory;
            const type = item.dataset.type;
            
            filterProducts(filter, subcategory, type);

            // Update active class for filter buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Find and activate the corresponding filter button
            filterButtons.forEach(btn => {
                if (btn.dataset.filter === filter && 
                    btn.dataset.subcategory === subcategory && 
                    btn.dataset.type === type) {
                    btn.classList.add('active');
                }
            });
        });
    });
    
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