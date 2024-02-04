$(document).ready(function () {
    $('#calculate').click(function () {
        // Validation to make sure they 
        //actually entered a positive number
        var hours = $('#hours').val();
        if (hours === '' || isNaN(hours) || hours <= 0) {
            alert('Please enter a positive number for hours.');
            return false;
        }

        // calculation
        var rate = $('#rate').val();
        var total = parseFloat(hours) * parseFloat(rate);

        // result
        $('#total').val(total.toFixed(2)); // 2 dec places
    });
});
