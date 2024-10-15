document.getElementById('downloadMOU').addEventListener('click', function() {
    const message = `
        <div style="padding: 20px; text-align: center;">
            <p>By downloading this Memorandum of Understanding (MOU), you agree to use it solely for informational purposes. The contents are provided "as-is" without warranties of any kind. You assume all risks associated with its use. Unauthorized reproduction or distribution is prohibited. This MOU does not create a legally binding contract. All rights reserved. You may not use this document to bring legal action against any party.</p>
            <button id="confirmDownload" class="btn btn-primary">Confirm</button>
            <button id="cancelDownload" class="btn btn-secondary">Cancel</button>
        </div>
    `;
    const popup = document.createElement('div');
    popup.innerHTML = message;
    popup.classList.add('popup');
    document.body.appendChild(popup);

    // Trigger the show animation
    setTimeout(() => {
        popup.classList.add('show');
    }, 10);

    document.getElementById('confirmDownload').addEventListener('click', function() {
        window.location.href = 'downloadable/Memorandum of Understanding.docx';
        closePopup(popup);
    });

    document.getElementById('cancelDownload').addEventListener('click', function() {
        closePopup(popup);
    });

    function closePopup(popup) {
        popup.classList.remove('show');
        popup.classList.add('hide');
        popup.addEventListener('transitionend', () => {
            document.body.removeChild(popup);
        }, { once: true });
    }
});