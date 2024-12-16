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

    if (urlPath.includes('.html')) {
            window.location.href = currentUrl.replace('.html', '');
    }
    if (urlPath.endsWith('/index')) {
            window.location.href = currentUrl.replace('/index', '');
    }
});


// Initial check
updateFavicon();

// Listen for changes in the color scheme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);

