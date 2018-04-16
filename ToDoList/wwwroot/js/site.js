// Write your Javascript code.

$("input[type=checkbox]").change(function() {
  if (this.checked) {
    $(".strike").css('text-decoration', 'line-through');
  } 
 
});

function taskDone(id,  checkBoxId) {
    var c = document.getElementById(id);
    var  checkBox = document.getElementById(checkBoxId); //getting checkbox
    if (checkBox.checked) { //validating checked or not
        c.className = "strike";
    }
    else {
        c.className = "nostrike";
    }
}