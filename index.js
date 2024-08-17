function filterCategories() {
    const filter = document.getElementById('categoryFilter').value;
    const items = document.querySelectorAll('.category-item');

    items.forEach(item => {
        if (filter === 'all' || item.classList.contains(filter)) {
            item.style.visibility = 'visible';
            item.style.position = 'static';
        } else {
            item.style.visibility = 'hidden';
            item.style.position = 'absolute';
        }
    });
}
