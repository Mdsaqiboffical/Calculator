// var a = prompt("hello world")
// var b = prompt("hy")
// if(b == 0){
//     alert("Uzaima")
// } else if(b == 1) {
//     alert("Saqib")
// } else (
//     alert("Ubaid")
// )



var newNumber1 = prompt("Enter First Number");
newNumber1 = parseInt(newNumber1);
var newNumber2 = prompt("Enter Second Number");
newNumber2 = parseInt(newNumber2);

var value = prompt("CHOOSE OPERATOR?");

var addition = newNumber1 + newNumber2;
var subtraion = newNumber1 - newNumber2;
var multiplication = newNumber1 * newNumber2;
var division = newNumber1 / newNumber2;

if (value === "+") {
    alert(addition);
}
else if (value === "-") {
    alert(subtraion);
}
else if (value === "*") {
    alert(multiplication);
}
else if (value === "/") {
    alert(division);
}
else {
    alert("INVALID INPUT");
}
