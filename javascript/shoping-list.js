$('ul').on('click', 'li', function(){

        $(this).toggleClass('done');
        
    // if($(this).css('color') === 'rgb(128, 128, 128)') {
    //     $(this).css({
    //         color: 'black',
    //         textDecoration: 'none'
    //     });
    // } else {
    //     $(this).css({
    //         color: 'grey',
    //         textDecoration: 'line-through'
    //     });
    // };

});

$('ul').on('click', 'span', function(event) {
    event.stopPropagation();
    $(this).parent().fadeOut(function() {
        $(this).remove();
    });
});

$('input').keypress(function(event) {
    if(event.which === 13) {
        const itemText = $(this).val();
        $(this).val('');
        $('ul').append('<li>' + itemText + '<span> delete</span></li>');
    };
})

$('h2 span').click(function() {
    $('input').fadeToggle();
});