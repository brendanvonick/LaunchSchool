// In this exercise, you'll add a mixin to your solution from this exercise.
// The mixin adds invoice and payTax methods.

// Check out the example run and note how the Professional mixin is applied to
// the Doctor and Professor constructors via extend:

const delegate = (obj, methodOwner, methodName) => {
  return function() {
    return methodOwner[methodName].apply(obj, arguments);
  }
}

const extend = (obj, mixin) => {
  let methodNames = Object.keys(mixin);

  methodNames.forEach(methodName => {
    obj[methodName] = delegate(obj, mixin, methodName);
  })

  return obj;
}

const Professional = {
  invoice() {
    console.log(`${this.fullName()} is Billing customer`);
  },

  payTax() {
    console.log(`${this.fullName()} is Paying taxes`);
  }
}

function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.eat = function() {
  console.log('Eating');
}

Person.prototype.communicate = function() {
  console.log('Communicating');
}

Person.prototype.sleep = function() {
  console.log('Sleeping');
}

Person.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}`;
}


function Doctor(firstName, lastName, age, gender, spec) {
  Person.call(this, firstName, lastName, age, gender);
  this.specialization = spec;
}

Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.constructor = Doctor;

Doctor.prototype.diagnose = function() {
  console.log('Diagnosing');
}


function Professor(firstName, lastName, age, gender, subject) {
  Person.call(this, firstName, lastName, age, gender);
  this.subjecct = subject;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.teach = function() {
  console.log('Teaching');
}


function Student(firstName, lastName, age, gender, degree) {
  Person.call(this, firstName, lastName, age, gender);
  this.degree = degree;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function() {
  console.log('Studying');
}


function GraduateStudent(firstName, lastName, age, gender, degree, graduateDegree) {
  Student.call(this, firstName, lastName, age, gender, degree);
  this.graduateDegree = graduateDegree;
}

GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.constructor = GraduateStudent;

GraduateStudent.prototype.research = function() {
  console.log('Researching');
}


let doctor = extend(new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics'), Professional);
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

let professor = extend(new Professor('foo', 'bar', 21, 'gender', 'Systems Engineering'), Professional);
console.log(professor instanceof Person);     // logs true
console.log(professor instanceof Professor);  // logs true
professor.eat();                              // logs 'Eating'
professor.communicate();                      // logs 'Communicating'
professor.sleep();                            // logs 'Sleeping'
console.log(professor.fullName());            // logs 'foo bar'
professor.teach();                            // logs 'Teaching'

doctor.invoice();                          // logs 'foo bar is Billing customer'
doctor.payTax();                           // logs 'foo bar Paying taxes'

Professional.invoice = function() {
  console.log(this.fullName() + ' is Asking customer to pay');
};

doctor.invoice();                          // logs 'foo bar is Asking customer to pay'
professor.invoice();                       // logs 'foo bar is Asking customer to pay'
professor.payTax();                        // logs 'foo bar Paying taxes'
