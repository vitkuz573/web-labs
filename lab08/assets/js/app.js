$("document").ready(function () {
    $("#pk_form").submit(function (event) {
        let formData = $('#pk_form').serialize()

        $.post('search.php', formData, function(response) {
            $('#result').html(response)
        })
  
        event.preventDefault()
    })
})