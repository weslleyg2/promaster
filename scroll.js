$('nav a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
    targetOffset = $(id).offset().top;
        
    $(html, body).animate({
        scrolltop: targetOffset
    },500);
});