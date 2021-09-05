
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
