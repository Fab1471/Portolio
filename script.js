/*
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
*/




document.addEventListener('DOMContentLoaded', function() {
    // Função para carregar HTML dinamicamente
    function loadHTML(divID, filepath) {
        fetch(filepath)
            .then(response => response.text())
            .then(data => {
                document.getElementById(divID).innerHTML = data;
            })
            .catch(error => console.error('Error loading HTML:', error));
    }

    // Ajusta o carregamento do header e footer com base no caminho da página
    const pagePath = window.location.pathname;
    if (pagePath.includes('/pages/')) {
        loadHTML('header', '../components/header.html');
        loadHTML('footer', '../components/footer.html');
    } else {
        loadHTML('header', 'components/header.html');
        loadHTML('footer', 'components/footer.html');      
    }

    // Detecta se está no GitHub Pages e ajusta os links
    const isGitHubPages = window.location.hostname === 'username.github.io'; // Substitua 'username' pelo seu nome de usuário
    const repoName = 'Portfolio'; // Nome do seu repositório no GitHub

    if (isGitHubPages) {
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            let href = link.getAttribute('href');
            if (!href.startsWith('/') && !href.includes('http')) {
                link.setAttribute('href', `/${repoName}/${href}`);
            }
        });
    }
});
