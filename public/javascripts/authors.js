$(document).ready(function(){

    $('#create_author').click(function(e){
        $('#create_author_popup').show()
    })

    $('#create_author_popup_close').click(function(e){
        $('#create_author_popup').hide()
    })

    $('#cancel_create_author').click(function(e){
        $('#create_author_popup').hide()
    })

    $('#submit_create_author').click(function(e){
        e.preventDefault()
        let data = {
            fio: $('#inpFio').val(),
        }

        $.ajax({
            type: 'POST',
            data: data,
            url: '/authors/create',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Автор добавлен')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });
    })

    $('#delete_author').click(function(e){
        $('#delete_author_popup').show()
    })

    $('#delete_author_popup_close').click(function(e){
        $('#delete_author_popup').hide()
    })

    $('#cancel_delete_author').click(function(e){
        $('#delete_author_popup').hide()
    })

    $('#submit_delete_author').click(function(e){
        e.preventDefault()
        let data = {
            id: $('#inpId').val(),
            }

        $.ajax({
            type: 'DELETE',
            data: data,
            url: '/authors/delete',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Автор удален')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });
    })

    $('#update_author').click(function(e){
        $('#update_author_popup').show()
    })

    $('#update_author_popup_close').click(function(e){
        $('#update_author_popup').hide()
    })

    $('#cancel_update_author').click(function(e){
        $('#update_author_popup').hide()
    })

    $('#submit_update_author').click(function(e){
        e.preventDefault()
        let data = {
            id: $('#inpUpid').val(),
            fio: $('#inpUpfio').val(),
        }

        $.ajax({
            type: 'PUT',
            data: data,
            url: '/authors/update',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Данные об авторе изменены')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });
    })


});
