$(document).ready(function(){

    $('#create_book').click(function(e){
        $('#create_book_popup').show()
    })

    $('#create_book_popup_close').click(function(e){
        $('#create_book_popup').hide()
    })

    $('#cancel_create_book').click(function(e){
        $('#create_book_popup').hide()
    })

    $('#submit_create_book').click(function(e){
        e.preventDefault()
        let data = {
            label: $('#inpLabel').val(),
            id_author: $('#inpAuthor').val(),
            id_genre: $('#inpGenre').val(),
            year_of_publication: $('#inpYear').val()
        }

        $.ajax({
            type: 'POST',
            data: data,
            url: '/books/create',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Книга добавлена')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });
    })

    $('#delete_book').click(function(e){
        $('#delete_book_popup').show()
    })

    $('#delete_book_popup_close').click(function(e){
        $('#delete_book_popup').hide()
    })

    $('#cancel_delete_book').click(function(e){
        $('#delete_book_popup').hide()
    })

    $('#submit_delete_book').click(function(e){
        e.preventDefault()
        let data = {
            id: $('#inpId').val()
        }

        $.ajax({
            type: 'DELETE',
            data: data,
            url: '/books/delete',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Книга удалена')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });
    })

    $('#update_book').click(function(e){
        $('#update_book_popup').show()
    })

    $('#update_book_popup_close').click(function(e){
        $('#update_book_popup').hide()
    })

    $('#cancel_update_book').click(function(e){
        $('#update_book_popup').hide()
    })

    $('#submit_update_book').click(function(e){
        e.preventDefault()
        let data = {
            id: $('#inpUpid').val(),
            label: $('#inpUplabel').val(),
            id_author: $('#inpUpauthor').val(),
            id_genre: $('#inpUpgenre').val(),
            year_of_publication: $('#inpUpyear').val()
        }

        $.ajax({
            type: 'PUT',
            data: data,
            url: '/books/update',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Данные о книге изменены')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });
    })
});
