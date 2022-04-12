const form = document.getElementById('bg-modal');

function showForm(){
    form.style.visibility ="visible";
}

function closeForm(){
    form.style.visibility="hidden";
}

function submitForm(){
    return document.getElementById('form-id').checkValidity();
}

$(function(){
    $.ajax({
        url: 'http://www.fulek.com/VUA/SUPIT/ContactUs',
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify({
            "name": $('#input-full-name').val(),
            "email": $('#input-email').val(),
            "importance": $('#input-msg-importance').val(),
            "newsletter": $('newsletter-checkbox').is(':checked'),
            "message": $('#input-msg').val()
        })
    })
})