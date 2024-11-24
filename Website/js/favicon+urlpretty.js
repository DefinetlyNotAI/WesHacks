function updateFavicon() {
    const favicon = document.getElementById('favicon');
    if (favicon) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            favicon.classList.add('invert');
        } else {
            favicon.classList.remove('invert');
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const currentUrl = window.location.href;
    const urlPath = window.location.pathname;

    if (currentUrl.includes('weshack.me') && urlPath.endsWith('.html')) {
        if (urlPath.endsWith('index.html')) {
            window.location.href = currentUrl.replace('/index.html', '');
        } else {
            window.location.href = currentUrl.replace('.html', '');
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const currentUrl = window.location.href;
    const urlPath = window.location.pathname;

    const redirects = {
        '/Website/rules': '/rules',
        '/Website/volunteers': '/volunteers',
        '/Website/faq': '/faq',
        '/Website/sponsors': '/sponsors',
        '/Website/schedule': '/schedule',
        '/Website/venue': '/venue',
        '/Website/prizes': '/prizes'
    };

    for (const [key, value] of Object.entries(redirects)) {
        if (urlPath === key) {
            window.location.href = currentUrl.replace(key, value);
            break;
        }
    }

});

// Initial check
updateFavicon();

// Listen for changes in the color scheme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);
    