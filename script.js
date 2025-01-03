function loadHTML(divID, filepath) {
    fetch(filepath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(divID).innerHTML = data;
        })
        .catch(error => console.error('Error loading HTML:', error));
}

document.addEventListener('DOMContentLoaded', function() {
    const pagePath = window.location.pathname;
    if (pagePath.includes('/pages/')) {
        loadHTML('header', '../components/header.html');
        loadHTML('footer', '../components/footer.html');
    } else {
        loadHTML('header', 'components/header.html');
        loadHTML('footer', 'components/footer.html');      
    }
});
