$(document).ready(function () {
    $('input').change(function () {
        var currentObj = $(this);
        var alerterror = currentObj.parent().children('.form-alert');
        if (currentObj.val() != "") {
            currentObj.addClass('notempty');
        }
        else {
            if(currentObj.hasClass('notempty'))
            currentObj.removeClass('notempty');
        }
        if(currentObj.attr('required') && currentObj.val() == "")
        {
            alerterror.addClass('ready-active');
        }
        else
        {
            alerterror.removeClass('ready-active');
        }
        if (currentObj.attr('type') == 'email') {
            
            if ($(this).val().indexOf('@') === -1 || $(this).val().indexOf('.') === -1) {
                alerterror.addClass('ready-active');
            }
        }
    });
    $('#MformAJ button').click(function () {
        $('#MformAJ input').each(function () {
            var currentObj = $(this);
            var alerterror = currentObj.parent().children('.form-alert');
            if ($(this).attr('required') && $(this).val() == "") {
                alerterror.addClass('ready-active');
            }
        });
    });
    $('input').click(function (e) {
        var currentObj = $(this);
        var arrow = currentObj.parent().children('.form-arrow');
        arrow.addClass('ready-active');
        $(this).css('padding-left', '40px');
    });
    $('input').focusout(function () {
        var currentObj = $(this);
        var arrow = currentObj.parent().children('.form-arrow');
        arrow.removeClass('ready-active');
        $(this).css('padding-left', '0');
    });
});