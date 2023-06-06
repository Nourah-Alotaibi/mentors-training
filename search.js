const searchBar = document.querySelector('#search-bar');
const list = document.querySelector('#list');

searchBar.addEventListener('input', function(event) {

    const searchTerm = event.target.value.toLowerCase();

    for (const item of list.children) {

        if (!item.textContent.toLowerCase().includes(searchTerm)) {
            
            item.style.display = 'none';
        } else {
            item.style.display = '';
        }
    }
});
