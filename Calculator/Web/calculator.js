/// <reference path="calculator.js" />


$(document).ready(function () {

    $(":button").click(function () {
        var value1 = $("#txtValue1").val();
        var value2 = $("#txtValue2").val();
        var arg = "value1=" + value1 + "&value2=" + value2;
        var control = event.target || event.srcElement;
        var id = control.id;

        var urlString = "/api/math/";

        switch (id) {
            case 'btnAdd':
                urlString = urlString + "Add/?" + arg;
                break;
            case 'btnMinus':
                urlString = urlString + "Subtract/?" + arg;
                break;
            case 'btnMultiply':
                urlString = urlString + "Multiply/?" + arg;
                break;
            case 'btnDivide':
                urlString = urlString + "Divide/?" + arg;
                break;

        }


        $.ajax({
            url: urlString,
            type: "GET",
            dataType: 'json',
            success: function (result) {
                $("#txtResult").val(result);
            },
            error: function (xhr, status, error) {
                var err = eval("(" + xhr.responseText + ")");
                $("#txtResult").val(err.Message)
            }
        })

    });

});