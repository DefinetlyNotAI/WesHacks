$(document).ready(function () {
    $('.hackathon-rules h2, .hackathon-rules h3, .hackathon-rules h4').click(function () {
        $(this).toggleClass('active');
        $(this).next('.content').slideToggle(400);
    });
});
