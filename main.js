$(document).ready(function(){
    var toggle = 'Registrar Tarefa <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/></svg>'
    var disable = 'Registrar Tarefa <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/></svg>'
    var isToogle = false
    $('h2').click(function(){
        if (isToogle==false){
            $('#Corpo h2').html(disable)
            isToogle = true
        }else{
            $('#Corpo h2').html(toggle)
            isToogle = false
        }
        $('#form-tarefa').slideToggle();
    })
    $('#form-tarefa').submit(function (e) { 
        e.preventDefault();
        addTarefa()
    })
    $('#tarefas').on('click', 'li', function(){
        $(this).css('text-decoration', 'line-through');
    })
    function addTarefa(){
        var tarefa = $('<li class="nalista"></li>')
        var nome = $('#tarefa').val()
        tarefa.text(nome)
        $('#tarefas').append(tarefa)
        $('#tarefa').val('')
    }
})
