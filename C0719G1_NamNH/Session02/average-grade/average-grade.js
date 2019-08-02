let physicalGrade;
do {
    physicalGrade = parseInt(prompt("Input physical grade: "));
} while(physicalGrade < 0);

let mathGrade;
do {
    mathGrade = parseInt(prompt("Input math grade: "));
} while(mathGrade < 0);


let biologicalGrade;
do {
    biologicalGrade = parseInt(prompt("Input biological grade: "));
} while(biologicalGrade < 0);

alert("Average grade of 3 subjects: " + (physicalGrade + mathGrade + biologicalGrade)/3);
