/****************************************************************************
* Assignment 2
* I declare that this assignment is my own work in accordance with Seneca AcademicPolicy.
* No part of this assignment has been copied manually or electronically from any othersource
* (including web sites) or distributed to otherstudents.
 
Name: Usama Sidat
Student ID: 131034217
Date: 10-02-2022
****************************************************************************/

//Task 1 starts here
var courses = [ {code: "APC100" ,name: "Applied professional communication" , hours: 3, url:"http:/www.senecacollege.ca"},      //An array of objects containing 4 different values for each of them created with the name as "courses"
{code: "IPC144" ,name: "Introduction to C programming" , hours: null, url:"http:/www.senecacollege.ca/ipc"},
{code: "ULI101" ,name: "Linux and the Internet" , hours: 4, url:"http:/www.senecacollege.ca/lin"},
{code: "IOS110" ,name: "Windows Operating System" , hours: 4, url:"http:/www.senecacollege.ca/ios"},
{code: "EAC150" ,name: "College English" , hours: 3, url: null}];

var lastele= courses.pop();                                                                                                       //An array method (pop) to remove the last object form the course array and storing it in lastele variable
console.log("The last course in the array is: ", "\n", "\t", "    code:", lastele.code,",","\n","\t","    name:", lastele.name);  //Displaying the course which was removed from the array.

WEB222={code: "WEB222", name:"Web Programming Principles",                                                                       //Creating another course object called WEB222
hours: 4, url: "http:/www.senecacollege.ca/web"};
courses.splice(courses.length,0,WEB222);                                                                                        //Adding the newly created object WEB222 to the courses array using splice

var tot_hours=0;                                                                                                                //Initializing the tot_hours variable to 0
for(var i=0; i<courses.length; i++){                                                                                            //Using a for loop to count the total number of hours of all the courses in the array
    tot_hours+=courses[i].hours;
}

console.log("\nTotal hours for all courses: ",tot_hours, "hours.");                                                            //Printing the total number of hours


//Task 2 starts here
console.log("-------------------Task 2-------------------")
function Student(name, dob, sid, program, gpa){
    this.name=name;
    this.dob=dob.toLocaleString();
    this.sid=sid;
    this.program=program;
    this.gpa=gpa;
}
Student.prototype.toString= function() {
    console.log("Student info for "+ this.name, ":\n\tDate of Birth: "+ this.dob+"\n\tStudent ID: "+ this.sid+ ",\n\tProgram: "+ this.program+"\n\tGPA: "+ this.gpa+"\n");
}

var students=[];
const student1= new Student("Usama", new Date(2003,02,28), 131034217, "CPA", 3.9);
const student2= new Student("Sameer", new Date(2001,05,18), 13126717, "CPP", 3.8);
const student3= new Student("Khizar", new Date(1999,10,05), 144534297, "CPD", 3.7);
const student4= new Student("Anmol", new Date(2001,08,09), 368281982, "CPP",4.0);
students.push(student1);
students.push(student2);
students.push(student3);
students.push(student4);

students.forEach(element => element.toString());

function highGPA(stu_array){
    console.log("Student with highest gpa is:");
    var temp =0;
    var j=0;
    for(i=0; i<stu_array.length; i++){
        if(temp<stu_array[i].gpa){
            temp=stu_array[i].gpa
            j=i;
        }
    }
    return stu_array[j]
}

highGPA(students).toString();