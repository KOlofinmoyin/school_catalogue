
// -------------- School (super-class) ------------------------

class School{

    //name (string), level (one of three strings: 'primary', 'middle', or 'high'), and numberOfStudents (number)
    constructor(name, level, numberOfStudents){
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

// Getters: all properties have getters

  get name(){
    return this._name;
  }

  get level(){
    return this._level;
  }

  get numberOfStudents(){
    return this._numberOfStudents;
  }

// Setters: the numberOfStudents property has a setter
  set numberOfStudents(newNumberOfStudents){
    return Number.isInteger(newNumberOfStudents) ? this._numberOfStudents = newNumberOfStudents :
    'Invalid input: numberOfStudents must be set to a Number.';
  }

// Methods: .quickFacts() and .pickSubstituteTeacher() (this is a static method)
  static pickSubstituteTeacher(substituteTeachers){
      let teacherSelected = Math.floor(Math.random() * substituteTeachers.length)
      return substituteTeachers[teacherSelected];
  }

  quickFacts(){
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
  }
}

 // -------------------- Primary (sub-class) --------------------
class PrimarySchool extends School{
    constructor(name, numberOfStudents, pickupPolicy){
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy(){
        return this._pickupPolicy = pickupPolicy;
    }
}

// -------------------- Middle (sub-class) --------------------
class MiddleSchool extends School{
   constructor(name, numberOfStudents, pickupPolicy){
     super(name, 'middle', numberOfStudents);
       this._pickupPolicy = pickupPolicy;
   }

   get pickupPolicy(){
       return this._pickupPolicy = pickupPolicy;
   }
}

 // -------------------- High (sub-class) --------------------

class HighSchool extends School{
      constructor(name, numberOfStudents, sportsTeams){
        super(name, 'high', numberOfStudents);
          this._sportsTeams = sportsTeams;
      }

      get sportsTeams(){
        for (const team of this._sportsTeams){
          console.log(` - ${team}`);
          }
        }
}

// Primary School instance:
console.log(`Task: PrimarySchool class instance, with #quickFacts() called on it:`);

let lorraineHansbury = new PrimarySchool('Output: Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

console.log('\n')

console.log(`${lorraineHansbury.quickFacts()}`);

console.log('\n---------------- o ---------------- \n')

// //substitute teacher array
substituteTeachers = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];

console.log(`
Task: The principal of Lorraine Hansbury needs a substitute teacher for the day.

Call .pickSubstituteTeacher() on School, and pass the following substitute teacher array as an argument:`)

console.log('\n');

console.log(`Output: Your substitute teacher is: ${School.pickSubstituteTeacher(substituteTeachers)}.`)


// // High School instance:
let alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(`The sports-teams at ${alSmith.name} are:`);
alSmith.sportsTeams;

console.log('\n---------------- o ---------------- \n')
