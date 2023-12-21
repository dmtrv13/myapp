$(document).ready(function(){

    $('#create_user').click(function(e){
        $('#create_user_popup').show()
    })

    $('#create_user_popup_close').click(function(e){
        $('#create_user_popup').hide()
    })

    $('#cancel_create_user').click(function(e){
        $('#create_user_popup').hide()
    })

    $('#submit_create_user').click(function(e){
        e.preventDefault()
        let data = {
            fio: $('#inpFio').val(),
            login: $('#inpLogin').val(),
            pass: $('#inpPass').val(),
            id_role: $('#inpRole').val(),
        }

        $.ajax({
            type: 'POST',
            data: data,
            url: '/users/create',
            dataType: 'JSON'
        }).done(function( response ) {
 
            if (response.msg === '') {
                alert('Пользователь добавлен')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });
    })

    $('#delete_user').click(function(e){
        $('#delete_user_popup').show()
    })

    $('#delete_user_popup_close').click(function(e){
        $('#delete_user_popup').hide()
    })

    $('#cancel_delete_user').click(function(e){
        $('#delete_user_popup').hide()
    })

    $('#submit_delete_user').click(function(e){
        e.preventDefault()
        let data = {
            id: $('#inpId').val()
        }

        $.ajax({
            type: 'DELETE',
            data: data,
            url: '/users/delete',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Пользователь удален')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });
    })

    $('#update_user').click(function(e){
        $('#update_user_popup').show()
    })

    $('#update_user_popup_close').click(function(e){
        $('#update_user_popup').hide()
    })

    $('#cancel_update_user').click(function(e){
        $('#update_user_popup').hide()
    })

    $('#submit_update_user').click(function(e){
        e.preventDefault()
        let data = {
            id: $('#inpUpid').val(),
            fio: $('#inpUpfio').val(),
            login: $('#inpUplogin').val(),
            pass: $('#inpUppass').val(),
            id_role: $('#inpUprole').val(),
        }

        $.ajax({
            type: 'PUT',
            data: data,
            url: '/users/update',
            dataType: 'JSON'
        }).done(function( response ) {
 
            if (response.msg === '') {
                alert('Данные о пользователе изменены')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });
    })

    $.ajax({
        type: 'GET',
        url: '/api/users',
        dataType: 'JSON'
    }).done(function( response ) {

        response.users.forEach(user => {
            $('#tbl_users').append(
                `<tr>
                    <td>${user.id}
                    <td>${user.login}
                    <td>${user.fio}
                    <td>${user.role_label}
                </tr>`
            )
        })
    });
});
