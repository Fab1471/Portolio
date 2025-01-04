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


document.addEventListener('DOMContentLoaded', function() {
    const isGitHubPages = window.location.hostname === 'fab1471.'; // Verify if the website is hosted on GitHub Pages
    const repoName = 'Portfolio' // Repository name. .

    if (isGitHubPages) {
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            let href = link.getAttribute('href');
            if (!href.startsWith('/') && !href.includes('http')) {
                link.setAttribute('href', `/${repoName}/${href}`);
            }
        });
    };
});
