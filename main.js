
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
      this._numberOfStudents = newNumberOfStudents;
  }

// Methods: .quickFacts() and .pickSubstituteTeacher() (this is a static method)
  pickSubstituteTeacher(){

  }

  quickFacts(){

  }
}

 // -------------------- Primary (sub-class) --------------------
class Primary extends School{
    constructor(name, level, numberOfStudents, pickupPolicy){
        super(name, level, numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy(){
        return this._pickupPolicy = pickupPolicy;
    }
}

 // -------------------- High (sub-class) --------------------

class High extends School{
      constructor(name, level, numberOfStudents, sportsTeams){
          this._sportsTeams = sportsTeams;
      }

      get sportsTeams(){
          return this._sportsTeams;
        }

}
