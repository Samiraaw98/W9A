// function 1
function add(number1 , number2) {
    var added =number1 + number2 * 5;
    return added; 
    
}
var num = add (3,5)
console.log(num);

//function 2 


function isSmall(str){
 if (str < 10){
   return true;
} else if (str >= 10){
    return false; 
} else {
 console.log("ERROR");
 return undefined;
}
}

var myStr = ["Innotechhhhgg"];
var filtered = myStr.filter(isSmall);
console.log(filtered);
console.log(myStr);
    
//Function 3



     
