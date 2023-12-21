$(document).ready(function(){

    $('#create_order').click(function(e){
        $('#create_order_popup').show()
    })

    $('#create_order_popup_close').click(function(e){
        $('#create_order_popup').hide()
    })

    $('#cancel_create_order').click(function(e){
        $('#create_order_popup').hide()
    })

    $('#submit_create_order').click(function(e){
        e.preventDefault()
        let data = {
            id_book: $('#inpBook').val(),
            id_reader: $('#inpReader').val(),
            id_status: $('#inpStatus').val()
        }

        $.ajax({
            type: 'POST',
            data: data,
            url: '/book_issuance/create',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Заказ создан')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });
    })

    $('#delete_order').click(function(e){
        $('#delete_order_popup').show()
    })

    $('#delete_order_popup_close').click(function(e){
        $('#delete_order_popup').hide()
    })

    $('#cancel_delete_order').click(function(e){
        $('#delete_order_popup').hide()
    })

    $('#submit_delete_order').click(function(e){
        e.preventDefault()
        let data = {
            id: $('#inpId').val()
        }

        $.ajax({
            type: 'DELETE',
            data: data,
            url: '/book_issuance/delete',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Заказ удален')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });
    })

    $('#update_order').click(function(e){
        $('#update_order_popup').show()
    })

    $('#update_order_popup_close').click(function(e){
        $('#update_order_popup').hide()
    })

    $('#cancel_update_order').click(function(e){
        $('#update_order_popup').hide()
    })

    $('#submit_update_order').click(function(e){
        e.preventDefault()
        let data = {
            id: $('#inpUpid').val(),
            id_book: $('#inpUpbook').val(),
            id_reader: $('#inpUpreader').val(),
            id_status: $('#inpUpstatus').val()
        }
 
        $.ajax({
            type: 'PUT',
            data: data,
            url: '/book_issuance/update',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Данные о заказе изменены')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });
    })

    $('#found_order').click(function(e){
        $('#found_order_popup').show()
    })

    $('#found_order_popup_close').click(function(e){
        $('#found_order_popup').hide()
    })

    $('#cancel_found_order').click(function(e){
        $('#found_order_popup').hide()
    })

    $('#submit_found_order').click(function(e){
        e.preventDefault()
        let data = {
            id: $('#inpFbook').val(),
        }
 
        $.ajax({
            type: 'GET',
            data: data,
            url: '/book_issuance/:id',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Данные найдены')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });
    })
});
