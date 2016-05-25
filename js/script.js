$(document).ready(function(){
    $.getJSON('http://young.org.ua/test.json', foo);

    // $('#droppable').droppable({
    //     drop: dropHandler
    // });
    $('#droppable').droppable({
        drop: dropHandler
    });

    $('#category').on('change', function(){
        $('option:disabled').remove();
        $('ul').empty();
        $.getJSON('http://young.org.ua/test.json', function(data){
            var arr = data[$('#category').val()];
            var draggable = $('#draggable');
            for(var i = 0; i < arr.length; i++){
                $(draggable).append($('<li>',{text: arr[i]}).addClass('draggable-item'));
            }
            $('.draggable-item').draggable({
                helper: 'clone',
                revert: 'invalid',
                cursor: 'move'
            });
        });
    });
});

function foo(data){
    var categorySelection = $('#category');
    for(var key in data){
        $(categorySelection).append($('<option>', {
            value: key,
            text: key
        }));
    }
}

function dropHandler(event, ui){
    var draggableItem = ui.draggable;
    $('#droppable').append($('<li>',{text: $(draggableItem).text()}).addClass('accepted-item'));
}