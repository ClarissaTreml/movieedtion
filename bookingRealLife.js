$(function () {
    $('.datepicker').datepicker({
        weekStart: 1,
        todayHighlight: true,
        todayBtn: "linked",
        format: 'dd/mm/yyyy',
        startDate: new Date()
    });
});

$(function () {

    function autoCalcSetup() {
        $('form#cart').jAutoCalc('destroy');
        $('form#cart tr.line_items').jAutoCalc({keyEventsFire: true, decimalPlaces: 2, emptyAsZero: true});
        $('form#cart').jAutoCalc({decimalPlaces: 2});

    }

    autoCalcSetup();


    $('button.row-remove-harry').on("click", function (e) {
        e.preventDefault();
        document.getElementById("harry").value = '0';
        autoCalcSetup();
    });

    $('button.row-remove-paranormal').on("click", function (e) {
        e.preventDefault();
        document.getElementById("paranormal").value = '0';
        autoCalcSetup();
    });

    $('button.row-remove-avenger').on("click", function (e) {
        e.preventDefault();
        document.getElementById("avenger").value = '0';
        autoCalcSetup();
    });

    $('button.row-remove-jigsaw').on("click", function (e) {
        e.preventDefault();
        document.getElementById("jigsaw").value = '0';
        autoCalcSetup();
    });

    $('button.row-remove-inception').on("click", function (e) {
        e.preventDefault();
        document.getElementById("inception").value = '0';
        autoCalcSetup();
    });


});










