$(function () {
    $('.datepicker').datepicker({
        weekStart: 1,
        todayHighlight: true,
        todayBtn: "linked",
        format: 'dd/mm/yyyy',
        startDate: new Date()
    });
});
