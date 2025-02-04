$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#input-tarefa').val();
        const novoItem = $('<li></li>').text(novaTarefa);
        novoItem.on('click', function() {
            $(this).toggleClass('risco');
        });
        /*const novoItem = $('<li></li>').text(novaTarefa).on('click', function() {
            $(this).toggleClass('risco');
        });*/
        $('ul').append(novoItem);
        $('#input-tarefa').val('');
    });
});