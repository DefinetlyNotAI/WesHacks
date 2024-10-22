document.getElementById('downloadMOU').addEventListener('click', function () {
    const message = `
        <div class="popup-content">
            <p>By downloading this Memorandum of Understanding (MOU), you agree to use it solely for informational purposes.</p>
            <p>The contents are provided "as-is" without warranties of any kind.</p>
            <p>You assume all risks associated with its use.</p>
            <p>Unauthorized reproduction or distribution is prohibited.</p>
            <p>This MOU does not create a legally binding contract. All rights reserved.</p>
            <p>You may not use this document to bring legal action against any party.</p>
            <button id="confirmDownload" class="btn btn-primary">Confirm</button>
            <button id="cancelDownload" class="btn btn-secondary">Cancel</button>
        </div>
    `;
    const popup = document.createElement('div');
    popup.innerHTML = message;
    popup.classList.add('popup');
    document.body.appendChild(popup);
    document.body.classList.add('popup-active');

    // Add responsive styles
    const style = document.createElement('style');
    style.innerHTML = `
        .popup {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            border: 1px solid #ccc;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            max-width: 90%;
            width: 400px;
            padding: 20px;
            box-sizing: border-box;
        }
        .popup-content {
            text-align: center;
        }
        .popup.show {
            opacity: 1;
            transition: opacity 0.3s ease;
        }
        .popup.hide {
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        @media (max-width: 600px) {
            .popup {
                width: 90%;
                max-width: none;
            }
        }
    `;
    document.head.appendChild(style);

    // Trigger the show animation
    setTimeout(() => {
        popup.classList.add('show');
    }, 10);

    document.getElementById('confirmDownload').addEventListener('click', function () {
        window.location.href = 'downloadable/Memorandum of Understanding.docx';
        closePopup(popup);
    });

    document.getElementById('cancelDownload').addEventListener('click', function () {
        closePopup(popup);
    });

    function closePopup(popup) {
        popup.classList.remove('show');
        popup.classList.add('hide');
        popup.addEventListener('transitionend', () => {
            document.body.removeChild(popup);
            document.body.classList.remove('popup-active');
        }, {once: true});
    }
});