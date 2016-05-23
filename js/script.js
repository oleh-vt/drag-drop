$(function (){
    $.getJSON('http://young.org.ua/test.json', function (data) {
        for(var key in data) {
            $('#category').append($('<option>', {
                value: key,
                text: key
            }));
        }
    });

    $('.draggable-item').draggable({
        helper: 'clone',
        revert: 'invalid'
    });

    $('ul, li').disableSelection();
});
