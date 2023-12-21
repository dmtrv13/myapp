$(document).ready(function(){

    $('#create_reader').click(function(e){
        $('#create_reader_popup').show()
    })

    $('#create_reader_popup_close').click(function(e){
        $('#create_reader_popup').hide()
    })

    $('#cancel_create_reader').click(function(e){
        $('#create_reader_popup').hide()
    })

    $('#submit_create_reader').click(function(e){
        e.preventDefault()
        let data = {
            label: $('#inpLabel').val(),
            phone_number: $('#inpPhone').val(),
        }

        $.ajax({
            type: 'POST',
            data: data,
            url: '/readers/create',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Читатель добавлен')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });
    })
 
    $('#delete_reader').click(function(e){
        $('#delete_reader_popup').show()
    })

    $('#delete_reader_popup_close').click(function(e){
        $('#delete_reader_popup').hide()
    })

    $('#cancel_delete_reader').click(function(e){
        $('#delete_reader_popup').hide()
    })

    $('#submit_delete_reader').click(function(e){
        e.preventDefault()
        let data = {
            id: $('#inpId').val()
        }

        $.ajax({
            type: 'DELETE',
            data: data,
            url: '/readers/delete',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Читатель удален')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });
    })

    $('#update_reader').click(function(e){
        $('#update_reader_popup').show()
    })

    $('#update_reader_popup_close').click(function(e){
        $('#update_reader_popup').hide()
    })

    $('#cancel_update_reader').click(function(e){
        $('#update_reader_popup').hide()
    })

    $('#submit_update_reader').click(function(e){
        e.preventDefault()
        let data = {
            id: $('#inpUpid').val(),
            label: $('#inpUplabel').val(),
            phone_number: $('#inpUpphone').val(),
        }

        $.ajax({
            type: 'PUT',
            data: data,
            url: '/readers/update',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Данные о читателе изменены')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });
    })

});
