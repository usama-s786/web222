/*  Declaration:
I declare that this test is my own work in accordance with Seneca College’s Academic Policies.  No part of this work has been copied manually or electronically from any other source
(including 3rd party web sites) or distributed to other students.
I acknowledge that by beginning this test, I will abide by the above.

Name: Usama Sidat
Student Number: 131034217
*/

//Task 1 starts here:
customers=[                                                         //Instantiated an array of customers, which here is of size 4
{firstName:"First1",                                                //First object, i.e 1st customer followed by its properties
lastName:"Last1",
moneySpent:[1080.89,783.23,68.09],
products:["product1","product2", "product3"], 
total: function(){                                                  
    var sum=0;
    for(var i=0; i<this.moneySpent.length; i++){
        sum+=this.moneySpent[i];
    }
    return sum;
    }  
},
{firstName:"First2",                                                //Second object, i.e 2nd customer followed by its properties
lastName:"Last2", 
moneySpent:[80.89,73.23,1368.09], 
products:["product1","product2", "product3"],
total: function(){
    var sum=0;
    for(var i=0; i<this.moneySpent.length; i++){
        sum+=this.moneySpent[i];
    }
    return sum;
    }
},
{firstName:"First3",                                                //Third object, i.e 3rd customer followed by its properties
lastName:"Last3", 
moneySpent:[580.89,7083.23,608.09], 
products:["product1","product2", "product3"],
total: function(){
    var sum=0;
    for(var i=0; i<this.moneySpent.length; i++){
        sum+=this.moneySpent[i];
    }
    return sum;
    }

},
{firstName:"First4",                                                //Fourth object, i.e 4th customer followed by its properties
lastName:"Last4", 
moneySpent:[100.89,1783.23,6.09], 
products:["product1","product2", "product3"],
total: function(){
    var sum=0;
    for(var i=0; i<this.moneySpent.length; i++){
        sum+=this.moneySpent[i];
    }
    return sum;
    }
}];

//Task 2 starts here:
function level(...def){                                             //A function to display the level of the amount spent by the customer for each products.
    var result;                                                     //Declaring the variable
    if(def>=1000){                                                  //Condition to check for equal or more than 1000
        result="super";
    }
    else if(def>=500 && def<1000){                                  //Condition to check for equal or more than 500 and less than 1000
        result="good";
    }
    else if(def<500){                                               //Condition to check for less than 500
        result="potential";
    }
    else{                                                           //Condition to check if the input is not valid
        result="Invalid";
    }
    return result;                                                  //Returning the result
}

for(var z=0; z<customers.length; z++){                              //A for loop to display all the information of the customers
    console.log("\n",customers[z].firstName, customers[z].lastName, "is a", "\n", level(customers[z].moneySpent[0]), "customer for", customers[z].products[0], ",", "\n", level(customers[z].moneySpent[1]), "customer for", customers[z].products[1], ",", "\n", level(customers[z].moneySpent[2]), "customer for", customers[z].products[2],"\n", "In total, he spent $", customers[z].total(), "for all products.", "\n");
    console.log("===============================================")
}




/*
MY OUTPUT FOR REFERENCE:---
PS D:\Winter 2022\WEB222 Lab (Sunny Shi)\Test-3> node .\test3.js

 First1 Last1 is a
 super customer for product1 ,
 good customer for product2 ,
 potential customer for product3
 In total, he spent $ 1932.21 for all products.

===============================================

 First2 Last2 is a
 potential customer for product1 ,
 potential customer for product2 ,
 super customer for product3
 In total, he spent $ 1522.21 for all products.

===============================================

 First3 Last3 is a
 good customer for product1 ,
 super customer for product2 ,
 good customer for product3
 In total, he spent $ 8272.21 for all products.

===============================================

 First4 Last4 is a
 potential customer for product1 ,
 super customer for product2 ,
 potential customer for product3
 In total, he spent $ 1890.21 for all products.

===============================================

*/

