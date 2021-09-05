
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
    return this._numberOfStudents
  };

// Setters: the numberOfStudents property has a setter
  set numberOfStudents(newNumberOfStudents){
      this._numberOfStudents = newNumberOfStudents;
  };

Methods: .quickFacts() and .pickSubstituteTeacher() (this is a static method)

}
