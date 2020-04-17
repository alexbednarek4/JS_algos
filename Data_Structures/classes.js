class Student {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.tardies = 0;
    this.scores = [];
  }
  fullName() {
    return "Your full name is ${this.firstName} ${this.lastName}.";
  }
  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) return "You OUTTA HERE";
    return "${this.firstName} + ${this.lastName} has been late ${this.tardies} times.";
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    const sum = this.scores.reduce((scores, grade) => scores + grade);
    return sum / this.scores.length;
  }
  static enrollStudents() {
    return "COMMENCE ENROLLING STUDENTS";
  }
}

const Alex = new Student("Alex", "Bednarek", 24);

Alex.addScore(93);
Alex.addScore(90);
Alex.addScore(95);
console.log(Alex);
console.log("Alex has an average of", Alex.calculateAverage());
