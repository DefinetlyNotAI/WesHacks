const canvas = document.createElement('canvas');
document.body.insertBefore(canvas, document.body.firstChild);
const ctx = canvas.getContext('2d');

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
canvas.width = canvasWidth;
canvas.height = canvasHeight;

const letters = Array.from({length: 256}, () => 1);

const draw = () => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0F0';
    letters.map((y_pos, index) => {
        const text = String.fromCharCode(3e4 + Math.random() * 33);
        const x_pos = index * 10;
        const pixelData = ctx.getImageData(x_pos, y_pos, 1, 1).data;
        if (pixelData[0] > 200 && pixelData[1] < 100 && pixelData[2] < 100) {
            ctx.fillStyle = 'rgba(0, 255, 0, 0.5)'; // Faded green
        } else {
            ctx.fillStyle = '#0F0'; // Normal green
        }
        ctx.fillText(text, x_pos, y_pos);
        letters[index] = y_pos > 758 + Math.random() * 1e4 ? 0 : y_pos + 10;
    });
};

setInterval(draw, 33);

if (navigator.userAgent.match(/Mobi|Android/i)) {
    window.location.href = 'index.html';
} else {
    setTimeout(() => {
        document.querySelector('.hidden-message').style.display = 'block';
        setTimeout(() => {
            fetch('https://api.ipify.org?format=json')
                .then(response => response.json())
                .then(data => {
                    document.getElementById('ip-address').textContent = `Maybe you do have to be scared? Is this familiar: ${data.ip}`;
                })
                .catch(error => {
                    document.getElementById('ip-address').textContent = '';
                    console.error('Error fetching IP address:', error);
                });
            // Geolocation API to get user's location
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    document.getElementById('ip-location').textContent = `Your approximate location is: Latitude ${latitude}, Longitude ${longitude}`;
                }, error => {
                    document.getElementById('ip-location').textContent = '';
                    console.error('Error fetching location:', error);
                });
            } else {
                document.getElementById('ip-location').textContent = 'Geolocation is not supported by this browser';
            }
        }, 2000);
    }, 10000); // 10 seconds in milliseconds
}