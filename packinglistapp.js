window.onload = function() {
    document.getElementById("male-gender").onclick = function(){
        var genderQuestion = document.getElementById("male-gender");
        if (genderQuestion.checked){
            alert("CORRECT");
        }
     };
}