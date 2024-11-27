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

// Initial check
updateFavicon();

// Listen for changes in the color scheme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);

