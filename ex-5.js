function calculateStudentGrade(score) {
  // Start coding here
  if (0 <= score && score <= 59) {
    return "F";
  } else if (60 <= score && score <= 69) {
    return "D";
  } else if (70 <= score && score <= 79) {
    return "C";
  } else if (80 <= score && score <= 89) {
    return "B";
  } else if (90 <= score && score <= 100) {
    return "A";
  }
}

// Example case
let johnGrade = calculateStudentGrade(30);
let lisaGrade = calculateStudentGrade(73);
let janeGrade = calculateStudentGrade(80);
let jjGrade = calculateStudentGrade(60);
let alexGrade = calculateStudentGrade(90);

console.log(`John grade is ${johnGrade}`);
console.log(`Lisa grade is ${lisaGrade}`);
console.log(`Jane grade is ${janeGrade}`);
console.log(`JJ grade is ${jjGrade}`);
console.log(`Alex grade is ${alexGrade}`);
