let students = [    { name: "John", marks: 85, grade: "A" },
                    { name: "David", marks: 72, grade: "B" },
                    { name: "Peter", marks: 90, grade: "A+" },
                    { name: "Sarah", marks: 65, grade: "C" }
  ];

//1. forEach() – Print the details of every student.
console.log("All Students:");
students.forEach(function(student) {
  console.log(`${student.name} - ${student.marks} - ${student.grade}`);
});

//2. map() – Create a new array containing only the names of all students.
console.log("Student Names:");
let studentNames = students.map(function(student) {
  return student.name;
});
console.log(studentNames);

//3. filter() – Create a new array containing only the students who scored 80 or above.
console.log("Students who scored 80 or above:");
let highScorers=students.filter(function(student){
  return student.marks>=80;
});
console.log(highScorers);