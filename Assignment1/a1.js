/****************************************************************************
* Assignment 1
* I declare that this assignment is my own work in accordance with Seneca AcademicPolicy.
* No part of this assignment has been copied manually or electronically from any othersource (including web sites) or distributed to otherstudents.
* Name: Usama Sidat
* Student ID: 131034217
* Date: 20th Jan 2022
****************************************************************************/

///***************************** Task1 Starts here *************************///

function playNumbers(...input){
    var a=0;
    type="none";
    for(a=0; a<input.length; a++){
        if ((typeof(input[a])=="string")==true){
            type="contains_string";
        }
        else{
            type="doesnt_contain_string";
        }  
    }
    if(input.length==0){
        console.log("There are no inputs.");
    }
    else if(type=="contains_string"){
        var i=0;
            for (i=0; i<input.length; i++){
            if (typeof(input[i]) != "number"){
                console.log(input[i], "is not a number.");
            }
        }
    }
    else if(type=="doesnt_contain_string"){
        let j=0;
        let largest=input[0];
        for(j=0; j<input.length; j++){
            if (input[0]<input[j]){
                largest = input[j];
                j++
            }
        }
        console.log("The largest number of", input, "is", largest);
            
        let k=0;
        let tot=0;
        for (k=0; k<input.length;k++){
            tot+=input[k];
        }
        console.log("The average of", input, "is", tot/input.length);
    }
    else{
        console.log("Invalid input! Try again.")
    }
    
}

console.log("/***************************** Task1 *************************/");
playNumbers();
playNumbers("abc", 3, "hello");
playNumbers(9,3,6);
playNumbers(3,5,1,3,5);
playNumbers("Good day!",3,4,32,"hi", "we");


///***************************** Task2 Starts here *************************///


function convertCF(val,cf){
    if ((isNaN(val))==true){
        console.log("I need a number.")
    }
    else if(cf!="C"&&cf!="F"){
        console.log("I am confused :(")
    }
    else if(cf=="C"){
        console.log(val+cf,"is equivalent to", val* (9/5)+32+"F");
    }
    else if(cf=="F"){
        console.log(val+cf,"is equivalent to", (val-32)*(5/9)+"C");
    }
    else{
        console.log("Invalid Input! Try again.")
    }
}

console.log("/***************************** Task2 *************************/");
convertCF("avc", "F");
convertCF("32", "M");
convertCF(32, 'F');
convertCF(0, "C");
convertCF(122, "F");



/*
OUTPUT FOR REFERENCE--

PS D:\Winter 2022\WEB222 Lab (Sunny Shi)\Assignment1> node .\a1.js
/***************************** Task1 *************************
There are no inputs.
abc is not a number.
hello is not a number.
The largest number of [ 9, 3, 6 ] is 9
The average of [ 9, 3, 6 ] is 6
The largest number of [ 3, 5, 1, 3, 5 ] is 5
The average of [ 3, 5, 1, 3, 5 ] is 3.4
Good day! is not a number.
hi is not a number.
we is not a number.
/***************************** Task2 *************************
I need a number.
I am confused :(
32F is equivalent to 0C
0C is equivalent to 32F
122F is equivalent to 50C
PS D:\Winter 2022\WEB222 Lab (Sunny Shi)\Assignment1> 
*/