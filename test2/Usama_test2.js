/*  Declaration:
I declare that this test is my own work in accordance with Seneca College’s Academic Policies.  No part of this work has been copied manually or electronically from any other source (including 3rd party web sites) or distributed to other students.
I acknowledge that by beginning this test, I will abide by the above.
Name: Usama Sidat
Student Number: 131034217
*/
function capitalizeName(name){
    var i;                                                              //Initializing the iterator i
    const temp = name.split(" ");                                       //Splitting the string words which are seperated by white spaces into a seperate array of words and storing it in temp

    for(i=0; i<temp.length; i++){                                       //A for loop to change the first letter of all the words to an uppercase using the built-in functions and rest remains as it is
        temp[i]=temp[i].charAt(0).toUpperCase() + temp[i].slice(1);
    }

    result=temp.join(" ");                                              //Converting into string format using join for printing
    return result;                                                      //Returns the result
}
//Testers
console.log(capitalizeName("Bryan stevenson"));
console.log(capitalizeName("jayce a. tapia"));
console.log(capitalizeName("math"));
console.log(capitalizeName("I love programming"));
console.log(capitalizeName("1+2+3"));
console.log(capitalizeName("Good Morning"));


