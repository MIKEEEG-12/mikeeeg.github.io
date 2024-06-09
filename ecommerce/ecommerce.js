function showCategory(categoryId) {
    const categories = document.querySelectorAll('.category');
    categories.forEach(category => category.style.display = 'none');

    const selectedCategory = document.getElementById(categoryId);
    if (selectedCategory) {
        selectedCategory.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showCategory('mens-wear');
});
