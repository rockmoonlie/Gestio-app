/*home with the tables
first let's make the checkboxes work */

function checkAll() {
    let select_all = document.getElementById('select_deselect');
    if (select_all.checked == true){
        let selectOption = document.getElementsByName ('option')
        for( let i = 0; i<selectOption.length; i++){
            selectOption[i].checked = true
        } 
    }else {
        let selectOption = document.getElementsByName ('option')
        for( let i = 0; i<selectOption.length; i++){
            selectOption[i].checked = false
        } 
    }
    
}

