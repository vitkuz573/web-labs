$("document").ready(function () {
    $("#calc_form").submit(function (event) {
        let formData = $('#calc_form').serialize()

        $.post('result.php', formData, function(response) {
            $('#result').val(response)
        })
  
        event.preventDefault()
    })
})