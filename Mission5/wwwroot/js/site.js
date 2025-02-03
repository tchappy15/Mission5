// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () { //ensure that the code inside it runs only after the DOM has fully loaded
    $("#calculate-btn").click(function () { //calculate rate * hours in this function
        let hours = $("#hours").val();
        let rate = $("#rate").val();

        if (hours > 0) {
            $("#error-message").hide();
            let total = hours * rate;
            $("#total").val(total.toFixed(2)); //2 decimal points
        } else {
            $("#error-message").show(); //show error message
            $("#total").val("");
        }
    });
});