var bold_items ;
    window.onload = getBold_items()

    function getBold_items() {
        bold_items = document.getElementsByTagName('b')
    }

    function highlight() {
        for(var i  =0; i <bold_items.length; i++) {
            bold_items[i].style.color = "red"
        }
    }

    function back_normal() {
        for(var i = 0; i <bold_items.length; i++) {
            bold_items[i].style.color = "black"
        }
    }
