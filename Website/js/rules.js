$(document).ready(function () {
    $('.hackathon-rules h2, .hackathon-rules h3, .hackathon-rules h4').click(function () {
        $(this).toggleClass('active');
        $(this).next('.content').slideToggle(400);
    });
});

$(document).ready(function () {
    if (window.location.hash) {
        const target = $(window.location.hash);
        if (target.length) {
            target.addClass('active');
            target.next('.content').slideDown(400);
        }
    }
});
