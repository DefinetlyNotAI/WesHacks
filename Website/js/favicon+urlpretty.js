function updateFavicon() {
    const favicon = document.getElementById('favicon');
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        favicon.classList.add('invert');
    } else {
        favicon.classList.remove('invert');
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

// Initial check
updateFavicon();

// Listen for changes in the color scheme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);
    