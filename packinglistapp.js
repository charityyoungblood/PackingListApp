
/* If user selects "male" display additional products with .male-products class
   If user selects "female" display additional products with .female-products class
   */
var x = document.getElementById("pleasure-questions").required;

window.onload = function() {
    document.getElementById("male-gender").onclick = function(){
        var maleQuestion = document.getElementById("male-gender");
        if (maleQuestion.checked){
            ;
        }
     };
}

window.onload = function() {
    document.getElementById("female-gender").onclick = function(){
        var femaleQuestion = document.getElementById("female-gender");
        if (femaleQuestion.checked){
            ;
        }
     };
}