function doSearch(text,color="red") {
    if (color!=="transparent") {
        doSearch(document.getElementById('hid_search').value,"transparent");
        document.getElementById('hid_search').value = text;
    }
    if (window.find && window.getSelection) {
        document.designMode = "on";
        var sel = window.getSelection();
        sel.collapse(document.body, 0);

        while (window.find(text)) {
            document.execCommand("HiliteColor", false, color);
            sel.collapseToEnd();
        }
        document.designMode = "off";
    } else if (document.body.createTextRange) {
        var textRange = document.body.createTextRange();
        while (textRange.findText(text)) {
            textRange.execCommand("BackColor", false, color);
            textRange.collapse(false);
        }
    }
}
