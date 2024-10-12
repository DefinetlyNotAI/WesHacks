$(document).ready(function () {
    $('#loginForm').on('submit', function (e) {
        e.preventDefault();
        const password = $('#password').val();
        const hashedPassword = CryptoJS.SHA256(password).toString();
        const correctHashedPassword = "36a767619598213a0112d3fc61a047cee20362b348b8e8a88590f6c9d752d052";
        if (hashedPassword === correctHashedPassword) {
            sessionStorage.setItem('authenticated', 'true');
            window.location.href = 'volunteers.secret.html';
        } else {
            $('#errorMessage').show();
        }
    });
});
