$(document).ready(function(){

    $('#create_genre').click(function(e){
        $('#create_genre_popup').show()
    })

    $('#create_genre_popup_close').click(function(e){
        $('#create_genre_popup').hide()
    })

    $('#cancel_create_genre').click(function(e){
        $('#create_genre_popup').hide()
    })

    $('#submit_create_genre').click(function(e){
        e.preventDefault()
        let data = {
            label: $('#inpLabel').val(),
        }

        $.ajax({
            type: 'POST',
            data: data,
            url: '/genres/create',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Жанр добавлен')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });
    })

    $('#delete_genre').click(function(e){
        $('#delete_genre_popup').show()
    })

    $('#delete_genre_popup_close').click(function(e){
        $('#delete_genre_popup').hide()
    })

    $('#cancel_delete_genre').click(function(e){
        $('#delete_genre_popup').hide()
    })

    $('#submit_delete_genre').click(function(e){
        e.preventDefault()
        let data = {
            id: $('#inpId').val(),
        }

        $.ajax({
            type: 'DELETE',
            data: data,
            url: '/genres/delete',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Жанр удален')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });
    })

    $('#update_genre').click(function(e){
        $('#update_genre_popup').show()
    })

    $('#update_genre_popup_close').click(function(e){
        $('#update_genre_popup').hide()
    })

    $('#cancel_update_genre').click(function(e){
        $('#update_genre_popup').hide()
    })

    $('#submit_update_genre').click(function(e){
        e.preventDefault()
        let data = {
            id: $('#inpUpid').val(),
            label: $('#inpUplabel').val(),
        }

        $.ajax({
            type: 'PUT',
            data: data,
            url: '/genres/update',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Данные о жанре изменены')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });
    })
});
