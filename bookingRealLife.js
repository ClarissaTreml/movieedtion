
    var date = new Date ();
    var tdate = date.getDate();
    var month = date.getMonth();
    var year = date.getUTCFullYear();

    var minDate = year + "-" + month + "-" + tdate;
    document.getElementById("calendar").setAttribute('min', minDate);

