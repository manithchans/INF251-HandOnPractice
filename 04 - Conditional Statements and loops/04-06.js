/*
Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade. 
Student Name 	Marks
David 	80
Vinoth 	77
Divya 	88
Ishitha 	95
Thomas 	68

The grades are computed as follows :
Range 	Grade
<60 	F
<70 	D
<80 	C
<90 	B
<100 	A 
*/

function findGrade(name, score){
    var grade;
    if (score <60) grade = "F";
    else if (score<70) grade = "D";
    else if (score<80) grade = "C";
    else if (score<90) grade = "B";
    else grade = "A";

    console.log(`${name} ${score}        ${grade}`);
}
console.log("Name    Marks     Grade");
findGrade("David  ",80);
findGrade("Vinoth ",77);
findGrade("Divya  ",88);
findGrade("Ishitha",95);
findGrade("Thomas ",68);