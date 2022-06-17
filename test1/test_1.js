
/*  Declaration:
I declare that this test is my own work in accordance with Seneca College’s Academic Policies.  No part of this work has been copied manually or electronically from any other source
  (including 3rd party web sites) or distributed to other students.
I acknowledge that by beginning this test, I will abide by the above.
Name: Usama Sidat
Student Number: 131034217
Email: uisidat@myseneca.ca
*/

function factor(...input){
    var i=0;
    var prod=1;
    lastele= input.pop();
    length= input.length;
    var partf="";
    var notf="";
    console.log("========== Factors ==========");
    for (i=0; i<input.length; i++){
        prod*=(input[i]);   
    }
    if(prod==lastele){
        console.log(input.join(), "are complete factors of", lastele,".");
    }
    else if (prod!=lastele){
        for (i=0; i<input.length; i++){
            if(lastele%(input[i])==0){
                partf+=input[i]+",";
            }
            else if(lastele%(input[i])!=0){
                notf+=input[i]+",";
            }
        }
        if(partf.length!=0){
            console.log(partf, "is(are) partial factor(s) of", lastele,".");
        }
        if(notf.length!=0){
        console.log(notf, "is(are) not factor(s) of", lastele,".");
        }
    }
}
factor(2,3)
factor(2,3,6);
factor(2,3,4,9);
factor(2,3,4,6,12);
factor(2,3,4,5);
