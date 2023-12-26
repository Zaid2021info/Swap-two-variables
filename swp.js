




function swapVariablesss() {
    // Get the values from the input fields
   

    var variable1 = document.getElementById("variable1").value;
    var variable2 = document.getElementById("variable2").value;


    // Swap the values

   
  

    // Display the result
    document.getElementById("oppo").innerHTML = "Before Swap: Variable 1 = " + variable1 + ", Variable 2 = " + variable2;


}
function swapVariables() {
    // Get the values from the input fields
   

    var variable1 = document.getElementById("variable1").value;
    var variable2 = document.getElementById("variable2").value;


    // Swap the values

    var temp = variable1;
            variable1 = variable2;
            variable2 = temp;
  

    // Display the result
    document.getElementById("result").innerHTML = "After Swap: Variable 1 = " +     variable1 + ", Variable 2 = " + variable2;


}










